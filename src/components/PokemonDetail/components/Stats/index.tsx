import { useTranslation } from "react-i18next";
import { HeightIcon, WeightIcon } from "../../../../assets/stats";
import { IPokemon } from "../../../../interfaces/interfaces";

import styles from "./styles.module.scss";

interface Props {
  pokemon: IPokemon | null;
}

export const Stats = ({ pokemon }: Props) => {
  const [t] = useTranslation("global");
  return (
    <div className={styles.stats}>
      <div className={styles.item}>
        <WeightIcon />
        <span>{pokemon?.weight} </span>
        <p>{t("pokemon.weight")}</p>
      </div>
      <div className={styles.item}>
        <HeightIcon />
        <span>{pokemon?.height} </span>
        <p>{t("pokemon.height")}</p>
      </div>
    </div>
  );
};
