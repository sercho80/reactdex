import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "flag-icon-css/css/flag-icons.min.css";
import style from'./styles.module.scss'
import { GlobeIcon } from "../../assets/globe";

export const LangSwitch = () => {
  const [t, i18n] = useTranslation("global");
  const languages = [
    {
      code: "en",
      name: "English",
      ctry_code: "gb",
    },
    {
      code: "es",
      name: "Español",
      ctry_code: "es",
    },
  ];
  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={style.langSwitch}>
      <div className="language-select">
        <div className="d-flex justify-content-end align-items-center language-select-root">
          <div className={`dropdown ${style.globe}`}>
            <button
              className="btn btn-link dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <GlobeIcon />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <span className="dropdown-item-text">{t("language")}</span>
              </li>
              {languages.map(({ code, name, ctry_code }) => (
                <li key={ctry_code}>
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      handleChangeLanguage(code);
                    }}
                    disabled={i18n.language === code}
                  >
                    <span
                      className={`flag-icon flag-icon-${ctry_code} mx-2`}
                      style={{
                        opacity: i18n.language === code ? 0.5 : 1,
                      }}
                    ></span>
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
