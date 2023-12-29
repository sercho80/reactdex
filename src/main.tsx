import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, PokeDetail } from "./pages";
import "./index.scss";
import PokemonProvider from "./context/PokemonContext";
import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { LangSwitch } from "./components/LanguageSwitch";

i18next.init({
  interpolation: { escapeValue: false },
  supportedLngs : ["en", "es"],
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:pokeID",
    element: <PokeDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18next}>
    <LangSwitch />
    <PokemonProvider>
      <RouterProvider router={router} />
    </PokemonProvider>
  </I18nextProvider>
);
