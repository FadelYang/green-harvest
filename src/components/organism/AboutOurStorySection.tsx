import aboutOurStoryImage1 from "/img/about-our-story-image-1.png";
import aboutOurStoryImage2 from "/img/about-our-story-image-2.png";
import aboutOurStoryImage3 from "/img/about-our-story-image-3.png";
import aboutOurStoryImage4 from "/img/about-our-story-image-4.png";
import aboutOurStoryImage5 from "/img/about-our-story-image-5.png";
import aboutOurStoryImage6 from "/img/about-our-story-image-6.png";
import aboutOurStoryImage7 from "/img/about-our-story-image-7.png";

const AboutOurStorySection = () => {
  return (
    <>
      <div className="flex gap-[72px] pb-36 px-24 max-w-[1444px] mx-auto">
        <div className="flex flex-col gap-6">
          <h1 className="text-slate-800 text-2xl font-medium">Our Story</h1>
          <img src={aboutOurStoryImage1} alt="" />
        </div>
        <div className="max-w-[614px] flex flex-col gap-5">
          <article className="flex flex-col gap-4">
            <h1 className="text-slate-800 text-[32px] font-medium leading-[42px]">
              Two decades of creating quality products for hundreds of brand
            </h1>
            <p className="first-letter:leading-[50px] first-letter:text-slate-800 first-letter:text-[66px] first-letter:font-semibold first-letter:mr-2 first-letter:float-left text-slate-500 text-base leading-[26px]">
              Established in 2004, Harvest Group stands as a premier MAKLON
              manufacturer in Indonesia and Malaysia, specializing in a diverse
              array of health food products, nutritional supplements, and our
              latest offering in cosmetics and skincare production.
            </p>
            <p className="text-slate-500 text-base leading-[26px]">
              At PT IndoGreenlife Harvest, we are more than just a contract
              manufacturer. Our commitment begins with sourcing high-quality raw
              materials and utilizing advanced technology to deliver effective
              and safe products tailored to meet the needs of our clients. With
              eight manufacturing facilities strategically located in Indonesia
              and Malaysia, we adhere to rigorous quality standards, including
              GMP, HACCP, and Halal certifications, supported by a comprehensive
              quality management system that aligns with international ISO
              standards.
            </p>
            <p className="text-slate-500 text-base leading-[26px]">
              Since commencing operations in Indonesia in 2018, we have rapidly
              expanded, gaining the trust of numerous entrepreneurs who have
              partnered with Harvest Group and Indo Greenlife Harvest. To date,
              we have produced over 6,000 MAKLON brand products, exporting to
              more than 50 countries worldwide.
            </p>
          </article>
          <div className="flex gap-4">
            <img
              src={aboutOurStoryImage2}
              alt=""
              className="max-w-full xl:max-w-[430px] 2xl:max-w-[472px]"
            />
            <img
              src={aboutOurStoryImage3}
              alt=""
              className="max-w-full xl:max-w-[260px] 2xl:max-w-[300px]"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4  px-24 max-w-[1444px] mx-auto pb-36">
        <div>
          <img src={aboutOurStoryImage4} alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <img src={aboutOurStoryImage5} alt="" />
          <div className="max-w-[614px] flex flex-col gap-5">
            <article className="flex flex-col gap-4">
              <h1 className="text-slate-800 text-[32px] font-medium leading-[42px]">
                Your One-Stop Solution for Health Products
              </h1>
              <p className="first-letter:leading-[50px] first-letter:text-slate-800 first-letter:text-[66px] first-letter:font-semibold first-letter:mr-2 first-letter:float-left text-slate-500 text-base leading-[26px]">
                Partner with us to develop your health product brand seamlessly.
                Our One-Stop Solution encompasses all aspects of product
                development, including research and development of new
                formulations, product consultation, marketing support, Maklon
                services, packaging design, product registration, export
                documentation, laboratory testing, and detailed product
                explanations by our in-house consultants.
              </p>
              <p className="text-slate-500 text-base leading-[26px]">
                Our state-of-the-art manufacturing facilities operate 24/7, with
                a monthly output exceeding 2 million boxes to satisfy global
                demand. In recent years, we have optimized our manufacturing
                processes by enhancing automation, resulting in improved
                productivity and efficiency.
              </p>
              <p className="text-slate-500 text-base leading-[26px]">
                We stay ahead of market trends, offering a comprehensive range
                of over 20 types of health products that address various
                consumer needs, including immune health boosters, digestive
                health solutions, anti-aging supplements, athletic supplements,
                and dietary supplements such as meal replacement beverages and
                peptides. Our products are available in six formats: powders,
                tea bags, capsules, tablets, candies, and liquids.
              </p>
              <p className="text-slate-500 text-base leading-[26px]">
                In early 2023, we will introduce Maklon services specifically
                for cosmetic and skincare products to fulfill your beauty
                product requirements.
              </p>
              <h1 className="text-slate-800 text-[32px] font-medium leading-[42px]">
                Partner with Harvest Group
              </h1>{" "}
              <p className="text-slate-500 text-base leading-[26px]">
                Create your health product brand with us and embark on a journey
                of growth and success together. Trust Harvest Group as your
                reliable partner for health and beauty products.
              </p>
            </article>
            <div className="flex gap-4">
              <img
                src={aboutOurStoryImage6}
                alt=""
                className="max-w-full xl:max-w-[442px] 2xl:max-w-[472px]"
              />
              <img
                src={aboutOurStoryImage7}
                alt=""
                className="max-w-full xl:max-w-[272px] 2xl:max-w-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOurStorySection;
