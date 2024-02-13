import { useState } from 'react';
import { styled } from 'styled-components';
import Button from '../Button';


const ContainerEmail = styled.form`
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
    
`

const Email = ({submeter, setEmailValue}) => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        submeter();
        setEmailValue(email)
    };

    return (
        <ContainerEmail onSubmit={handleSubmit}>
        
                <label htmlFor="email">Email address: </label>
                <input
                    type="text" id="email" placeholder='email@company.com'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <Button text = "Subscribe to monthly newsletter" />
            
        </ContainerEmail>
    )
}

export default Email;