import { useTranslation } from "react-i18next";
import { IPokemon } from "../../interfaces/interfaces";
import { background } from "../../utils/BackgroundsByTypes";
import { Loader } from "../Loader";
import { BaseStats } from "./components/BaseStats";
import { Header } from "./components/Header";
import { PokeTypes } from "./components/PokeTypes";
import { Stats } from "./components/Stats";
import { Title } from "./components/Title";

import styles from "./styles.module.scss";

interface Props {
  pokemon: IPokemon | null;
}

export const PokemonDetail = ({ pokemon }: Props) => {
  /* @ts-ignore */
  const backgroundSelected = background[pokemon?.types[0]?.type?.name];
  const [t] = useTranslation("global");

  if (!pokemon) {
    return (
      <div
        style={{ background: backgroundSelected }}
        className={styles.loadingContainer}
      >
        <Loader size={50} color="fff" />
      </div>
    );
  }

  return (
    <div style={{ background: backgroundSelected }} className={styles.bg}>
      <Header pokemon={pokemon} />
      <img
        src={
          pokemon?.sprites?.other?.dream_world?.front_default ||
          pokemon?.sprites?.front_default
        }
        alt={pokemon?.name}
      />
      <div className={styles.info}>
        <PokeTypes pokemon={pokemon} />
        <Title
          content={t("title.about")}
          backgroundSelected={backgroundSelected}
        />
        <Stats pokemon={pokemon} />
        <Title
          content={t("title.stats")}
          backgroundSelected={backgroundSelected}
        />
        <BaseStats pokemon={pokemon} backgroundSelected={backgroundSelected} />
      </div>
    </div>
  );
};
