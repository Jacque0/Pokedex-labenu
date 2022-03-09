import { Box, Grid, Zoom } from "@mui/material";
import React from "react";
import { BASE_URL } from "../../constants/BASE_URL";
import useRequestData from "../../hooks/useRequestData";

const PokedexPage = (props) => {

    // const [pokemonData, error, loading]  = useRequestData(`${BASE_URL}${props.pokemonName}`);
    // const pokemonType = pokemonData && pokemonData.types[0].type.name;
    // const pokemonPhoto = pokemonData && pokemonData.sprites.other.dream_world.front_default;

    return (
        <>
            Eu sou a PokédexPage
            <Zoom in style={{ transitionDelay: '50ms' }}>
                <Box m={2}>
                    <Grid container justifyContent="center" alignItems="center">
                        {/* Aguardando pokémons */}
                    </Grid>
                </Box>
            </Zoom>
        </>
    )
}

export default PokedexPage;