import productHerbalImage1 from "/img/product-herbal-1.png";
import productDetailHerbalImage from "/img/product-detail-herbal.png";
import productDetailDrinkImage from "/img/product-detail-drink.png";
import productDetailCosmeticImage from "/img/product-detail-cosmetic.png";

type Product = {
  productId: number;
  productThumbnailImage: string;
  productName: string;
  productDescription: string;
};

type Hero = {
  heading: string;
  subHeading: string;
  heroImage: string;
};

type Category = {
  hero: Hero;
  categoryId: number;
  categoryName: string;
  products: Product[];
};

const productsByCategory: Record<string, Category> = {
  herbal: {
    hero: {
      heading: "Private Label Herbal Product Maklon BPOM Certified",
      subHeading:
        "All-in-One Solutions for Your Herbal Brand. As Indonesia's largest herbal manufacturer, we have developed hundreds of prominent brand products. Launch your herbal business with confidence, ensuring compliance with BPOM and Halal MUI standards—all under your own brand.",
      heroImage: productDetailHerbalImage,
    },
    categoryId: 1,
    categoryName: "Herbal",
    products: [
      {
        productId: 1,
        productThumbnailImage: productHerbalImage1,
        productName: "Internal Medicine Liquid",
        productDescription:
          "Herbal manufacturing such as Propolis, Stamina Honey, Fertility, Slimming, Stomach Honey, Children's Honey, Tolak Angin, Date Palm Extract and other products.",
      },
      {
        productId: 2,
        productThumbnailImage: productHerbalImage1,
        productName: "External Medicine Liquid",
        productDescription:
          "Herbal manufacturing such as Propolis, Stamina Honey, Fertility, Slimming, Stomach Honey, Children's Honey, Tolak Angin, Date Palm Extract and other products.",
      },
      {
        productId: 3,
        productThumbnailImage: productHerbalImage1,
        productName: "Capsule Containing Extract Product.",
        productDescription:
          "Maklon products Spirulina Capsules, ASI boosters, Collagen Capsules, Ginger Extract Capsules, Binahong Extract Capsules, Ginseng Extract Capsules, Turmeric Extract Capsules etc.",
      },
    ],
  },
  drink: {
    hero: {
      heading: "Private Label Powder Drink Product Maklon BPOM Certified",
      subHeading:
        "Your Partner in Powder Drink Manufacturing. As Indonesia’s leading beverage maklon, we specialize in producing a wide range of premium powder drink products, including protein shakes, meal replacements, and collagen drinks. Launch your brand with confidence, ensuring your products meet BPOM and Halal MUI standards—customized under your label from start to finish.",
      heroImage: productDetailDrinkImage,
    },
    categoryId: 2,
    categoryName: "Drink",
    products: [
      {
        productId: 4,
        productThumbnailImage: productHerbalImage1,
        productName: "Collagen Drink",
        productDescription:
          "Collagen drinks with antioxidants tighten skin, reduce wrinkles, and regenerate skin cells.",
      },
      {
        productId: 5,
        productThumbnailImage: productHerbalImage1,
        productName: "Meal Replacement",
        productDescription:
          "Diet meal replacement drinks like Added Oat, Fiber, Malt, Soy Protein Isolate, etc.",
      },
      {
        productId: 6,
        productThumbnailImage: productHerbalImage1,
        productName: "Colostrum Milk Powder",
        productDescription:
          "Colostrum milk powder with almond flavor: anti-aging, slimming, and boosts immunity.",
      },
      {
        productId: 7,
        productThumbnailImage: productHerbalImage1,
        productName: "Fitness Supplement",
        productDescription:
          "Maklon fitness supplement drinks like whey protein and milk for athletes and workouts to maximize muscle growth.",
      },
      {
        productId: 8,
        productThumbnailImage: productHerbalImage1,
        productName: "Fiber Drink",
        productDescription:
          "A fiber-rich drink blend with natural fruit extracts for promoting weight loss, digestive health, and overall health concern.",
      },
      {
        productId: 9,
        productThumbnailImage: productHerbalImage1,
        productName: "Adult Stamina",
        productDescription:
          "Adult Stamina drinks, including Stamina Drink and Coffee Stamina, are made from natural herbal extracts to effectively boost men's stamina.",
      },
    ],
  },
  cosmetic: {
    hero: {
      heading: "Private Label Cosmetics Product Maklon BPOM Certified",
      subHeading:
        "Complete Solutions for Your Cosmetics Brand. As a trusted cosmetics manufacturer in Indonesia, we offer full-service development of premium cosmetic products, including skincare, decorative cosmetics, and personal care items. Launch your brand with ease, ensuring compliance with BPOM and Halal MUI standards—all customized under your unique label.",
      heroImage: productDetailCosmeticImage,
    },
    categoryId: 3,
    categoryName: "Herbal",
    products: [
      {
        productId: 10,
        productThumbnailImage: productHerbalImage1,
        productName: "Internal Medicine Liquid",
        productDescription:
          "Herbal manufacturing such as Propolis, Stamina Honey, Fertility, Slimming, Stomach Honey, Children's Honey, Tolak Angin, Date Palm Extract and other products.",
      },
      {
        productId: 11,
        productThumbnailImage: productHerbalImage1,
        productName: "External Medicine Liquid",
        productDescription:
          "Herbal manufacturing such as Propolis, Stamina Honey, Fertility, Slimming, Stomach Honey, Children's Honey, Tolak Angin, Date Palm Extract and other products.",
      },
      {
        productId: 12,
        productThumbnailImage: productHerbalImage1,
        productName: "Capsule Containing Extract Product.",
        productDescription:
          "Maklon products Spirulina Capsules, ASI boosters, Collagen Capsules, Ginger Extract Capsules, Binahong Extract Capsules, Ginseng Extract Capsules, Turmeric Extract Capsules etc.",
      },
    ],
  },
};

const getProductByCategory = (category: string): Category | null => {
  return productsByCategory[category] || undefined;
};

const getDetailProductPageContentByCategory = (
  category: string
) => {
  return productsByCategory[category].hero || null;
};


export default {
  getProductByCategory,
  getDetailProductPageContentByCategory
};
