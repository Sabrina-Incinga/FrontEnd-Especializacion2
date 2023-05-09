import Languages from "features/language/language.types";

export interface languageTypes{
    language: Languages; 
    translate: (key: string) => string; 
    setLanguage: React.Dispatch<React.SetStateAction<Languages>>;
}