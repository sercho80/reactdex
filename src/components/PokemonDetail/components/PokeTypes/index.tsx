import { IPokemon } from "../../../../interfaces/interfaces";
import { background } from "../../../../utils/BackgroundsByTypes";

import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

interface Props {
  pokemon: IPokemon | null;
}

export const PokeTypes = ({ pokemon }: Props) => {
  const [t] = useTranslation("global");
  return (
    <div className={styles.types}>
      {/* @ts-ignore */}
      {pokemon?.types.map(({ type: { name } }) => (
        <div
          key={name}
          /* @ts-ignore */
          style={{ background: background[name] }}
          className={styles.type}
        >
          {t(`type.${name}`)}
        </div>
      ))}
    </div>
  );
};
