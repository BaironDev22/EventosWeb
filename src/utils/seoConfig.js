export const seoConfig = {
  baseURL: 'https://tu-dominio.com', // Cambia por tu dominio real
  defaultTitle: 'Eventos Premium - Organizamos tus Eventos Inolvidables',
  defaultDescription: 'Empresa líder en organización de eventos privados: matrimonios, cenas empresariales, comuniones y celebraciones exclusivas. Creamos experiencias únicas e inolvidables.',
  siteName: 'Eventos Premium',
  siteLanguage: 'es',
  ogLanguage: 'es_ES',
  themeColor: '#0284c7',
  
  // Social media
  twitter: '@eventospremium',
  facebookAppId: '',
  
  // Información de la empresa
  company: {
    name: 'Eventos Premium',
    legalName: 'Eventos Premium SL',
    description: 'Organizamos eventos privados exclusivos: matrimonios, cenas empresariales, comuniones y celebraciones especiales con atención personalizada y excelencia en cada detalle.',
    logo: '/logo.svg',
    telephone: '+34 900 123 456',
    email: 'info@eventospremium.com',
    address: {
      streetAddress: 'Calle Principal 123',
      addressLocality: 'Madrid',
      addressRegion: 'Madrid',
      postalCode: '28001',
      addressCountry: 'ES',
    },
    contactPoint: {
      telephone: '+34 900 123 456',
      contactType: 'Atención al Cliente',
      availableLanguage: ['Spanish', 'English'],
    },
    sameAs: [
      'https://facebook.com/eventospremium',
      'https://instagram.com/eventospremium',
      'https://twitter.com/eventospremium',
      'https://linkedin.com/company/eventospremium',
    ],
  },
};

// Generar JSON-LD para LocalBusiness
export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'EventVenue',
    name: seoConfig.company.name,
    legalName: seoConfig.company.legalName,
    description: seoConfig.company.description,
    url: seoConfig.baseURL,
    logo: `${seoConfig.baseURL}${seoConfig.company.logo}`,
    image: `${seoConfig.baseURL}/og-image.jpg`,
    telephone: seoConfig.company.telephone,
    email: seoConfig.company.email,
    address: {
      '@type': 'PostalAddress',
      ...seoConfig.company.address,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      ...seoConfig.company.contactPoint,
    },
    sameAs: seoConfig.company.sameAs,
    priceRange: '€€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  };
};

// Generar JSON-LD para eventos
export const generateEventSchema = (eventData) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: eventData.name,
    description: eventData.description,
    image: eventData.image,
    startDate: eventData.startDate,
    endDate: eventData.endDate,
    location: {
      '@type': 'Place',
      name: eventData.location,
      address: {
        '@type': 'PostalAddress',
        ...seoConfig.company.address,
      },
    },
    organizer: {
      '@type': 'Organization',
      name: seoConfig.company.name,
      url: seoConfig.baseURL,
    },
  };
};

// Generar breadcrumbs schema
export const generateBreadcrumbSchema = (items) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${seoConfig.baseURL}${item.url}`,
    })),
  };
};
