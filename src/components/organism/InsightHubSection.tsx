import Button from "../atoms/Button";
import ArticleCard from "../molecules/ArticleCard";
import arrowRight from "/img/arrowRight.svg";

const InsightHubSection = () => {
  return (
    <>
      <div className="flex flex-col pt-36 gap-9">
        <div>
          <div className="px-24 flex justify-between items-center max-w-[1444px] mx-auto">
            <h1 className="text-slate-800 text-[40px] font-medium leading-[48px]">
              Insight Hub
            </h1>
            <div>
              <Button
                paddingSize="px-6 py-4"
                className="flex gap-3 primary-text font-medium text-base border-b border-[#015F26]"
              >
                View More Article{" "}
                <img src={arrowRight} alt="" className="-rotate-45" />
              </Button>
            </div>
          </div>
        </div>
        {/* Article section */}
        <div className="flex pl-24 gap-9 overflow-x-auto max-w-full no-scrollbar pb-36">
          <div className="flex gap-9">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default InsightHubSection;
