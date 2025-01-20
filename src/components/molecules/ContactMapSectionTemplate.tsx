import envelopIcon from "/img/envelopIcon.svg";
import contactAddressMasterData from "../atoms/contactAddressMasterData";
import WhatsappIcon from "../atoms/WhatsappIcon";
import PhoneIcon from "../atoms/PhoneIcon";
import EnvelopIcon from "../atoms/EnvelopIcon";
import FactoryIcon from "../atoms/FactoryIcon";
import MonitorIcon from "../atoms/MonitorIcon";

type ContactMapSectionTemplateProps = {
  country: string;
};

const ContactMapSectionTemplate = (props: ContactMapSectionTemplateProps) => {
  const { country } = props;
  const countryData = contactAddressMasterData.getAddressByCountry(country);

  return (
    <>
      <div className="flex gap-8 justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex gap-[10px]">
              <img src={countryData?.flag} alt="" />
              <p className="text-2xl text-slate-800 font-medium leading-[35px]">
                {countryData?.name}
              </p>
            </div>
            {!countryData?.isFactory && (
              <div className="text-slate-500 text-base font-normal leading-[26px]">
                {countryData?.fullAddress.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3 text-slate-800 text-base">
            {countryData?.isFactory && (
              <>
                <div className="flex gap-2">
                  <FactoryIcon fill="none" stroke="#64748B" />
                  <div className="flex flex-col gap-3">
                    {countryData.fullAddress.map((item, index) => (
                      <div className="">
                        <p key={index}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div className="flex gap-2 ">
              <PhoneIcon fill="none" stroke="#64748B" />
              <div className="flex flex-col gap-3">
                {countryData?.phoneNumber.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
            <div className="flex gap-2 items-start">
              {countryData?.whatsappNumber.length !== 0 && (
                <>
                  <WhatsappIcon fill="none" stroke="#64748B" />
                  <div className="flex flex-col gap-3">
                    {countryData?.whatsappNumber.map((item, index) => (
                      <>
                        {" "}
                        <div className="flex gap-3" key={index}>
                          <div>{item?.contactName}</div>
                          <div>{item.whatsappNumber}</div>
                        </div>
                      </>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="flex gap-2">
              {countryData?.otherContact[0].platformName === "Website" ? (
                <MonitorIcon fill="none" stroke="#64748B" />
              ) : (
                <EnvelopIcon fill="none" stroke="#64748B" />
              )}
              {countryData?.otherContact.map((item, index) => (
                <div key={index}>{item?.platformAddress}</div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <a href="#">
            <img src={countryData?.image.imageUrl} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactMapSectionTemplate;
