export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Mind & Wellness Psychology Practice",
    image: "https://example.com/photos/psychologist-office.jpg",
    url: "https://mindandwellness.com",
    telephone: "+15551234567",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Healing Street",
      addressLocality: "Wellness City",
      addressRegion: "WS",
      postalCode: "12345",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7128,
      longitude: -74.006,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "15:00",
      },
    ],
    priceRange: "$$",
    medicalSpecialty: ["Psychotherapy", "Cognitive Behavioral Therapy", "Trauma Therapy"],
    availableService: [
      {
        "@type": "MedicalTherapy",
        name: "Individual Therapy",
        description: "One-on-one therapy sessions tailored to your specific needs.",
      },
      {
        "@type": "MedicalTherapy",
        name: "Couples Therapy",
        description: "Therapy for couples to improve communication and resolve conflicts.",
      },
      {
        "@type": "MedicalTherapy",
        name: "Psychological Assessment",
        description: "Comprehensive evaluations for diagnosis and treatment planning.",
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
