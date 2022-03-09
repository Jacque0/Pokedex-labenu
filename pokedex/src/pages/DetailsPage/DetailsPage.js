import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/BASE_URL"
import useRequestData from "../../hooks/useRequestData"
import {
  ImgContainer,
  PageContainer,
  StatsContainer,
  TypeMovesContainer,
} from "./StyledDetailsPage"

const DetailsPage = () => {
  const params = useParams()
  const [details, error, loading] = useRequestData(`${BASE_URL}${params.name}`)

  const imgs = details?.sprites.other.home
  const stats = details?.stats
  const types = details?.types
  const moves = details?.moves

  const renderType = types?.map((type) => {
    return <p key={type.type.name}>Tipo {type.slot}: {type.type.name}</p>
  })

  const renderMoves = moves?.map((move, i) => {
    return (i < 6 ? <p key={move.move.name}>{move.move.name}</p> : <></> )
  })

  const renderPage = details ? (
    <PageContainer>
      <ImgContainer>
        <img src={imgs.front_default} alt={`${params.id}`} />
        <img src={imgs.front_shiny} alt="pokemon" />
      </ImgContainer>
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
            {renderType}
        </div>
        <div className="moves">
          <h3>Principais Habilidades:</h3>
          {renderMoves}
        </div>
      </TypeMovesContainer>
    </PageContainer>
  ) : (
    "loading..."
  )

  return <>{renderPage}</>
}

export default DetailsPage
