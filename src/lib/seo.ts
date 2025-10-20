export type LocalBusinessOptions = {
  name: string;
  url: string;
  phone: string;
  email?: string;
  image?: string;
  logo?: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  areaServed: string;
  sameAs?: string[];
};

export function localBusinessJsonLd(options: LocalBusinessOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: options.name,
    url: options.url,
    telephone: options.phone,
    email: options.email,
    image: options.image,
    logo: options.logo,
    address: {
      "@type": "PostalAddress",
      ...options.address,
    },
    areaServed: options.areaServed,
    sameAs: options.sameAs,
  };
}

export type ServiceOfferOptions = {
  name: string;
  description: string;
  serviceType: string;
  areaServed: string;
  offers: {
    name: string;
    price: string;
    priceCurrency: string;
    url: string;
    description: string;
  }[];
};

export function serviceOfferJsonLd(options: ServiceOfferOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: options.name,
    description: options.description,
    serviceType: options.serviceType,
    areaServed: options.areaServed,
    offers: options.offers.map((offer) => ({
      "@type": "Offer",
      price: offer.price,
      priceCurrency: offer.priceCurrency,
      name: offer.name,
      url: offer.url,
      description: offer.description,
      availability: "https://schema.org/InStock",
    })),
  };
}

export type FAQItem = {
  question: string;
  answer: string;
};

export function faqPageJsonLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
