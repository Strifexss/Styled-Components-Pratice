import styled from "styled-components"
import CyberPunk from '../Icons/CyberPunk.webp'

const Divisoria = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0.3rem;
    img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.5rem;
        margin-left: 1rem;
    }

    h5{
        transform: translateY(-0.6rem);
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

export default function GamesLibrary(props) {
    return(
        <Divisoria>
            <img src={props.Imagem}/>
            <p>{props.nome}</p>
            <p>{props.console}</p>
            <p>{props.data}</p>
            <button>Download</button>
        </Divisoria>
    )
}