import { Grid, Zoom } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import { GlobalStateContext } from "../../Global/GlobalStateContext";

const HomePage = () => {

    const { states } = useContext(GlobalStateContext);
    const { pokemonsList } = states

    const renderListPokemon = pokemonsList && pokemonsList.results.map((p) => {
        return <PokeCard key={p.name} pokemonName={p.name} />

    })

    return (
        <Zoom in style={{ transitionDelay: '50ms' }}>
            <Box m={2}>
                <Grid container justifyContent="center" alignItems="center">
                    {renderListPokemon}
                </Grid>
            </Box>
        </Zoom>
    )
}

export default HomePage;