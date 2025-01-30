import productHerbalImage1 from "/img/product-herbal-1.png";
import productHerbalImage2 from "/img/product-herbal-2.png";
import productHerbalImage3 from "/img/product-herbal-3.png";
import productCosmeticImage1 from "/img/product-cosmetic-1.png";
import productCosmeticImage2 from "/img/product-cosmetic-2.png";
import productCosmeticImage3 from "/img/product-cosmetic-3.png";
import producDrinkImage1 from "/img/product-drink-1.png";
import producDrinkImage2 from "/img/product-drink-2.png";
import producDrinkImage3 from "/img/product-drink-3.png";
import producDrinkImage4 from "/img/product-drink-4.png";
import producDrinkImage5 from "/img/product-drink-5.png";
import producDrinkImage6 from "/img/product-drink-6.png";
import productDetailHerbalImage from "/img/product-detail-herbal.png";
import productDetailDrinkImage from "/img/product-detail-drink.png";
import productDetailCosmeticImage from "/img/product-detail-cosmetic.png";
import { TranslationProps } from "../../types/types";

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
  listSectionHeading: string;
  products: Product[];
};

export default function useProduct(props: TranslationProps) {
  const { t } = props;

  console.log('Item: ' + t('product.herbal.products[0].productId'));
  

  const productsByCategory: Record<string, Category> = {
    herbal: {
      hero: {
        heading: t('product.herbal.hero.header'),
        subHeading: t('product.herbal.hero.subHeader'),
        heroImage: productDetailHerbalImage,
      },
      categoryId: 1,
      categoryName: t('product.herbal.categoryName'),
      listSectionHeading: t('product.herbal.listSectionHeading'),
      products: [
        {
          productId: 1,
          productThumbnailImage: productHerbalImage1,
          productName: t('product.herbal.products.1.productName'),
          productDescription: t('product.herbal.products.1.productDescription'),
        },
        {
          productId: 2,
          productThumbnailImage: productHerbalImage2,
          productName: t('product.herbal.products.2.productName'),
          productDescription: t('product.herbal.products.2.productDescription'),
        },
        {
          productId: 3,
          productThumbnailImage: productHerbalImage3,
          productName: t('product.herbal.products.3.productName'),
          productDescription: t('product.herbal.products.3.productDescription'),
        },
      ],
    },
    drink: {
      hero: {
        heading: t('product.drink.hero.header'),
        subHeading: t('product.drink.hero.subHeader'),
        heroImage: productDetailDrinkImage,
      },
      categoryId: 2,
      categoryName: t('product.drink.categoryName'),
      listSectionHeading: t('product.drink.listSectionHeading'),
      products: [
        {
          productId: 4,
          productThumbnailImage: producDrinkImage1,
          productName: t('product.drink.products.1.productName'),
          productDescription: t('product.drink.products.1.productDescription')
        },
        {
          productId: 5,
          productThumbnailImage: producDrinkImage2,
          productName: t('product.drink.products.2.productName'),
          productDescription: t('product.drink.products.2.productDescription')
        },
        {
          productId: 6,
          productThumbnailImage: producDrinkImage3,
          productName: t('product.drink.products.3.productName'),
          productDescription: t('product.drink.products.3.productDescription')
        },
        {
          productId: 7,
          productThumbnailImage: producDrinkImage4,
          productName: t('product.drink.products.4.productName'),
          productDescription: t('product.drink.products.4.productDescription')
        },
        {
          productId: 8,
          productThumbnailImage: producDrinkImage5,
          productName: t('product.drink.products.5.productName'),
          productDescription: t('product.drink.products.5.productDescription')
        },
        {
          productId: 9,
          productThumbnailImage: producDrinkImage6,
          productName: t('product.drink.products.6.productName'),
          productDescription: t('product.drink.products.6.productDescription')
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
      listSectionHeading:
        "Which Cosmetic Products Can Be Makloned At Harvest Group?",
      products: [
        {
          productId: 10,
          productThumbnailImage: productCosmeticImage1,
          productName: "Internal Medicine Liquid",
          productDescription:
            "Herbal manufacturing such as Propolis, Stamina Honey, Fertility, Slimming, Stomach Honey, Children's Honey, Tolak Angin, Date Palm Extract and other products.",
        },
        {
          productId: 11,
          productThumbnailImage: productCosmeticImage2,
          productName: "External Medicine Liquid",
          productDescription:
            "Herbal manufacturing such as Propolis, Stamina Honey, Fertility, Slimming, Stomach Honey, Children's Honey, Tolak Angin, Date Palm Extract and other products.",
        },
        {
          productId: 12,
          productThumbnailImage: productCosmeticImage3,
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

  const getDetailProductPageContentByCategory = (category: string) => {
    return productsByCategory[category].hero || null;
  };

  return { getProductByCategory, getDetailProductPageContentByCategory };
}
