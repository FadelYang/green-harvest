import ContactMapSectionTemplate from "../molecules/ContactMapSectionTemplate";

const ContactAddressSection = () => {
  return (
    <>
      <div className='flex flex-col gap-36 max-w-[1444px] mx-auto px-24'>
        <ContactMapSectionTemplate country="indonesia" />
        <ContactMapSectionTemplate country="malaysia" />
      </div>
    </>
  );
};

export default ContactAddressSection;
