import styled from "styled-components"

const Divisoria = styled.div`
    display: flex;
    justify-content: space-between;
    img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.5rem;
        margin-left: 1rem;
    }

    p{
        color: #395D81;
        transform: translateY(-0.6rem);
    }

    button {
        background-color: #28272C;
        color: #395D81;
        border: solid 0.2rem #395D81;
        border-radius: 1rem;
        width: 5rem;
        height: 3rem;
        margin-right: 1rem;
        cursor: pointer;
        &:hover {
            border: solid 0.2rem #1f3449;
            color: #1f3449;
        }
    }
`

export default function Friends(props) {
    return(
        <Divisoria>
            <img src={props.Imagem}/>
            <p>{props.nome}</p>
            <p>{props.data}</p>
            <button>Chat</button>
        </Divisoria>
    )
}