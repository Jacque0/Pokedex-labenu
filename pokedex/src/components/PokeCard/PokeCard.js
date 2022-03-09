import { useContext } from "react";
import { Button } from "@mui/material";
import { getThemeProps } from "@mui/system";
import { CardContainer, CardFooter } from "./styledPokeCard";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/BASE_URL";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { Link } from "react-router-dom";

export default function PokeCard(props) {
  const { setters } = useContext(GlobalStateContext);

  const isOnPokedex = () => {
    // checks if pokemon is already on pokedex and returns a boolean
    return false;
  };

  //Início do código adicionado por Diego
  const [pokemonData, error, loading] = useRequestData(
    `${BASE_URL}${props.pokemonName}`
  );
  const pokemonType = pokemonData && pokemonData.types[0].type.name;
  const pokemonPhoto =
    pokemonData && pokemonData.sprites.other.home.front_default;
  //Fim do código adicionado por Diego

  return (
    <CardContainer bgColor={props.bgColor ? props.bgColor : "white"}>
      <p>Nome: {props.pokemonName}</p>
      <img src={pokemonPhoto} alt="pokemon" />
      <p>Tipo: {pokemonType}</p>
      <CardFooter>
        <Button
          color="primary"
          variant="contained"
          disabled={isOnPokedex()}
          size="medium"
        >
          add
        </Button>
        <Link to={`/detalhes/${props.pokemonName}`}>
          <Button
            variant="outlined"
            color="primary"
            size="medium"
            onClick={() => setters.setPage("detalhes")}
          >
            detalhes
          </Button>
        </Link>
      </CardFooter>
    </CardContainer>
  );
}
