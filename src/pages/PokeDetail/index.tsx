import { useParams } from "react-router-dom";
import { usePokemon } from "../../hooks/usePokemon";
import { PokemonDetail } from "../../components/PokemonDetail";

export const PokeDetail = () => {
  const { pokeID } = useParams();
  const { pokemon } = usePokemon("", pokeID);

  return <PokemonDetail pokemon={pokemon!} />;
};
