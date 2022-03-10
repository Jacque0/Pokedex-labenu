import { useContext } from "react"
import { Button } from "@mui/material"
import { CardContainer, CardFooter } from "./styledPokeCard"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/BASE_URL"
import { GlobalStateContext } from "../../Global/GlobalStateContext"
import { Link } from "react-router-dom"
import usePokemonType from "../../hooks/usePokemonType"

export default function PokeCard(props) {
  const { setters } = useContext(GlobalStateContext)

  const capitalizeFirst = (str) => { 
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const isOnPokedex = () => {
    // checa se o pokemon está na pokedex e retorna um boolean
    return false
  }

  //Início do código adicionado por Diego
  const pokemonName = props.pokemonName
  const [pokemonData, error, loading] = useRequestData(`${BASE_URL}${pokemonName}`);
  const pokemonType = pokemonData && pokemonData.types[0].type.name;
  const pokemonPhoto = pokemonData && pokemonData.sprites.other.home.front_default;
  //Fim do código adicionado por Diego

  const type = usePokemonType(pokemonType)

  return (
    <CardContainer bgColor={type.color}>
      <p>{capitalizeFirst(pokemonName)}</p>
      <img src={pokemonPhoto} alt="pokemon" />
      <p>{type.text}</p>
      <CardFooter>
        <Button
          color="primary"
          variant="contained"
          disabled={isOnPokedex()}
          size="medium"
          onClick={() => setters.setPokedex({pokemonName})}
        >
          add
        </Button>
        <Link to={`/detalhes/${pokemonName}`}>
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
  )
}
