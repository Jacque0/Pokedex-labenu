import { Grid, Pagination, Zoom } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import BoxError from "../../components/BoxError";
import { useChangePage } from "../../hooks/useChangePage";
import { Loading } from "../../components/Loading/Loading";

const HomePage = () => {
  useChangePage();
  const { states, setters, requests } = useContext(GlobalStateContext);
  const { pokemonsList, loading, error } = requests;

  const renderListPokemon = loading ? <Loading /> :
    pokemonsList && pokemonsList.results.map((p) => {
      return <PokeCard key={p.name} pokemonName={p.name} />;
    });

  return (
    <>
      <Zoom in style={{ transitionDelay: "50ms" }}>
        <Box m={2}>
          <Grid container justifyContent="center" alignItems="center">
            {renderListPokemon}
          </Grid>

          <Box
            style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: '25px' }}
          >
            <Pagination
              count={57}
              defaultPage={states.pagination}
              variant="outlined"
              color="primary"
              siblingCount={1}
              boundaryCount={1}
              showFirstButton
              showLastButton
              size="small"
              onChange={setters.onChangePage}
            />
          </Box>
        </Box>
      </Zoom>
      <BoxError error={error} />
    </>
  );
};

export default HomePage;
