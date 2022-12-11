import styled from "styled-components"

export default function Notificacao(props) {
    
    const Notify = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: #464646;
    cursor: pointer;
    margin: 1rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 2rem;
        height: 2rem;
        
    }
`
    return(
        <Notify>
            <img src={props.imagem}/>
        </Notify>
    )
}