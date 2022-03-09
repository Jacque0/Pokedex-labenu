import React, { useContext } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { ContainerCardsHomePage } from "./styledHomePage";


const HomePage = () => {

    return (
        <>
            Eu sou a HomePage

            <ContainerCardsHomePage>
                {/*  Dados estáticos a serem substituídos */}
                <PokeCard />
                <PokeCard />
                <PokeCard />
                <PokeCard />
                <PokeCard />
                <PokeCard />
                <PokeCard />
                <PokeCard />
                <PokeCard />
                <PokeCard />
                <PokeCard />
                <PokeCard />

            </ContainerCardsHomePage>
        </>
    )
}

export default HomePage;