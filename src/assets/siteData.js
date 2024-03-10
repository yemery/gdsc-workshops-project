const navbarLinks = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Products",
    link: "/products",
  },
  {
    label: "Contact",
    link: "/Contact",
  },
];

const footerData = [
  {
    category: "All products",
    properties: [
      { label: "Phones", path: "/phones" },
      { label: "Watch", path: "/watch" },
      { label: "Tablet", path: "/tablet" },
      { label: "Laptops", path: "/laptops" },
    ],
  },
  {
    category: "Company",
    properties: [
      { label: "About", path: "/company/about" },
      { label: "Support", path: "/company/support" },
    ],
  },
  {
    category: "Support",
    properties: [
      { label: "Style Guide", path: "/support/style-guide" },
      { label: "Licensing", path: "/support/licensing" },
      { label: "Change Log", path: "/support/change-log" },
      { label: "Contact", path: "/support/contact" },
    ],
  },
  {
    category: "Follow Us",
    properties: [
      { label: "Instagram", path: "https://www.instagram.com" },
      { label: "Facebook", path: "https://www.facebook.com" },
      { label: "LinkedIn", path: "https://www.linkedin.com" },
      { label: "Youtube", path: "https://www.youtube.com" },
    ],
  },
];

const shopSectionData = [
  { label: "laptops", image: "laptops.png" },
  { label: "watches", image: "watches.png" },
  { label: "tablets", image: "tablets.png" },
  { label: "phones", image: "phones.png" },
];

export { navbarLinks, footerData, shopSectionData };
