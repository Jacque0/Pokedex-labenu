import { Grid, Pagination, Zoom } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import { GlobalStateContext } from "../../Global/GlobalStateContext";

const HomePage = () => {

    const { states, setters, requests } = useContext(GlobalStateContext);
    const { pokemonsList } = requests


    const renderListPokemon = pokemonsList && pokemonsList.results.map((p) => {
        return <PokeCard key={p.name} pokemonName={p.name} />
    })

    return (
        <Zoom in style={{ transitionDelay: '50ms' }}>
            <Box m={2}>
                <Grid container justifyContent="center" alignItems="center">
                    {renderListPokemon}
                </Grid>

                <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <Pagination
                        count={57}
                        variant="outlined"
                        color="primary"
                        siblingCount={2}
                        boundaryCount={3}
                        showFirstButton
                        showLastButton
                        onChange={setters.onChangePage} />
                </Box>
            </Box>
        </Zoom>
    )
}

export default HomePage;