import styled from "styled-components"

export const PageContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  height: auto;
  overflow-y: scroll;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`

export const PokeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(
    160deg,
    ${(props) => props.bgColor1},
    ${(props) =>
      props.bgColor2 === "white" ? props.bgColor1 : props.bgColor2},
    white
  );
  border: 1px solid lightgray;
  width: 80%;
  border-radius: 5px;
  box-shadow: 0px 4px 10px lightgray;
  overflow: hidden;
  height: 70vh;
  img {
    height: 300px;
    margin: 5px;
  }
`

export const TypesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`

export const Type = styled.p`
  color: black;
  font-weight: 700;
  opacity: 80%;
  margin: 15px;
  margin-right: 0;
  border-radius: 15px;
  padding: 3px 5px;
  border: 1px solid gray;
  box-shadow: 0px 0px 10px gray;
  background-color: ${(props) => props.typeColor};
`

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  align-items: center;
  width: 100%;
  background-color: white;
`

export const StatsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 150px;
  margin: 10px;
  p {
    margin: 15px;
  }
`

export const MovesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  align-items: center;

  h3 {
    border-bottom: 1px solid black;
  }
  .moves {
    height: 100%;
    width: 100%;
    margin-top: 5px;
    border: 1px solid lightgray;
    justify-content: space-between;
  }
`
