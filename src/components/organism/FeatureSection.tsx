import HeaderSection from "../atoms/HeaderSection";
import badanPonCertificationLogo from "/img/badan-pom-certification.webp";
import cpkbCertificationLogo from "/img/cpkb-certification.webp";
import cpotbCertificationLogo from "/img/cpotb-certification.webp";
import cppobCertificationLogo from "/img/cppob-certification.webp";
import halalCertificationLogo from "/img/halal-certification.webp";
import isoqarGmpCertificationLogo from "/img/isoqar-gmp-certification.webp";
import isoqarHaccpCertificationLogo from "/img/isoqar-haccp-certification.webp";
import isoqarRegisteredCertificationLogo from "/img/isoqar-registered-certification.webp";
import tsi22000CertificationLogo from "/img/tsi-22000-certification.webp";
import tsi9001CertificationLogo from "/img/tsi-9001-certification.webp";
import featureExperience1 from "/img/feature-experience-1.webp";
import featureExperience2 from "/img/feature-experience-2.webp";
import featureExperience3 from "/img/feature-experience-3.webp";
import Button from "../atoms/Button";
import { Trans } from "react-i18next";
import { TranslationProps } from "../../types/types";

const certificationLogos = [
  badanPonCertificationLogo,
  isoqarHaccpCertificationLogo,
  halalCertificationLogo,
  cpotbCertificationLogo,
  cpkbCertificationLogo,
  cppobCertificationLogo,
  isoqarGmpCertificationLogo,
  tsi22000CertificationLogo,
  isoqarRegisteredCertificationLogo,
  tsi9001CertificationLogo,
];

const FeatureSection = (props: TranslationProps) => {
  const { t } = props;

  return (
    <>
      <div className="py-[72px] xl:py-36 flex flex-col gap-[50px] max-w-[1444px] mx-auto">
        <div className="px-6 xl:px-24">
          <div className="">
            <HeaderSection
              title={t("home.feature.header")}
              subTitle={t("home.feature.subHeader")}
            />
            {/* Legal completeness */}
            <div className="flex xl:flex-row flex-col-reverse gap-10 xl:gap-[72px]">
              <div className="flex flex-col gap-4 justify-center">
                <p className="text-black text-[32px] font-medium leading-[42px]">
                  {t("home.feature.legalCompletness.title")}
                </p>
                <p className="text-slate-500 font-normal self-stretch">
                  <Trans
                    i18nKey={"home.feature.legalCompletness.description"}
                    components={{ black: <span className="text-black" /> }}
                  />
                </p>
              </div>
              <div className="flex xl:justify-center justify-start">
                <div className="grid grid-cols-4 xl:grid-cols-5 xl:min-w-[675px] xl:gap-5 gap-1">
                  {certificationLogos.map((certificationLogo, index) => (
                    <img
                      src={certificationLogo}
                      alt=""
                      key={index}
                      className="sm:w-full w-2/3"
                      loading='lazy'
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Experience */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-[50px]">
            <div className="flex md:flex-row flex-col xl:gap-[72px] gap-16 md:gap-6">
              {/* first section */}
              <div>
                <img
                  src={featureExperience1}
                  alt=""
                  className="xl:block hidden w-[365px] h-[364px] object-cover"
                />
                <img
                  src={featureExperience1}
                  alt=""
                  className="xl:hidden block w-[254px] h-[187px] object-cover"
                />
                <div className="ps-24 xl:ps-48 pr-6 xl:pr-0 xl:-mt-56 -mt-28">
                  <img
                    src={featureExperience2}
                    alt=""
                    className="xl:block hidden w-[313px] h-[314px] object-cover"
                  />
                  <div className="flex justify-end">
                    <img
                      src={featureExperience2}
                      alt=""
                      className="xl:hidden block w-[219px] h-[166px] object-cover"
                    />
                  </div>
                </div>
                <div className="h-[42px] w-[126px] xl:h-[53px] xl:w-[181px] bg-yellow-500 mx-20 -mt-20 xl:-mt-24 z-10 opacity-80"></div>
              </div>
              <div className="flex flex-col justify-center gap-4 xl-pr-24 px-6">
                <p className="text-black text-[32px] font-medium">
                  {t("home.feature.experience.title")}
                </p>
                <div className="max-w-[773px]">
                  <p className="text-slate-500 text-base font-normal">
                    <Trans
                      i18nKey={"home.feature.experience.description"}
                      components={{ black: <span className="text-black" /> }}
                    />
                  </p>
                </div>
              </div>
            </div>
            {/* second section */}
            <div className="sm:pt-10 pt-0">
              <div className="flex md:flex-row flex-col-reverse justify-between gap-6 xl:gap-[72px]">
                <div className="flex flex-col justify-center items gap-4 xl:ps-[100px] px-6">
                  <p className="text-black text-[32px] font-medium max-w-[609px]">
                    {t("home.feature.lowMoq.title")}
                  </p>
                  <div className="max-w-[773px]">
                    <p className="text-slate-500 text-base font-normal">
                      {t("home.feature.lowMoq.description")}
                    </p>
                  </div>
                </div>
                <div className="px-6">
                  <img src={featureExperience3} alt="" className="xl:pr-12 md:w-[609px] md:h-[400px] w-[545px] h-[242px] object-cover" />
                </div>
              </div>
              <div className="relative">
                <div className="absolute right-0 -mt-[400px] sm:-mt-[150px] xl:-mt-64 xl:w-[100px] xl:h-[408px] w-[42px] h-[174px] bg-yellow-500 opacity-80"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center px-6 xl:px-0">
            <a href="https://tanya.web.id/harvest-maklon-discussion" target="_blank">
              <Button variant="primary-button" className="w-full xl:w-auto">
                {t("home.feature.consultNowButton")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
