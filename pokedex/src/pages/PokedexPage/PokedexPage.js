import { Box, Grid, Zoom } from "@mui/material";
import React from "react";
import PokeCard from "../../components/PokeCard/PokeCard";

const PokedexPage = () => {

    return (
        <>
            Eu sou a Pokédex page
            <Zoom in style={{ transitionDelay: '50ms' }}>
                <Box m={2}>
                    <Grid container justifyContent="center" alignItems="center">
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
                    </Grid>
                </Box>
            </Zoom>
        </>
    )
}

export default PokedexPage;