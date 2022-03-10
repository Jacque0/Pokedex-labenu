import { Box, Grid, Zoom } from "@mui/material";
import React, { useContext } from "react";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import PokeCard from "../../components/PokeCard/PokeCard";

const PokedexPage = () => {

    const { states, setters, requests } = useContext(GlobalStateContext);

    // const renderListPokemon = states.pokedex && states.pokedex.map((p) => {
    //     <PokeCard key={p.pokemonName} pokemonName={p.pokemonName} />
    // })

    return (
        <>
            <Zoom in style={{ transitionDelay: '50ms' }}>
                <Box m={2}>
                    <Grid container justifyContent="center" alignItems="center">
                        {/* {renderListPokemon} */}
                    </Grid>
                </Box>
            </Zoom>
        </>
    )
}

export default PokedexPage;