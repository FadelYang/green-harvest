import indonesiaFlag from "/img/indonesia-flag.svg";
import malaysiaFlag from "/img/malaysia-flag.svg";
import indonesiaContactImage1 from "/img/indonesia-contact-image-2.webp";
import malaysiaContactImage1 from "/img/malaysia-contact-image.webp";
import { TranslationProps } from '../../types/types';

type WhatsappContact = {
  contactName: string | null;
  whatsappNumber: string;
};

type OtherContact = {
  platformName: string;
  platformAddress: string;
};

type Image = {
  imageUrl: string;
  imageHref: string;
};

type CountryAddress = {
  name: string;
  mapHref: string;
  flag: string;
  isFactory: boolean;
  fullAddress: string[];
  phoneNumber: string[];
  whatsappNumber: WhatsappContact[];
  otherContact: OtherContact[];
  image: Image;
};

const useAddresses = (props: TranslationProps) => {
  const { t } = props;

  const addresses: Record<string, CountryAddress> = {
    indonesia: {
      name: "Indonesia",
      mapHref: "https://maps.app.goo.gl/9vyszBvcPFM41tmT9",
      flag: indonesiaFlag,
      isFactory: false,
      fullAddress: [
        t("contact.address.indonesia.1"),
        t("contact.address.indonesia.2"),
        t("contact.address.indonesia.3"),
      ],
      phoneNumber: ["(+6221) 29879101"],
      whatsappNumber: [
        { contactName: "WA Food Suplement", whatsappNumber: "+62 812-8045-4168" },
        { contactName: "WA Cosmetics & Skincare", whatsappNumber: "+62 812-9865-9168" },
      ],
      otherContact: [{ platformName: "Email", platformAddress: "info@greenlifeharvest.com" }],
      image: { imageUrl: indonesiaContactImage1, imageHref: "#" },
    },
    malaysia: {
      name: "Malaysia",
      mapHref: "https://maps.app.goo.gl/9vyszBvcPFM41tmT9",
      flag: malaysiaFlag,
      isFactory: true,
      fullAddress: [
        t("contact.address.malaysia.1"),
        t("contact.address.malaysia.2"),
        t("contact.address.malaysia.3"),
      ],
      phoneNumber: ["+603-9171 7828", "+603-9172 5828"],
      whatsappNumber: [],
      otherContact: [{ platformName: "Website", platformAddress: "greenlifeharvest2u.com" }],
      image: { imageUrl: malaysiaContactImage1, imageHref: "#" },
    },
  };

  const getAddressByCountry = (country: string): CountryAddress | null => {
    return addresses[country] || null;
  };

  return { getAddressByCountry };
};

export default useAddresses;
