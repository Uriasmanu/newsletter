import { styled } from 'styled-components';


const Bnt = styled.button`

    border-radius: 8px;
    padding: 10px;
    background: hsl(234, 29%, 20%);
    color: #fff;
    cursor: pointer;

    &:hover{
        background: hsl(4, 100%, 67%);
        border: hsl(4, 100%, 67%);
    }
`

const Button = ({text}) =>{
    return(
        <Bnt>{text}</Bnt>
    )
}

export  default Button; 