import { FC, useContext } from 'react';
import Language from "features/language/language.types";
import { LanguageContext } from 'languageContext/language.context';

type LanguageComponentProps = {
    language: Language
    setLanguage: (language: Language) => void
    t: (key: string) => string;
}

const LanguageComponent: FC = () => {
  const {language, translate, setLanguage} = useContext(LanguageContext);

  return (
    <div className={'language'}>
      <button
        type='button'
        onClick={() => setLanguage('SPANISH')}
        className={language === 'SPANISH' ? 'language-button active' : 'language-button'}>
          {translate('language.spanish')}
      </button>
      <button
        type='button'
        onClick={() => setLanguage('ENGLISH')}
        className={language === 'ENGLISH' ? 'language-button active' : 'language-button'}>
        {translate('language.english')}
      </button>
      <button
        type='button'
        onClick={() => setLanguage('PORTUGUESE')}
        className={language === 'PORTUGUESE' ? 'language-button active' : 'language-button'}>
        {translate('language.portuguese')}
      </button>
    </div>
  );
};
export default LanguageComponent;
