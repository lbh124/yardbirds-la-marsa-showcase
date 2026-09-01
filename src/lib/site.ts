/**
 * Central content configuration.
 * Update these values once the restaurant confirms its details.
 */

export const site = {
  name: "Yardbirds",
  tagline: "Good food. Good company.",
  city: "La Marsa",
  country: "Tunisia",
  address: {
    line1: "13 Rue Mongi Slim",
    line2: "Marsa 2078",
    line3: "Tunisia",
  },
  phoneDisplay: "+216 99 332 882",
  phoneHref: "tel:+21699332882",
  // Replace with the verified Google Maps place link once confirmed.
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=13+Rue+Mongi+Slim%2C+Marsa+2078%2C+Tunisia",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=13%20Rue%20Mongi%20Slim%2C%20Marsa%202078%2C%20Tunisia&t=&z=16&ie=UTF8&iwloc=&output=embed",
  social: [
    { label: "Instagram", href: "" },
    { label: "Facebook", href: "" },
  ],
} as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/location", label: "Location" },
  { to: "/contact", label: "Contact" },
] as const;
