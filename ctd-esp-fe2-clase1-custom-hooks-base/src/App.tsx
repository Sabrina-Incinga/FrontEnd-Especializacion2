import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Navbar } from 'features/navigation';
import {FC, useState} from 'react';
import Page3 from 'pages/Page3';
import Page2 from 'pages/Page2';
import { store } from 'store/store';
import Page1 from 'pages/Page1';
import { LanguageComponent } from 'features/language';
import { TrackingProvider } from 'features/tracking/tracking.context';
import Language from "features/language/language.types";
import esTranslations from "data/i18n.es";
import enTranslations from "data/i18n.en";
import ptTranslations from "data/i18n.pt";
import { LangContextProvider } from 'languageContext/language.context';

const App: FC = () => {


  return (
      <Provider store={store}>
        <TrackingProvider>
          <LangContextProvider>
            <LanguageComponent />
            <Navbar/>
            <Routes>
              <Route path="/" element={<Page3 />} />
              <Route path="/location/:id" element={<Page2 />} />
              <Route path="/following" element={<Page1 />} />
            </Routes>
          </LangContextProvider>
        </TrackingProvider>
      </Provider>
  );
}

export default App;
