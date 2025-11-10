import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Calendar, Users, Sparkles, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Componente para animar los números
const AnimatedCounter = ({ value, duration = 2.5, delay = 0 }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  // Extraer el número y el sufijo (+ o K+)
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    // Iniciar la animación después del delay especificado
    const timer = setTimeout(() => {
      const controls = animate(motionValue, numericValue, {
        duration,
        ease: 'easeOut',
      });

      return () => controls.stop();
    }, delay);

    return () => clearTimeout(timer);
  }, [motionValue, numericValue, duration, delay]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest);
    });

    return () => unsubscribe();
  }, [rounded]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const stats = [
    { icon: Calendar, value: '500+', label: 'Eventos Realizados' },
    { icon: Users, value: '10K+', label: 'Clientes Satisfechos' },
    { icon: Sparkles, value: '15+', label: 'Años de Experiencia' },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80&fit=crop"
          alt="Evento elegante"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        
        {/* Overlay oscuro consistente - Mismo en móvil y desktop */}
        <div className="absolute inset-0 bg-dark-900/85"></div>
        
        {/* Degradado adicional para profundidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-transparent to-dark-900/70"></div>
      </div>

      <motion.div
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto text-center space-y-8 md:space-y-10">
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-500/10 text-primary-300 border border-primary-500/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Eventos Exclusivos desde 2010
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight px-4"
          >
            Creamos{' '}
            <span className="gradient-text bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">
              Momentos Inolvidables
            </span>
            <br />
            Para Tus Eventos Privados
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-dark-200 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Organizamos matrimonios, cenas empresariales, comuniones y celebraciones exclusivas con atención personalizada y excelencia en cada detalle.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          >
            <a
              href="/contact"
              className="group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium text-white bg-primary-600 rounded-lg shadow-lg hover:bg-primary-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Solicitar Presupuesto
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/#servicios"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium text-white bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
            >
              Ver Servicios
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto px-4"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary-400 mx-auto mb-2 md:mb-3" />
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">
                    <AnimatedCounter value={stat.value} duration={2.5} delay={1000} />
                  </div>
                  <div className="text-xs md:text-sm text-dark-300">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
