import AccordionItem from '../atoms/AccordionItem';

const QnaItems = [
  {
    question: "What is the minimum order (MOQ) at Harvest Group",
    answer:
      "MOQ & minimum order at harvest group is quite low. You can make Maklon Health Drink Products, herbal, supplements or cosmetics / skincare legally according to your wishes & requests.",
      isOpen: true
  },
  {
    question: "What is the minimum order (MOQ) at Harvest Group",
    answer:
      "MOQ & minimum order at harvest group is quite low. You can make Maklon Health Drink Products, herbal, supplements or cosmetics / skincare legally according to your wishes & requests.",
      isOpen: false
  },
  {
    question: "What is the minimum order (MOQ) at Harvest Group",
    answer:
      "MOQ & minimum order at harvest group is quite low. You can make Maklon Health Drink Products, herbal, supplements or cosmetics / skincare legally according to your wishes & requests.",
      isOpen: false
  },
  {
    question: "What is the minimum order (MOQ) at Harvest Group",
    answer:
      "MOQ & minimum order at harvest group is quite low. You can make Maklon Health Drink Products, herbal, supplements or cosmetics / skincare legally according to your wishes & requests.",
      isOpen: false
  },
  {
    question: "What is the minimum order (MOQ) at Harvest Group",
    answer:
      "MOQ & minimum order at harvest group is quite low. You can make Maklon Health Drink Products, herbal, supplements or cosmetics / skincare legally according to your wishes & requests.",
      isOpen: false
  },
  {
    question: "What is the minimum order (MOQ) at Harvest Group",
    answer:
      "MOQ & minimum order at harvest group is quite low. You can make Maklon Health Drink Products, herbal, supplements or cosmetics / skincare legally according to your wishes & requests.",
      isOpen: false
  },
];

const QnaList = () => {
  return (
    QnaItems.map((item, index )=> (
      <AccordionItem question={item.question} asnwer={item.answer} isOpen={item.isOpen} key={index}/>
    ))
  );
};

export default QnaList;
