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

const manufacturingProcesses = [
  {
    id: 1,
    title: "Product Concept",
    description:
      "Consult with us about the product concept you want to create according to your needs.",
    imageThumbnail: manufacturingProcessImage1
  },
  {
    id: 2,
    title: "Determining Formula",
    description:
      "Discuss your desired product formula and raw materials with our R&D expert team.",
    imageThumbnail: manufacturingProcessImage2
  },
  {
    id: 3,
    title: "Sample Preperation",
    description:
    "We produce product samples according to the best concept & formulation that you want.",
    imageThumbnail: manufacturingProcessImage3
  },
  {
    id: 4,
    title: "Deal Price",
    description:
      "A cooperation contract agreement for product manufacturing to be made and distributed in accordance with adequate procedures.",
      imageThumbnail: manufacturingProcessImage4
    },
  {
    id: 5,
    title: "Choosing Packaging",
    description:
    "Discuss packaging design with our best designer team to support your brand & customer appeal.",
    imageThumbnail: manufacturingProcessImage5
  },
  {
    id: 6,
    title: "Stability & Compatibility Test",
    description:
    "We perform a series of tests to ensure the formula will not change when filled into your product packaging.",
    imageThumbnail: manufacturingProcessImage6
  },
  {
    id: 7,
    title: "Product License Registration",
    description:
    "Our team will help you process BPOM, HKI, and HALAL permits for your product until it's market-ready!",
    imageThumbnail: manufacturingProcessImage7
  },
  {
    id: 8,
    title: "Production & Manufacture",
    description:
    "Choose us as your brand partner. We create your products with national and international standards.",
    imageThumbnail: manufacturingProcessImage8
  },
  {
    id: 9,
    title: "Product Shipping",
    description:
    "We will send your products ready for distribution & marketing on time.",
    imageThumbnail: manufacturingProcessImage9
  },
];

const ManufacturingProcessList = () => {
  const [openDetail, setOpenDetail] = useState<number | null>(1);

  const toggleDetail = (id: number | null) => {
    setOpenDetail(openDetail === id ? null : id); // Close if open, open if closed
  };

  return (
    <>
      <div className='flex'>
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
