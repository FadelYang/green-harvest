import { useState } from "react";
import ManufacturingProcessCard from "../atoms/ManufacturingProcessCard";

const manufacturingProcesses = [
  {
    id: 1,
    title: "Product Concept",
    description:
      "Consult with us about the product concept you want to create according to your needs.",
  },
  {
    id: 2,
    title: "Determining Formula",
    description:
      "Discuss your desired product formula and raw materials with our R&D expert team.",
  },
  {
    id: 3,
    title: "Sample Preperation",
    description:
      "We produce product samples according to the best concept & formulation that you want.",
  },
  {
    id: 4,
    title: "Deal Price",
    description:
      "A cooperation contract agreement for product manufacturing to be made and distributed in accordance with adequate procedures.",
  },
  {
    id: 5,
    title: "Choosing Packaging",
    description:
      "Discuss packaging design with our best designer team to support your brand & customer appeal.",
  },
  {
    id: 6,
    title: "Stability & Compatibility Test",
    description:
      "We perform a series of tests to ensure the formula will not change when filled into your product packaging.",
  },
  {
    id: 7,
    title: "Product License Registration",
    description:
      "Our team will help you process BPOM, HKI, and HALAL permits for your product until it's market-ready!",
  },
  {
    id: 8,
    title: "Production & Manufacture",
    description:
      "Choose us as your brand partner. We create your products with national and international standards.",
  },
  {
    id: 9,
    title: "Product Shipping",
    description:
      "We will send your products ready for distribution & marketing on time.",
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
