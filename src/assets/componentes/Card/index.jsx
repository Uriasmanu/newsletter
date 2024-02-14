import { styled } from "styled-components"

import imagemDesktop from '../../../../public/assets/images/illustration-sign-up-desktop.svg'
import Form from "../Form"

import imagemMobile from '../../../../public/assets/images/illustration-sign-up-mobile.svg'

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

    @media screen and (max-width: 600px) {
        background: hsl(0, 0%, 100%);
        width: 100%;
        height: 100%;
        border-radius: 15px;
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        border-radius: 1px;

    }
`


const ContainerBackgrond = styled.div`
    background: url(${imagemDesktop}) ;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 600px) {
        background: url(${imagemMobile});
        height: 30%;
        border-radius: 15px;

    }

`

const Card = ({ submeter, setEmailValue }) => {
    return (
        <Container>
            <ContainerBackgrond />

            <Form submeter={submeter} setEmailValue={setEmailValue} />
        </Container>
    )
}

export default Card