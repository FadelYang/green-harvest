import Button from "../atoms/Button";
import MainTemplate from "../templates/MainTemplate";
import arrowRight from "/img/arrowRight.svg";

const Home = () => {
  return (
    <MainTemplate>
      <main className="px-24">
        {/* Hero */}
        <section className="pt-[72px] pb-[54px]">
          <div className=' flex justify-between'>
            <div className="flex flex-col gap-8 max-w-[731px]">
              <h1 className="text-[44px] font-[500] text-slate-800">
                Your Trusted Partner in High Quality Maklon Serives
              </h1>
              <h2 className="text-base font-normal text-slate-500">
                Specializing in the production of high-quality, private-label
                goods, we offer tailored manufacturing solutions to meet your
                business needs.
              </h2>
              <div>
                <Button variant="primary-button">Consult Now!</Button>
              </div>
            </div>
            <div className='flex flex-col'>
              <Button paddingSize='px-2 py-4' className="flex gap-3 primary-text font-medium text-base border-b border-[#015F26]">
                Explore Our Expertise <img src={arrowRight} alt="" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </MainTemplate>
  );
};

export default Home;
