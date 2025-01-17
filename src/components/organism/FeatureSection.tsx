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

const FeatureSection = () => {
  return (
    <>
      <div className="py-36 flex flex-col gap-[50px] max-w-[1444px] mx-auto">
        <div className="px-24">
          <div className="flex flex-col gap-10">
            <HeaderSection
              title="WHY CHOOSE US?"
              subTitle="Why Partner With Green Life Harvest?"
            />
            {/* Legal completeness */}
            <div className="flex gap-[72px]">
              <div className="flex flex-col gap-4 justify-center">
                <p className="text-black text-[32px] font-medium leading-[42px]">
                  Legal Completness
                </p>
                <p className="text-slate-500 font-normal self-stretch">
                  Green Life Harvest has given notable certifications to ensure
                  our quality match with your vision. Our Certification include{" "}
                  <span className="text-black">
                    BPOM, Halal, ISO 22000, ISO 22716, ISO 9001, HAACP, CPOTB,
                    CPKB, CPPOB,{" "}
                  </span>
                  and <span className="text-black">GMP Certification</span>
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
              <div className="flex flex-col justify-center gap-4">
                <p className="text-black text-[32px] font-medium">
                  20 Years of Experience
                </p>
                <div className="max-w-[773px]">
                  <p className="text-slate-500 text-base font-normal">
                    Our{" "}
                    <span className="text-black">20 years of experience</span>{" "}
                    brings us as one of the most reliable Maklon services with{" "}
                    <span className="text-black">
                      1000+ entrepreneurs and brands
                    </span>{" "}
                    trusted us to bring their vision come to life.
                  </p>
                </div>
              </div>
            </div>
            {/* second section */}
            <div className="">
              <div className="flex justify-between gap-[72px]">
                <div className="flex flex-col justify-center items gap-4 ps-[100px]">
                  <p className="text-black text-[32px] font-medium max-w-[609px]">
                    High Quality with Low MOQ Requirements
                  </p>
                  <div className="max-w-[773px]">
                    <p className="text-slate-500 text-base font-normal">
                      We prioritize quality above all else when creating your
                      product. Our state-of-the-art facilities ensure that only
                      high-quality materials are used. Plus, we can accommodate
                      a low MOQ for your product.
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
            <Button variant="primary-button">Consult Now!</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
