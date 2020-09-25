import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import Detector from "i18next-browser-languagedetector";

var i18nOptions = {
  debug: true,
  load: "languageOnly",
  // load: "currentOnly",
  lng: navigator.language || navigator.userLanguage,
  fallbackLng: "en",
  ns: ["translation", "common"],
  defaultNS: "translation",
  transSupportBasicHtmlNodes: true, // convert simple HTML tags to react components
  backend: {
    // Paths are relative to /public
    loadPath: "locales/{{lng}}/{{ns}}.json",
    // addPath: 'locales/add/{{lng}}/{{ns}}',
    crossDomain: false,
  },
};

i18n.use(Backend).use(initReactI18next).use(Detector).init(i18nOptions);

export default i18n;
