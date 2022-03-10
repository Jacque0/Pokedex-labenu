import styled from "styled-components"

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`

export const PokeContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.bgColor};
    border: 1px solid lightgray;
    width: 80%;
    img{
        height: 250px;
        margin: 5px;
    }
`

export const DetailsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    align-items: center;
`

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 510px;
    border: 1px solid lightgray;
    margin: 10px;
    p{
        margin: 15px;
    }
`

export const TypeMovesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    align-items: center;
    height: 510px;
    .types{
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-bottom: 5px;
        border: 1px solid lightgray;
        p{
            margin: 5px;
        }
    }
    .moves{
        height: 100%;
        width: 100%;
        margin-top: 5px;
        border: 1px solid lightgray;
        justify-content: space-between;
    }
`