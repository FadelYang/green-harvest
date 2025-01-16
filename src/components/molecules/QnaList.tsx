import { useState } from "react";
import AccordionItem from "../atoms/AccordionItem";

const QnaItems = [
  {
    id: 1,
    question: "What is the minimum order (MOQ) at Harvest Group",
    answer:
      "MOQ & minimum order at harvest group is quite low. You can make Maklon Health Drink Products, herbal, supplements or cosmetics / skincare legally according to your wishes & requests.",
  },
  {
    id: 2,
    question: "What is Maklon?",
    answer:
      "Maklon is taken from the Dutch language, namely makloon, which means manufacturing fee. However, the realization is a service provider that has its own rules & provides production services with formulations according to consumer demand. Usually the products that are maklon such as herbal in the form of tablets, health food and drinks in the form of powder & the ones that are currently popular are beauty cosmetics & skincare products.",
  },
  {
    id: 3,
    question: "Where is Harvest Group’s Address?",
    answer:
      "We have 4 manufacturers & factories located in 1 area, namely: \n\n Era Prima Warehouse and Industrial Complex Jl. Daan Mogot KM 21 No. 1 Block Q1 Kel, RT.001/RW.001, Poris Plawad, Cipondoh, Tangerang City, Banten 15141, Indonesia.",
  },
  {
    id: 4,
    question: "How to request a Maklon product sample?",
    answer:
      "You can contact our Marketing Division for consultation regarding product concepts, and request Product Samples according to the Formula you want. \n\n Making Maklon Product Samples with us is free without any costs. \n\n For those of you who do not have a concept & formula, you don't need to worry, because our marketing support is ready to provide ideas & formula concepts based on the benefits you want.",
  },
  {
    id: 5,
    question:
      "Can harvest group make a product exactly like an existing product?",
    answer:
      "Of course it is possible. Our Research & Development Expert Team has experience in making thousands of products with various formulations. We will even design a unique formula for each product, so that it has strong characteristics and seeks the characteristics of a product.",
  },
  {
    id: 6,
    question:
      "How long is the estimate production time at Maklon Harvest Group?",
    answer:
      "The first Maklon Production Process is different for each Maklon Division, but for the 2nd PO or Repeat Order, the production process only takes 2-3 weeks after order confirmation.",
  },
];

const QnaList = () => {
  const [openAnswer, setOpenAnswer] = useState<number[]>([1]);

  const toggleAnswer = (id: number) => {
    if (openAnswer.includes(id)) {
      setOpenAnswer(openAnswer.filter((openId) => openId !== id));
    } else {
      setOpenAnswer([...openAnswer, id]);
    }
  };

  return QnaItems.map((item) => (
    <AccordionItem
      key={item.id}
      question={item.question}
      answer={item.answer}
      isOpen={openAnswer.includes(item.id)}
      onClick={() => toggleAnswer(item.id)}
    />
  ));
};

export default QnaList;
