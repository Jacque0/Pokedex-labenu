import React from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/BASE_URL"
import useRequestData from "../../hooks/useRequestData"
import {
  PokeContainer,
  PageContainer,
  StatsContainer,
  TypeMovesContainer,
  DetailsContainer,
} from "./StyledDetailsPage"
import usePokemonType from "../../hooks/usePokemonType"
import { typeDetails } from "../../constants/typeDetails"

const DetailsPage = () => {
  const params = useParams()
  const [details, error, loading] = useRequestData(`${BASE_URL}${params.name}`)

  const imgs = details?.sprites.other.home
  const stats = details?.stats
  const types = details?.types
  const moves = details?.moves

  const renderMoves = moves?.map((move, i) => {
    return (i < 6 ? <p key={i}>{move.move.name}</p> : <></> )
  })

  const type1 = usePokemonType(types ? types[0].type.name : '')
  let type2
  if (types && types.length > 1) type2 = typeDetails.filter((type) => {
    return types[1].type.name === type.type
  }).map((type) => {
    return type
  })

  const renderPage = details ? (
    <PageContainer>
      <PokeContainer bgColor={type1.color}>
        <img src={imgs.front_default} alt={`${params.id}`} />
        <DetailsContainer>
          <StatsContainer>
          <p>Stats</p>
          <p>HP: {stats[0].base_stat}</p>
          <p>Attack: {stats[1].base_stat}</p>
          <p>Defense: {stats[2].base_stat}</p>
          <p>Special-Attack: {stats[3].base_stat}</p>
          <p>Special-Defense: {stats[4].base_stat}</p>
          <p>Speed: {stats[5].base_stat}</p>
        </StatsContainer>
        <TypeMovesContainer>
          <div className="types">
              <p>Tipo 1: {type1.text}</p>
              {(type2 ? <p>Tipo 2: {type2[0].text}</p> : <></>)}
          </div>
          <div className="moves">
            <h3>Principais Habilidades:</h3>
            {renderMoves}
          </div>
        </TypeMovesContainer>
        </DetailsContainer>
      </PokeContainer>
      
    </PageContainer>
  ) : (
    "loading..."
  )

  return <>{renderPage}</>
}

export default DetailsPage
