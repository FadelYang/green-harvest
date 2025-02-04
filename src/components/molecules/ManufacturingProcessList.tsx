import { useState } from "react";
import manufacturingProcessImage1 from "/img/manufacturing-process-1.png";
import manufacturingProcessImage2 from "/img/manufacturing-process-2.png";
import manufacturingProcessImage3 from "/img/manufacturing-process-3.png";
import manufacturingProcessImage4 from "/img/manufacturing-process-4.png";
import manufacturingProcessImage5 from "/img/manufacturing-process-5.png";
import manufacturingProcessImage6 from "/img/manufacturing-process-6.png";
import manufacturingProcessImage7 from "/img/manufacturing-process-7.png";
import manufacturingProcessImage8 from "/img/manufacturing-process-8.png";
import manufacturingProcessImage9 from "/img/manufacturing-process-9.png";

import ManufacturingProcessCard from "../atoms/ManufacturingProcessCard";
import { useTranslationContext } from "../../context/TranslationContext";

const ManufacturingProcessList = () => {
  const [openDetail, setOpenDetail] = useState<number | null>(1);
  const { t } = useTranslationContext();

  const manufacturingProcesses = [
    {
      id: 1,
      title: t("home.manufacturingProcess.1.title"),
      description:t("home.manufacturingProcess.1.description"),
      imageThumbnail: manufacturingProcessImage1,
    },
    {
      id: 2,
      title: t("home.manufacturingProcess.2.title"),
      description:t("home.manufacturingProcess.2.description"),
      imageThumbnail: manufacturingProcessImage2,
    },
    {
      id: 3,
      title: t("home.manufacturingProcess.3.title"),
      description:t("home.manufacturingProcess.3.description"),
      imageThumbnail: manufacturingProcessImage3,
    },
    {
      id: 4,
      title: t("home.manufacturingProcess.4.title"),
      description:t("home.manufacturingProcess.4.description"),
      imageThumbnail: manufacturingProcessImage4,
    },
    {
      id: 5,
      title: t("home.manufacturingProcess.5.title"),
      description:t("home.manufacturingProcess.5.description"),
      imageThumbnail: manufacturingProcessImage5,
    },
    {
      id: 6,
      title: t("home.manufacturingProcess.1.title"),
      description:t("home.manufacturingProcess.1.description"),
      imageThumbnail: manufacturingProcessImage6,
    },
    {
      id: 7,
      title: t("home.manufacturingProcess.7.title"),
      description:t("home.manufacturingProcess.7.description"),
      imageThumbnail: manufacturingProcessImage7,
    },
    {
      id: 8,
      title: t("home.manufacturingProcess.8.title"),
      description:t("home.manufacturingProcess.8.description"),
      imageThumbnail: manufacturingProcessImage8,
    },
    {
      id: 9,
      title: t("home.manufacturingProcess.9.title"),
      description:t("home.manufacturingProcess.9.description"),
      imageThumbnail: manufacturingProcessImage9,
    },
  ];

  const toggleDetail = (id: number | null) => {
    setOpenDetail(openDetail === id ? null : id); // Close if open, open if closed
  };

  return (
    <>
      <div className="flex xl:flex-row flex-col">
        {manufacturingProcesses.map((item) => (
          <ManufacturingProcessCard
            key={item.id}
            imageThumbnail={item.imageThumbnail}
            id={item.id}
            title={item.title}
            description={item.description}
            openDetail={openDetail}
            onClick={() => toggleDetail(item.id)}
          />
        ))}
      </div>
    </>
  );
};

export default ManufacturingProcessList;
