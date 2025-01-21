import { useTranslationContext } from "../../context/TranslationContext";
import Button from "./Button";
import arrowRight from "/img/arrowRight.svg";

type successStoryArticleType = {
  image: string;
  title: string;
  description: string;
  articleLink?: string;
};

const SuccessStoryArticleCard = (props: successStoryArticleType) => {
  const { image, title, description, articleLink } = props;
  const { t } = useTranslationContext();

  return (
    <>
      <div className="flex min-w-[800px]">
        <img src={image} alt="" className="max-w-[560px]" />
        <div className="p-6 flex flex-col justify-between bg-green-50">
          <p className="text-slate-500">{title}</p>
          <div className="max-h-[189px] overflow-hidden">
            <p className="text-black text-2xl leading-[34px] line-clamp-5">
              {description}
            </p>{" "}
          </div>
          <div>
            <Button
              paddingSize="px-0 py-4"
              className="flex gap-3 primary-text justify-start font-medium text-base border-b border-[#015F26]"
            >
              {t("home.successStory.readMoreButton")}{" "}
              <img src={arrowRight} alt="" className="-rotate-45" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStoryArticleCard;
