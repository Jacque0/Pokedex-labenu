import styled from "styled-components"

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  align-items: center;
  overflow: hidden;
  width: 200px;
  height: fit-content;
  background-image: linear-gradient(
    160deg,
    ${(props) => props.bgColor},
    ${(props) => props.bgColor},
    white,
    white
  );
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 0px 2px 6px lightgray;
  p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    margin: 5px;
    font-weight: 600;
  }
  img {
    height: 170px;
  }
`

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: 100%;
  width: 100%;
  background-color: "white";
`
