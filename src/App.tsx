import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App(): JSX.Element {
  const { t, i18n } = useTranslation();

  function handleChangeLanguage(event: any) {
    const newLang = event.target.value;
    Cookies.set('lang', newLang);
    i18n.changeLanguage(newLang);
  }

  return (
    <Suspense fallback="loading">
      <div className='h-screen flex flex-col gap-3 items-center justify-center'>
        <select onChange={handleChangeLanguage}>
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
        </select>
        <p>{t('title')}</p>
      </div>
    </Suspense>
  );
}