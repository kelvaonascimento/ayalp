export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://ayahomeresort.com.br/#organization",
        "name": "Wind Incorporadora",
        "url": "https://ayahomeresort.com.br",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ayahomeresort.com.br/images/logo-vermelho.png"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Miguel Prisco, 2001",
          "addressLocality": "Ribeirão Pires",
          "addressRegion": "SP",
          "postalCode": "09400-000",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -23.7112,
          "longitude": -46.4108
        },
        "areaServed": {
          "@type": "City",
          "name": "Ribeirão Pires"
        }
      },
      {
        "@type": "ApartmentComplex",
        "@id": "https://ayahomeresort.com.br/#apartment",
        "name": "AYA Home Resort",
        "description": "Apartamentos de 2 e 3 dormitórios com suíte em Ribeirão Pires, SP. 31 itens de lazer, piscina aquecida, churrasqueira e muito mais.",
        "url": "https://ayahomeresort.com.br",
        "image": [
          "https://ayahomeresort.com.br/images/imagem%20fachada/MBRASIL_AYA_FACHADA%201_HR.jpg",
          "https://ayahomeresort.com.br/images/imagem%20fachada/MBRASIL_AYA_FACHADA%202_HR.jpg"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Miguel Prisco, 2000",
          "addressLocality": "Ribeirão Pires",
          "addressRegion": "SP",
          "postalCode": "09400-000",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -23.7112,
          "longitude": -46.4108
        },
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Piscina Coberta Aquecida", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Piscina Descoberta Climatizada", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Fitness", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Churrasqueira", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Playground", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Pet Place", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Coworking", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Cinema", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Beach Arena", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Brinquedoteca", "value": true }
        ],
        "numberOfAvailableAccommodationUnits": 8,
        "petsAllowed": true
      },
      {
        "@type": "Product",
        "name": "Apartamento AYA Home Resort",
        "description": "Apartamentos de 2 e 3 dormitórios com suíte, varanda gourmet e 31 itens de lazer",
        "brand": {
          "@type": "Brand",
          "name": "Wind Incorporadora"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "BRL",
          "availability": "https://schema.org/InStock",
          "areaServed": {
            "@type": "City",
            "name": "Ribeirão Pires"
          }
        },
        "image": "https://ayahomeresort.com.br/images/imagem%20fachada/MBRASIL_AYA_FACHADA%201_HR.jpg"
      },
      {
        "@type": "WebSite",
        "@id": "https://ayahomeresort.com.br/#website",
        "url": "https://ayahomeresort.com.br",
        "name": "AYA Home Resort",
        "description": "Site oficial do empreendimento AYA Home Resort em Ribeirão Pires",
        "publisher": {
          "@id": "https://ayahomeresort.com.br/#organization"
        },
        "inLanguage": "pt-BR"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ayahomeresort.com.br"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Empreendimento",
            "item": "https://ayahomeresort.com.br/#empreendimento"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Plantas",
            "item": "https://ayahomeresort.com.br/#plantas"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Contato",
            "item": "https://ayahomeresort.com.br/#contato"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
