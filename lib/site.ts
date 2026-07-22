export const SITE_NAME = "Main Barbershop";

export const BOOKSY_URL =
  "https://booksy.com/de-de/1646_main-barbershop_barbershop_73469_saarbruecken";

/* Kurzlink, auf den auch der Buchungs-QR-Code zeigt (public/booksy-qr.svg). */
export const BOOKSY_SHORT_URL = "https://mainbarbershop82.booksy.com/a";

export const INSTAGRAM_URL = "https://www.instagram.com/mainbarbershop.de/";

export const ADDRESS = {
  street: "Bahnhofstraße 40",
  city: "66111 Saarbrücken",
};

export const PHONE = {
  display: "0681 68641025",
  href: "tel:+4968168641025",
};

export const HOURS = [
  { days: "Montag – Samstag", time: "09:00 – 19:30 Uhr" },
  { days: "Sonntag", time: "Geschlossen" },
];

export const SERVICES = [
  {
    name: "Herrenhaarschnitt",
    price: "23 €",
    description: "Klassischer oder moderner Schnitt – präzise auf Sie abgestimmt.",
  },
  {
    name: "Bart",
    price: "17 €" ,
    description: "Konturieren, Trimmen und Pflege für einen gepflegten Bart.",
  },
  {
    name: "Augenbrauen",
    price: "8 €",
    description: "Saubere Konturen für einen klaren Blick.",
  },
  {
    name: "Komplettpaket",
    price: "45 €",
    description: "Haarschnitt, Bart, Augenbrauen und Wachs – das volle Programm.",
  },
  {
    name: "Kinderhaarschnitt",
    price: "18 €",
    description: "Geduldig und sorgfältig – für unsere jüngsten Kunden.",
  },
];

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Kontakt" },
];
