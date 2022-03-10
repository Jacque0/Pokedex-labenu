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
  TypesContainer,
  MovesContainer,
  Type,
} from "./StyledDetailsPage"
import usePokemonType from "../../hooks/usePokemonType"
import { typeDetails } from "../../constants/typeDetails"
import { type } from "@testing-library/user-event/dist/type"

const DetailsPage = () => {
  const params = useParams()
  const [details, error, loading] = useRequestData(`${BASE_URL}${params.name}`)

  const imgs = details?.sprites.other.home
  const stats = details?.stats
  const types = details?.types
  const moves = details?.moves

  const renderMoves = moves?.map((move, i) => {
    return i < 6 ? <p key={i}>{move.move.name}</p> : <></>
  })

  const type1 = usePokemonType(types ? types[0].type.name : "")
  let type2
  if (types && types.length > 1)
    type2 = typeDetails
      .filter((type) => {
        return types[1].type.name === type.type
      })
      .map((type) => {
        return type
      })

  const renderPage = details ? (
    <PageContainer>
      <PokeContainer bgColor1={type1.color} bgColor2={type2 ? type2[0].color : 'white'}>
        <TypesContainer>
          <Type className="type2" typeColor={type1.color}>{type1.text}</Type>
          {type2 ? <Type className="type2" typeColor={type2[0].color}>{type2[0].text}</Type> : <></>}
        </TypesContainer>
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
            <MovesContainer>
              <h3>Principais Habilidades:</h3>
              {renderMoves}
            </MovesContainer>
        </DetailsContainer>
      </PokeContainer>
    </PageContainer>
  ) : (
    "loading..."
  )

  return <>{renderPage}</>
}

export default DetailsPage
