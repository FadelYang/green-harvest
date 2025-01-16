import Button from "../atoms/Button";
import lastBannerImage from "/img/last-banner-image.png";

const LastBannerSection = () => {
  return (
    <>
      <div className="flex justify-center px-24 py-36 overflow-hidden">
        <div className="bg-primary p-10 flex">
          <div className="flex flex-col gap-8 z-10 min-w-[600px]">
            <p className="text-white  font-medium text-[32px]">
              Create Tailored Products for Your Brand
            </p>
            <p className="text-white font-normal leading-[26px]">
              Collaborate with us to develop premium products that engage your
              customers. We guarantee quality, safety, and compliance at every
              stage.
            </p>
            <div>
              <Button className="bg-yellow-400">Consult With us</Button>
            </div>
          </div>
          <div className="flex items-end -m-10">
            <img src={lastBannerImage} alt="" className="z-10 w-[1160px]" />
          </div>
          <div className='absolute right-16 -mt-9'>
            <svg
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
          </div>
        </div>
      </div>
    </>
  );
};

export default LastBannerSection;
