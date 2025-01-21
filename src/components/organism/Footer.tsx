import footerLogo from "/img/footer-logo.png";
import instagramIcon from "/img/instagramIcon.svg";
import twitterIcon from "/img/twitterIcon.svg";
import facebookIcon from "/img/facebookIcon.svg";
import phoneIcon from "/img/phoneIcon.svg";
import whatsAppIcon from "/img/whatsappIcon.svg";
import envelopIcon from "/img/envelopIcon.svg";
import { useTranslationContext } from "../../context/TranslationContext";

const Footer = () => {
  const { t } = useTranslationContext();

  return (
    <div className="bg-black py-[72px]  -mb-6">
      <div className=" text-white px-24 mx-auto max-w-[1444px]">
        <div className="flex gap-24">
          {/* First column */}
          <div className="max-w-[212px] flex flex-col justify-between h-full gap-7">
            <img src={footerLogo} alt="" className="w-min-[212px]" />
            <p className="text-[16px]">{t("footer.aboutHarvest")}</p>
            <div className="flex gap-2">
              <img src={instagramIcon} alt="" />
              <img src={twitterIcon} alt="" />
              <img src={facebookIcon} alt="" />
            </div>
          </div>
          {/* Second Coulnm */}
          <div className="flex flex-col max-w-[415px]">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold text-lg mb-6">Useful Link</p>
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
                <p className="font-semibold text-lg mb-6">Our Company</p>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a href="#">{t("footer.ourCompany.about")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footer.ourCompany.about")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footer.ourCompany.contact")}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-auto">
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
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div className="max-w[400px]">
            <p className="font-semibold text-lg mb-6">Contact Us</p>
            <p>
              Era Prima Warehouse and Industrial Complex Jl. Daan Mogot KM 21
              No. 1 Block Q1 Kel, RT.001/RW.001, Poris Plawad, Cipondoh,
              Tangerang City, Banten 15141
            </p>

            <div className="flex flex-col gap-3 mt-10">
              <div className="flex gap-2">
                <img src={phoneIcon} alt="" />
                <div>(+6221) 2987910</div>
              </div>
              <div className="flex gap-2 items-start">
                <img src={whatsAppIcon} alt="" />
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3">
                    <div>WA Food Supplement:</div>
                    <div>+62 812-8045-4168</div>
                  </div>
                  <div className="flex gap-3">
                    <div>WA Food Supplement:</div>
                    <div>+62 812-9865-9168</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <img src={envelopIcon} alt="" />
                <div>Email info@greenlifeharvest.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
