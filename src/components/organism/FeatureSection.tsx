import HeaderSection from "../atoms/HeaderSection";
import badanPonCertificationLogo from "/img/badan-pom-certification.png";
import cpkbCertificationLogo from "/img/cpkb-certification.png";
import cpotbCertificationLogo from "/img/cpotb-certification.png";
import cppobCertificationLogo from "/img/cppob-certification.png";
import halalCertificationLogo from "/img/halal-certification.png";
import isoqarGmpCertificationLogo from "/img/isoqar-gmp-certification.png";
import isoqarHaccpCertificationLogo from "/img/isoqar-haccp-certification.png";
import isoqarRegisteredCertificationLogo from "/img/isoqar-registered-certification.png";
import tsi22000CertificationLogo from "/img/tsi-22000-certification.png";
import tsi9001CertificationLogo from "/img/tsi-9001-certification.png";
import featureExperience1 from "/img/feature-experience-1.png";
import featureExperience2 from "/img/feature-experience-2.png";
import featureExperience3 from "/img/feature-experience-3.png";
import Button from "../atoms/Button";
import { Trans } from "react-i18next";
import { TranslationProps } from '../../types/types';

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
      <div className="py-36 flex flex-col gap-[50px] max-w-[1444px] mx-auto">
        <div className="px-24">
          <div className="flex flex-col gap-10">
            <HeaderSection
              title={t("home.feature.header")}
              subTitle={t("home.feature.subHeader")}
            />
            {/* Legal completeness */}
            <div className="flex gap-[72px]">
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
              <div className="grid grid-cols-5 min-w-[675px] gap-5">
                {certificationLogos.map((certificationLogo, index) => (
                  <img src={certificationLogo} alt="" key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Experience */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-[50px]">
            <div className="flex gap-[72px]">
              {/* first section */}
              <div>
                <img src={featureExperience1} alt="" />
                <div className="ps-48 -mt-64">
                  <img src={featureExperience2} alt="" />
                </div>
                <div className="h-[53px] w-[181px] bg-yellow-500 mx-24 -mt-20 z-10 opacity-80"></div>
              </div>
              <div className="flex flex-col justify-center gap-4 pr-24">
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
            <div className="">
              <div className="flex justify-between gap-[72px]">
                <div className="flex flex-col justify-center items gap-4 ps-[100px]">
                  <p className="text-black text-[32px] font-medium max-w-[609px]">
                    {t("home.feature.lowMoq.title")}
                  </p>
                  <div className="max-w-[773px]">
                    <p className="text-slate-500 text-base font-normal">
                      {t("home.feature.lowMoq.description")}
                    </p>
                  </div>
                </div>
                <div className="">
                  <img src={featureExperience3} alt="" className="pr-12" />
                </div>
              </div>
              <div className="relative">
                <div className="absolute right-0 -mt-64 w-[100px] h-[408px] bg-yellow-500 opacity-80"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button variant="primary-button">
              {t("home.feature.consultNowButton")}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
