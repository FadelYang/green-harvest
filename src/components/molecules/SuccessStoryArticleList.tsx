import { useTranslationContext } from '../../context/TranslationContext';
import SuccessStoryArticleCard from "../atoms/SuccessStoryArticleCard";
import successStoryImage1 from "/img/success-story-1.png";
import successStoryImage2 from "/img/success-story-2.png";

const SuccessStoryArticleList = () => {
  const { t } = useTranslationContext()

  const successStoryArticles = [
    {
      id: 1,
      image: successStoryImage1,
      title: t('home.successStory.article.1.title'),
      description: t('home.successStory.article.1.description'),
      articleLink: "#",
    },
    {
      id: 2,
      image: successStoryImage2,
      title: t('home.successStory.article.2.title'),
      description: t('home.successStory.article.2.description'),
      articleLink: "#",
    },
  ];

  return (
    <div className="flex overflow-x-auto max-w-full no-scrollbar gap-6">
      {successStoryArticles.map((item) => (
        <SuccessStoryArticleCard
          key={item.id} // Use unique keys for React components
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default SuccessStoryArticleList;
