import { PropsWithChildren } from "react";
import { useTranslation } from 'react-i18next';
import NavigationBar from '../organism/NavigationBar';

const MainTemplate = (props: PropsWithChildren) => {
  const { children } = props;
  const { t } = useTranslation();


  return (
    <div className="max-h-[1440px]">
      <NavigationBar t={t} />

      {children}
    </div>
  );
};

export default MainTemplate;
