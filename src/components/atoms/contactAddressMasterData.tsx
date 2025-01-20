import indonesiaFlag from "/img/indonesia-flag.svg";
import malaysiaFlag from "/img/malaysia-flag.svg";
import indonesiaContactImage1 from "/img/indonesia-contact-image.png";
import malaysiaContactImage1 from "/img/malaysia-contact-image.png";

interface WhatsappContact {
  contactName: string | null;
  whatsappNumber: string;
}

interface OtherContact {
  platformName: string;
  platformAddress: string;
}

interface Image {
  imageUrl: string;
  imageHref: string;
}

interface CountryAddress {
  name: string;
  flag: string;
  isFactory: boolean;
  fullAddress: string[];
  phoneNumber: string[];
  whatsappNumber: WhatsappContact[];
  otherContact: OtherContact[];
  image: Image;
}

const addresses: Record<string, CountryAddress> = {
  indonesia: {
    name: "Indonesia",
    flag: indonesiaFlag,
    isFactory: false,
    fullAddress: [
      "Era Prima Warehouse and Industrial Complex",
      "Jl. Daan Mogot KM 21 No. 1 Block Q1 Kel, RT.001/RW.001",
      "Poris Plawad, Cipondoh, Tangerang City, Banten 15141",
    ],
    phoneNumber: ["(+6221) 29879101"],
    whatsappNumber: [
      {
        contactName: "WA Food Suplement",
        whatsappNumber: "+62 812-8045-4168",
      },
      {
        contactName: "WA Cosmetics & Skincare:",
        whatsappNumber: "+62 812-9865-9168",
      },
    ],
    otherContact: [
      {
        platformName: "Email",
        platformAddress: "info@greenlifeharvest.com",
      },
    ],
    image: { imageUrl: indonesiaContactImage1, imageHref: "#" },
  },
  malaysia: {
    name: "Malaysia",
    flag: malaysiaFlag,
    isFactory: true,
    fullAddress: [
      "Greenlife Harvest Marketing (M) Sdn Bhd (788643-U)",
      "Greenlife Harvest (M) Sdn Bhd (790012-P)",
      "Greenlife Harvest BioTech (M) Sdn Bhd (924532-D)",
    ],
    phoneNumber: ["+603-9171 7828", "+603-9172 5828"],
    whatsappNumber: [],
    otherContact: [
      {
        platformName: "Website",
        platformAddress: "greenlifeharvest2u.com",
      },
    ],
    image: { imageUrl: malaysiaContactImage1, imageHref: "#" },
  },
};

const getAddressByCountry = (country: string): CountryAddress | null => {
  return addresses[country] || null;
};

export default {
  getAddressByCountry,
};
