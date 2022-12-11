import styled from "styled-components";

const FlexArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    img{
        width: 2.5rem;
        height: 2.5rem;
        margin: 1rem ;
        transition: 0.1s;
        border-radius: 1rem;
        &:hover {
            background-color: #0F75D3;
            cursor: pointer;    
        }
    }

    p {
        cursor: text;
        color: #a09e9e;
    }
`

export default function InsideChamada(props) {
    return(
            <FlexArea>
                <p>{props.Text}</p>
                <img src={props.Imagem}/>
            </FlexArea>    

            
    )
}