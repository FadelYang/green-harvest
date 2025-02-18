import footerLogo from "/img/footer-logo.png";
import instagramIcon from "/img/instagramIcon.svg";
import twitterIcon from "/img/twitterIcon.svg";
import facebookIcon from "/img/facebookIcon.svg";
import phoneIcon from "/img/phoneIcon.svg";
import whatsAppIcon from "/img/whatsappIcon.svg";
import envelopIcon from "/img/envelopIcon.svg";
// import { useTranslationContext } from "../../context/TranslationContext";
import { TFunction } from "i18next";

type FooterProps = {
  t: TFunction<"translation", undefined>;
};

const Footer = (props: FooterProps) => {
  const { t } = props;

  return (
    <div className="bg-black xl:py-[72px] -mb-6">
      <div className=" text-white xl:px-24 p-6 mx-auto max-w-[1444px]">
        <div className="flex xl:flex-row flex-col xl:gap-24 gap-[74px]">
          {/* First column */}
          <div className="max-w-[212px] flex flex-col justify-between h-full gap-7">
            <img src={footerLogo} alt="" className="w-min-[212px]" />
            <p className="xl:block hidden text-[16px]">
              {t("footer.aboutHarvest")}
            </p>
            <div className="flex gap-2">
              <img src={instagramIcon} alt="" />
              <img src={twitterIcon} alt="" />
              <img src={facebookIcon} alt="" />
            </div>
          </div>
          {/* Second Coulnm */}
          <div className="flex flex-col xl:max-w-[415px]">
            <div className="flex xl:flex-row flex-col xl:justify-between xl:gap-0 gap-[74px]">
              <div>
                <p className="font-semibold text-lg mb-6">{t("footer.usefulLink.header")}</p>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a href="#">{t("footer.usefulLink.home")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footer.usefulLink.valuedClients")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footer.usefulLink.insightHub")}</a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-lg mb-6">{t("footer.ourCompany.header")}</p>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a href="#">{t("footer.ourCompany.about")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footer.ourCompany.ourExpertise")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footer.ourCompany.contact")}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-auto xl:block hidden">
              <div className="flex border rounded-md shadow-sm w-full max-w-md overflow-hidden bg-white p-2">
                <span className="flex items-center px-3 text-gray-600">@</span>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 px-4 py-2 outline-none border-0 text-sm text-gray-700"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white text-sm font-medium hover:bg-green-700"
                >
                  {t('footer.subscribe')}
                </button>
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div className="max-w-[400px] mb-6">
            <p className="font-semibold text-lg mb-6">{t("footer.contactUs.header")}</p>
            <div>
              <p>{t("contact.address.indonesia.1")}</p>
              <p>{t("contact.address.indonesia.2")}</p>
              <p>{t("contact.address.indonesia.3")}</p>
            </div>

            <div className="flex flex-col gap-3 mt-10">
              <div className="flex gap-2">
                <img src={phoneIcon} alt="" />
                <div>(+6221) 2987910</div>
              </div>
              <div className="flex gap-2 items-start">
                <img src={whatsAppIcon} alt="" />
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <p>{t("footer.contactUs.waFood")} +62 812-8045-4168</p>
                  </div>
                  <div className="flex gap-2 xl:-mr-14">
                    <p>{t("footer.contactUs.waCosmetic")} +62 812-9865-9168</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <img src={envelopIcon} alt="" />
                <div>E-mail info@greenlifeharvest.com</div>
              </div>
            </div>
            <div className="mt-6 xl:hidden block">
              <div className="flex border rounded-md shadow-sm w-full md:max-w-md lg:max-w-lg overflow-hidden bg-white">
                <div className="flex-grow flex items-center p-2">
                  <span className="flex items-center px-3 text-gray-600 text-[30px]">
                    @
                  </span>
                  <div className="flex-grow relative">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="px-4 py-2 outline-none border-0 text-sm text-gray-700 w-full pr-24"
                    />
                    <button
                      type="submit"
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-1 py-[10px] px-[15px] bg-green-600 rounded text-white text-sm font-medium hover:bg-green-700"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
