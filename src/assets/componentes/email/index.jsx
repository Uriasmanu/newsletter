import { styled } from 'styled-components';


const ContainerEmail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10%;

    label{
        font-weight: bold;
    }

    input{
        width: 90%;
        height: 25px;
        border-radius: 8px;
        padding: 10px;
        border: hsl(231, 7%, 60%) solid 1px;
    }
    button{
        width: 95%;
        height: 45px;
        border-radius: 8px;
        padding: 10px;
        background: hsl(234, 29%, 20%);
        color: #fff;
        cursor: pointer;
    }
`

const Email = () => {
    return (
        <ContainerEmail>
            <label htmlFor="email">Email address: </label>
            <input type="text" id="email" placeholder='email@company.com' />
            <button>Subscribe to monthly newsletter</button>
        </ContainerEmail>
    )
}

export default Email;