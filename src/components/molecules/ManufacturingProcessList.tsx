import { useState } from "react";
import manufacturingProcessImage1 from "/img/manufacturing-process-1.webp";
import manufacturingProcessImage2 from "/img/manufacturing-process-2.webp";
import manufacturingProcessImage3 from "/img/manufacturing-process-3.webp";
import manufacturingProcessImage4 from "/img/manufacturing-process-4.webp";
import manufacturingProcessImage5 from "/img/manufacturing-process-5.webp";
import manufacturingProcessImage6 from "/img/manufacturing-process-6.webp";
import manufacturingProcessImage7 from "/img/manufacturing-process-7.webp";
import manufacturingProcessImage8 from "/img/manufacturing-process-8.webp";
import manufacturingProcessImage9 from "/img/manufacturing-process-9.webp";

import ManufacturingProcessCard from "../atoms/ManufacturingProcessCard";
import { useTranslationContext } from "../../context/TranslationContext";
import useImagePreloader from "../../hooks/useImagePreloader";

const preloadImagesList = [
  manufacturingProcessImage1,
  manufacturingProcessImage2,
  manufacturingProcessImage3,
  manufacturingProcessImage4,
  manufacturingProcessImage5,
  manufacturingProcessImage6,
  manufacturingProcessImage7,
  manufacturingProcessImage8,
  manufacturingProcessImage9,
];

const ManufacturingProcessList = () => {
  const [openDetail, setOpenDetail] = useState<number | null>(1);
  const { t } = useTranslationContext();
  const { imagesPreloaded } = useImagePreloader(preloadImagesList);

  const manufacturingProcesses = [
    {
      id: 1,
      title: t("home.manufacturingProcess.1.title"),
      openTitle: t("home.manufacturingProcess.1.openTitle"),
      description: t("home.manufacturingProcess.1.description"),
      imageThumbnail: manufacturingProcessImage1,
    },
    {
      id: 2,
      title: t("home.manufacturingProcess.2.title"),
      openTitle: t("home.manufacturingProcess.2.openTitle"),
      description: t("home.manufacturingProcess.2.description"),
      imageThumbnail: manufacturingProcessImage2,
    },
    {
      id: 3,
      title: t("home.manufacturingProcess.3.title"),
      openTitle: t("home.manufacturingProcess.3.openTitle"),
      description: t("home.manufacturingProcess.3.description"),
      imageThumbnail: manufacturingProcessImage3,
    },
    {
      id: 4,
      title: t("home.manufacturingProcess.4.title"),
      openTitle: t("home.manufacturingProcess.4.openTitle"),
      description: t("home.manufacturingProcess.4.description"),
      imageThumbnail: manufacturingProcessImage4,
    },
    {
      id: 5,
      title: t("home.manufacturingProcess.5.title"),
      openTitle: t("home.manufacturingProcess.5.openTitle"),
      description: t("home.manufacturingProcess.5.description"),
      imageThumbnail: manufacturingProcessImage5,
    },
    {
      id: 6,
      title: t("home.manufacturingProcess.6.title"),
      openTitle: t("home.manufacturingProcess.6.openTitle"),
      description: t("home.manufacturingProcess.6.description"),
      imageThumbnail: manufacturingProcessImage6,
    },
    {
      id: 7,
      title: t("home.manufacturingProcess.7.title"),
      openTitle: t("home.manufacturingProcess.7.openTitle"),
      description: t("home.manufacturingProcess.7.description"),
      imageThumbnail: manufacturingProcessImage7,
    },
    {
      id: 8,
      title: t("home.manufacturingProcess.8.title"),
      openTitle: t("home.manufacturingProcess.8.openTitle"),
      description: t("home.manufacturingProcess.8.description"),
      imageThumbnail: manufacturingProcessImage8,
    },
    {
      id: 9,
      title: t("home.manufacturingProcess.9.title"),
      openTitle: t("home.manufacturingProcess.9.openTitle"),
      description: t("home.manufacturingProcess.9.description"),
      imageThumbnail: manufacturingProcessImage9,
    },
  ];

  const toggleDetail = (id: number | null) => {
    setOpenDetail(openDetail === id ? null : id); // Close if open, open if closed
  };

  return (
    <>
      {imagesPreloaded && (
        <div className="flex xl:flex-row flex-col">
          {manufacturingProcesses.map((item) => (
            <ManufacturingProcessCard
              key={item.id}
              imageThumbnail={item.imageThumbnail}
              id={item.id}
              title={item.title}
              openTitle={item.openTitle}
              description={item.description}
              openDetail={openDetail}
              onClick={() => toggleDetail(item.id)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ManufacturingProcessList;
