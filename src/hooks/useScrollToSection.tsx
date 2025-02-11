import { useNavigate } from "react-router-dom";

const useScrollToSection = () => {
  const navigate = useNavigate();

  const scrollToSection = async (sectionId: string, url: string) => {
    await navigate(url);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  return { scrollToSection };
};

export default useScrollToSection;
