import { useContext } from "react";
import { PokeballIconSmall } from "../../assets/pokeball";
import { PokemonList } from "../../components/PokemonList";
import styles from "./styles.module.scss";
import { PokemonContext } from "../../context/PokemonContext";
import { Pagination } from "../../components/Pagination";
import { usePagination } from "../../hooks/usePagination";
import { Filters } from "../../components/Filters";
export const Home = () => {
  const { pokemonsFiltered } = useContext(PokemonContext);
  const { page, nextPage, previousPage, backToHome } = usePagination();

  let perPage = 28;
  return (
    <div className={styles.home}>
      <header onClick={backToHome}>
        <div>
          <PokeballIconSmall />
          <span>Pok&eacute;dex</span>
        </div>
      </header>
      <Filters />
      <PokemonList
        pokemonsUrls={pokemonsFiltered}
        page={page}
        perPage={perPage}
      />
      <Pagination
        page={page}
        nextPage={nextPage}
        previousPage={previousPage}
        maxItems={pokemonsFiltered?.length!}
        perPage={perPage}
      />
    </div>
  );
};
