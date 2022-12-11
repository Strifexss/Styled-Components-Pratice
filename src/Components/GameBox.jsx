import { Games } from "../Estilos"
export default function GameBox(props) {
    return(
        <Games>
            <img src={props.imagem} />
            <p>{props.name}</p>
        </Games>
    )
}