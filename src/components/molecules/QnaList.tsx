import { useState } from "react";
import AccordionItem from "../atoms/AccordionItem";
import { TranslationProps } from "../../types/types";

const QnaList = (props: TranslationProps) => {
  const [openAnswer, setOpenAnswer] = useState<number[]>([1]);
  const { t } = props;

  const QnaItems = [
    {
      id: 1,
      question: t("home.qna.1.question"),
      answer: t("home.qna.1.answer"),
    },
    {
      id: 2,
      question: t("home.qna.2.question"),
      answer: t("home.qna.2.answer"),
    },
    {
      id: 3,
      question: t("home.qna.3.question"),
      answer: t("home.qna.3.answer"),
    },
    {
      id: 4,
      question: t("home.qna.4.question"),
      answer: t("home.qna.4.answer"),
    },
    {
      id: 5,
      question: t("home.qna.5.question"),
      answer: t("home.qna.5.answer"),
    },
    {
      id: 6,
      question: t("home.qna.6.question"),
      answer: t("home.qna.6.answer"),
    },
  ];

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
