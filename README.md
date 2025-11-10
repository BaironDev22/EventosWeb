# 🎉 Eventos Premium - Sitio Web Corporativo

Sitio web corporativo moderno para empresa de eventos privados, construido con **Astro**, **Tailwind CSS**, **Framer Motion** y **AOS**.

## 🚀 Características

- ⚡ **Astro** - Framework web ultrarrápido
- 🎨 **Tailwind CSS** - Estilos utility-first con diseño personalizado
- 🎬 **Framer Motion** - Animaciones fluidas en componentes React
- 📜 **AOS** - Animaciones al hacer scroll
- 🔍 **SEO Optimizado** - Meta tags, Open Graph, JSON-LD Schema
- 📱 **Responsive** - Diseño adaptable a todos los dispositivos
- ♿ **Accesible** - Siguiendo las mejores prácticas de accesibilidad
- 🖼️ **Imágenes Optimizadas** - Lazy loading y WebP
- 📄 **Sitemap & Robots.txt** - Generación automática para SEO

## 📁 Estructura del Proyecto

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Hero animado con Framer Motion
│   │   ├── Navbar.astro      # Navegación responsive
│   │   ├── Footer.astro      # Pie de página
│   │   ├── ServiceCard.astro # Tarjetas de servicios
│   │   └── SEO.astro         # Componente SEO dinámico
│   ├── layouts/
│   │   └── MainLayout.astro  # Layout principal
│   ├── pages/
│   │   ├── index.astro       # Página principal
│   │   ├── about.astro       # Sobre nosotros
│   │   └── contact.astro     # Contacto
│   ├── styles/
│   │   └── global.css        # Estilos globales y Tailwind
│   └── utils/
│       └── seoConfig.js      # Configuración SEO y JSON-LD
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🛠️ Instalación

1. **Instalar dependencias:**

```bash
npm install
```

2. **Iniciar servidor de desarrollo:**

```bash
npm run dev
```

3. **Construir para producción:**

```bash
npm run build
```

4. **Vista previa de producción:**

```bash
npm run preview
```

## ⚙️ Configuración

### SEO

Edita `src/utils/seoConfig.js` para personalizar:
- Información de la empresa
- Datos de contacto
- Redes sociales
- Schema.org JSON-LD

### Colores

Personaliza los colores en `tailwind.config.mjs`:
- `primary` - Color principal (azul)
- `dark` - Tonos oscuros

### Dominio

Actualiza el dominio en:
- `astro.config.mjs` - propiedad `site`
- `src/utils/seoConfig.js` - propiedad `baseURL`

## 📄 Páginas

- **/** - Página principal con hero, servicios, galería y testimonios
- **/about** - Información de la empresa, valores y equipo
- **/contact** - Formulario de contacto e información

## 🎨 Componentes

### Hero.jsx
Componente React con animaciones Framer Motion para la sección hero.

### ServiceCard.astro
Tarjeta de servicio con animaciones AOS on-scroll.

### SEO.astro
Componente reutilizable para meta tags, Open Graph y JSON-LD.

### Navbar.astro
Navegación responsive con menú móvil.

### Footer.astro
Pie de página con enlaces, información de contacto y newsletter.

## 🌐 Deploy

El sitio está optimizado para ser desplegado en:

- **Vercel** - `vercel --prod`
- **Netlify** - Arrastra la carpeta `dist/`
- **GitHub Pages** - Configura GitHub Actions
- **Cualquier hosting estático**

## 📦 Tecnologías

- [Astro](https://astro.build) - Framework web
- [React](https://react.dev) - Componentes interactivos
- [Tailwind CSS](https://tailwindcss.com) - Estilos
- [Framer Motion](https://www.framer.com/motion/) - Animaciones React
- [AOS](https://michalsnik.github.io/aos/) - Animaciones on-scroll
- [Lucide React](https://lucide.dev) - Iconos
- [Astro SEO](https://github.com/jonasmerlin/astro-seo) - SEO optimizado

## 📝 Personalización

1. **Imágenes**: Reemplaza las imágenes de Unsplash con tus propias imágenes
2. **Contenido**: Actualiza textos en cada página según tu negocio
3. **Formulario**: Integra con servicio de formularios (Formspree, Netlify Forms, etc.)
4. **Mapa**: Agrega Google Maps o tu servicio de mapas preferido
5. **Analytics**: Añade Google Analytics o tu herramienta preferida

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 📞 Contacto

Para preguntas o soporte, contacta a: info@eventospremium.com

---

Hecho con ❤️ por Eventos Premium
