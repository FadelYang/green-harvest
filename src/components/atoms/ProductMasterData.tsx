import productHerbalImage1 from "product-herbal-1.png";

type Product = {
  productId: number;
  productThumbnailImage: string;
  productName: string;
  productDescription: string;
};

type Category = {
  categoryId: number;
  categoryName: string;
  products: Product[];
};

const productsByCategory: Record<string, Category> = {
  herbal: {
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
};

const getProductByCategory = (category: string): Category | undefined => {
  return productsByCategory[category] || undefined;
};

export default {
  productsByCategory,
  getProductByCategory,
};
