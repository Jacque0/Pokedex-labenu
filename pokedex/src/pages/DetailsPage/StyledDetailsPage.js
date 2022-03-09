import styled from "styled-components"

export const PageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`

export const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    align-items: center;
    justify-content: space-between;
    img{
        height: 250px;
        margin: 5px;
        border: 1px solid lightgray;
    }
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