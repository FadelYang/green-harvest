import { TranslationProps } from "../../types/types";
import Button from "../atoms/Button";
import lastBannerImage from "/img/last-banner-image.png";

const LastBannerSection = (props: TranslationProps) => {
  const { t } = props;

  return (
    <>
      <div className="flex justify-center xl:px-24 px-6 xl:py-36 py-[72px] overflow-hidden max-w-[1444px] mx-auto">
        <div className="bg-primary xl:p-10 px-5 py-10 flex xl:flex-row flex-col overflow-hidden">
          <div className="flex flex-col gap-8 z-10 xl:min-w-[600px]">
            <div className="xl:hidden flex justify-center">
              <img
                src={lastBannerImage}
                alt=""
                className="z-10 xl:w-[1160px]"
                loading='lazy'
              />
            </div>
            <div className="flex flex-col xl:gap-8 gap-4">
              <p className="text-white font-medium xl:text-[32px] text-2xl leading-[34px]">
                {t("home.lastBanner.header")}
              </p>
              <p className="text-white font-normal leading-[26px] text-base">
                {t("home.lastBanner.subHeader")}
              </p>
              <div>
                <a href="https://tanya.web.id/harvest-maklon-discussion" target='_blank'>
                  <Button className="bg-yellow-400 xl:w-auto w-full">
                    {t("home.lastBanner.consultWithUsButton")}
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="xl:flex xl:items-end hidden -m-10">
            <img src={lastBannerImage} alt="" className="z-10 w-[1160px]" />
          </div>
          <div className="relative">
            <svg
              className="absolute hidden xl:block xl:-right-44 xl:-mt-9"
              xmlns="http://www.w3.org/2000/svg"
              width="509"
              height="295"
              viewBox="0 0 509 295"
              fill="none"
            >
              <g filter="url(#filter0_i_1611_1175)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M197.366 -94.8705C291.119 -117.699 400.953 -160.491 475.777 -99.5363C552.187 -37.2898 543.531 80.9439 533.586 179.028C524.774 265.943 502.118 366.286 424.493 406.28C352.57 443.335 274.867 375.463 197.366 352.254C153.366 339.077 108.924 332.429 74.8799 301.582C38.808 268.899 13.9069 227.102 6.18133 179.028C-3.21532 120.555 -5.94789 58.0665 27.9438 9.51204C67.4211 -47.0446 130.375 -78.558 197.366 -94.8705Z"
                  fill="url(#paint0_linear_1611_1175)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_i_1611_1175"
                  x="0"
                  y="-130.87"
                  width="548"
                  height="548"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="8" />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.117647 0 0 0 0 0.117647 0 0 0 0 0.117647 0 0 0 0.05 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_1611_1175"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1611_1175"
                  x1="-49.2323"
                  y1="387.153"
                  x2="274.343"
                  y2="122.563"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#013917" />
                  <stop offset="1" stop-color="#015F26" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              className="xl:hidden absolute -right-5 -mt-96"
              xmlns="http://www.w3.org/2000/svg"
              width="242"
              height="453"
              viewBox="0 0 242 453"
              fill="none"
            >
              <g filter="url(#filter0_i_1890_1120)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M197.366 -59.5472C291.119 -82.3762 400.953 -125.168 475.777 -64.2131C552.187 -1.96658 543.531 116.267 533.586 214.351C524.774 301.266 502.118 401.609 424.493 441.603C352.57 478.659 274.867 410.786 197.366 387.577C153.366 374.401 108.924 367.752 74.8799 336.905C38.808 304.222 13.9069 262.425 6.18133 214.351C-3.21532 155.879 -5.94789 93.3897 27.9438 44.8353C67.4211 -11.7214 130.375 -43.2348 197.366 -59.5472Z"
                  fill="url(#paint0_linear_1890_1120)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_i_1890_1120"
                  x="0"
                  y="-95.5469"
                  width="548"
                  height="548"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="8" />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.117647 0 0 0 0 0.117647 0 0 0 0 0.117647 0 0 0 0.05 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_1890_1120"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1890_1120"
                  x1="-49.2323"
                  y1="422.476"
                  x2="274.343"
                  y2="157.886"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#013917" />
                  <stop offset="1" stop-color="#015F26" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastBannerSection;
