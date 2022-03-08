import { Box, Grid } from "@mui/material";
import React from "react";

const PokedexPage = () => {

    return(
        <>
            Eu sou a Pokédex page

            <Box m={12}>
                <Grid container spacing={2}>
                    {/*Variável contendo os resultados do map, já englobadas pelo card do Léo.
                    Importa destacar que o layout aqui proposto é via MUI, então possivelmente
                    sofrerá atualizações porque o estou testando ainda. :)*/}
                </Grid>
            </Box>
        </>
    )
}

export default PokedexPage;