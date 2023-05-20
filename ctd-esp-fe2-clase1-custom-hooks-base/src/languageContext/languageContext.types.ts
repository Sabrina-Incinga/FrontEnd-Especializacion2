import Language from "features/language/language.types";

export interface languageTypes{
    language: Language; 
    translate: (key: string) => string; 
    setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}