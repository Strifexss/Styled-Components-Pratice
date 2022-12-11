import styled from "styled-components";
import GamePad from './Icons/GamePad.png'

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 10% 55% 35%;
    
    h3 {
        color: #fff;
        margin-left: 2rem;
    }
`
export const NavBar = styled.div`
    height: 100vh;
    width: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: solid 2px #37373B;

    h1{
        margin: 5rem;
        cursor: pointer;
        &:hover {
           background-color: #0F75D3;
        }
        
       
    }
`
export const TopNavBar = styled.div`
    display: grid;
    grid-template-columns: 50%;
`

export const CampoTexto = styled.input`
    width: 20rem;
    height: 2rem;
    margin: 1rem;
    margin-left: 2rem;
    background-color: #464646;
    border: none;
    border-radius: 10px;
    padding: 0.3rem;
    color: #ffffffe7;

    ::placeholder{
        color: #ffffffe7;
    }
`

export const Imagem = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    margin: 1rem;
    cursor: pointer;
    transition: 0.1s;
    &:hover {
           background-color: #0F75D3;
        }
`

export const SpiderManBanner = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    background-color: #29282D;
    width: 88%;
    height: 25%;
    margin: 1rem;
    margin-left: 2rem;
    border-radius: 1rem;
    cursor: pointer;
    
    p{
        background-color: #ED2C2B;
        color: #fff;
        width: 3rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2rem;
        margin: 2rem;
        margin-bottom: 1rem;
    }

    h2 {
        color: #fff;
        margin-left: 2rem;
    }
`

export const PurchaseButton = styled.div`
    background-color: #3F3E41;
    height: 4rem;
    width: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    margin-top: 1rem;
    border-radius: 1rem;
    p {
        color: #88878C;
        margin: 0;
        margin-left: 1rem;
        background-color: #3F3E41;
    }

    button {
        margin: 1rem;
        margin-right: 0.3rem;
        height: 90%;
        width: 7rem;
        border-radius: 20%;
        border: none;
        color: #fff;
        background-color: #0D82EC;
        font-weight: bold;
        cursor: pointer;
        transition: 0.1s;
        &:hover{
            background-color: #083866;
        }
    }
`

export const HomemAranha = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Miles = styled.img`
    width:  120%;
    height: 130%;
    transform: translateY(-1.5rem);
    
`

export const Games = styled.div`
    width: 13.3rem;
    height: 12rem;
    margin: 1rem;
    display: grid;
    grid-template-rows: 80%;
    border-radius: 2rem;
    overflow: hidden;
    cursor: pointer;
    transform: scale(90%);
    transition: 0.1s;
    
    img{
        width: 100%;
        height: 100%;
        border-radius: 2rem;
    }
    p {
        color: #999AA1;
        font-weight: bold;
        margin: 0.8rem;
    }

    &:hover {
        transform: scale(100%);
    }
`

export const MostPlayed = styled.div`
    display: flex; 
    flex-wrap: wrap;
`

export const Accessoriess = styled.div`
    display: grid;
    grid-template-rows: 10% 90%;
    width: 25rem;
    height: 13rem;
    background-color: #28272C;
    margin-left: 2rem;
    border-radius: 1.5rem;
    cursor: pointer;

    p{
        color: #939299;
        font-weight: bold;
        margin: 0.8rem;
    }
`

export const AccessoriesIcons = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 60%;
        height: 90%;
    }
`

export const Library = styled.div`
    background-color: #28272C;
    width: 30rem;
    height: 13rem;
    border-radius: 1.5rem;
    display: grid;
    grid-template-rows: 20% 80%;
    margin-left: 4rem;
    p{
        color: #939299;
        font-weight: bold;
        margin: 0.8rem;
    }
`

export const Divisoria = styled.div`
    height: auto;
    width: 100%;
    display: grid;
    grid-template-columns: 40% 60%;
`

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(-4rem);
`

export const NotifyArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Social = styled.div`
    width: 30rem;
    height: 44rem;
    background-color: #29282D;
    margin: 1rem;
    border-radius: 1rem;

    p {
        color: #707276;
        margin: 2rem;
        font-size: 1.2rem;
        cursor: pointer;
    }

    button {
        background-color: #28272C;
        color: #395D81;
        border: solid 0.2rem #395D81;
        border-radius: 1rem;
        width: 5rem;
        height: 3rem;
        cursor: pointer;
        &:hover {
            border: solid 0.2rem #1f3449;
            color: #1f3449;
        }
    }
    
`

export const UpdateArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Update = styled.div`
    width: 20rem;
    height: 6rem;
    border-radius: 2rem;
    background-color: #5A575B;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
        background-color: #39373a;
    }
    h3{
        margin: 1rem;
        text-align: center;
    }
    h2{
        margin: 1rem;
        color: #5A575B;
        color: #fff;
        border: solid 0.4rem #4c7199;
        border-radius: 2rem;
        width: 3.2rem;
        height: 3.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
}
`

export const Chamada = styled.div`
    width: 20rem;
    height: 9rem;
    border-radius: 2rem;
    background-color: #5A575B;
    display: grid;
    grid-template-rows: 50% 50%;
    transition: 0.1s;
`

export const ChamadaArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`