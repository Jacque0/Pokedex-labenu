import { Button } from "@mui/material";
import { getThemeProps } from "@mui/system";
import { useState } from "react";
import { CardContainer, CardFooter } from "./styledPokeCard";


export default function PokeCard(props) {
    const isOnPokedex = () => {
        // checks if pokemon is already on pokedex and returns a boolean
        return false
    }

    return <CardContainer bgColor={props.bgColor ? props.bgColor : 'white'}>
        <p>Nome: {props.name}</p>
        <img src="http://pm1.narvii.com/6434/7a2cb5fc86df1db37db549422128c66186059808_00.jpg" alt="pokemon" />
        <p>Tipo: {props.type}</p>
        <CardFooter>
            <Button 
                color="secondary" 
                variant="contained" 
                disabled={isOnPokedex()}
                size="medium"
            >
                add
            </Button>
            <Button 
                variant="outlined"
                color="secondary" 
                size="medium"
                href={`/detalhes/${props.id}`}
            >
                detalhes
            </Button>
        </CardFooter>
    </CardContainer>
}