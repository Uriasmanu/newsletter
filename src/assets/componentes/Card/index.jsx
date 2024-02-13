import {styled} from "styled-components"

import imagem from '../../../../public/assets/images/illustration-sign-up-desktop.svg'
import Form from "../Form"

const Container = styled.div`
    background: hsl(0, 0%, 100%);
    width: 50%;
    height: 70%;
    padding: 1%;
    border-radius: 15px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
`
const Imagem = styled.img`
    width: 100%;
    height: 100%;
`

const Card = () =>{
    return(
        <Container>
            <Form/>
            <Imagem src={imagem}  />
        </Container>
    )
}

export default Card