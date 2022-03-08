import React from "react";
import { ContainerCardsHomePage } from "./styledHomePage";


const HomePage = () => {

    return (
        <>
            Eu sou a HomePage

            <ContainerCardsHomePage>
                {/*Variável contendo os resultados do map, já englobadas pelo card do Léo.
                Possivelmente sofrerá atualizações para melhorar a responsividade*/}
            </ContainerCardsHomePage>
        </>
    )
}

export default HomePage;