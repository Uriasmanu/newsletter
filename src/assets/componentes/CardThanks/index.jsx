import {styled} from "styled-components"
import textos from '../textos.json'
import icone from '../../../../public/assets/images/icon-success.svg'
import Button from "../Button"

const NewCard = styled.div `
    background: hsl(0, 0%, 100%);
    width: 30%;
    height: auto;
    padding: 3%;
    border-radius: 15px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    gap: 30px;

    img{
        width: 45px;
        align-self: flex-start;
    }
    h1{
        font-family: 'Roboto', sans-serif;
        margin: 0;
        font-size: 40px;
       
    }

    p{
        font-size: 14px;
        margin: 0;
    }
    

 `


const CardThanks = () =>{
    return(
        <NewCard>
            <img src={icone} alt="Ícone de sucesso"/>
            <h1>{textos.success_message.title}</h1>
            <p>A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription.</p>
            <Button text= "Dismiss message" />
        </NewCard>
    )
}

export  default CardThanks; 