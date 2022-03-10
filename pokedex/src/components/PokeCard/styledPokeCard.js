import styled from "styled-components"

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    align-items: center;
    overflow: hidden;
    width: 200px;
    height: 250px;
    background-color: ${props => props.bgColor};
    border: 1px solid lightgray;
    img{
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
    background-color: 'white';
`