import enTranslations from "data/i18n.en";
import esTranslations from "data/i18n.es";
import ptTranslations from "data/i18n.pt";
import Language from "features/language/language.types";
import { FC, createContext, useState } from "react";
import { languageTypes } from "./languageContext.types";
import React from "react";

const defaultValue : languageTypes = {
    language: 'ENGLISH',
    translate: () => '',
    setLanguage: () => ''
}
export const LanguageContext = createContext<languageTypes>(defaultValue);

export const LangContextProvider : FC = ({children}) => {
    const [language, setLanguage] = useState<Language>('ENGLISH');

    const translate = (key: string) => {
        switch(language){
            case 'SPANISH':
                return esTranslations[key];
            case 'ENGLISH':
                return enTranslations[key];
            case 'PORTUGUESE':
                return ptTranslations[key];
        }

        return key;
    }

    return(
        <LanguageContext.Provider value={{language, translate, setLanguage}}>{children}</LanguageContext.Provider>
    )
}

