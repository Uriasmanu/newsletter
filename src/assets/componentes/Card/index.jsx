import {styled} from "styled-components"

import imagemDesktop from '../../../../public/assets/images/illustration-sign-up-desktop.svg'
import Form from "../Form"

import imagemMobile from  '../../../../public/assets/images/illustration-sign-up-mobile.svg'

const Container = styled.div`
    background: hsl(0, 0%, 100%);
    width: 50%;
    height: 70%;
    padding: 1%;
    border-radius: 15px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    flex-direction: row-reverse;
`
const Imagem = styled.img`
    width: 100%;
    height: 100%;
`

const Card = ({submeter, setEmailValue}) =>{
    return(
        <Container>
            <Imagem src={window.innerWidth <= 600 ? imagemMobile : imagemDesktop}
        alt="Illustration"/>

            <Form submeter={submeter}  setEmailValue={setEmailValue}/>
        </Container>
    )
}

export default Card