import React from 'react';
import { styled } from 'styled-components';
import textos from '../textos.json';

import icon from '../../../../public/assets/images/icon-success.svg';
import Email from '../email';

const Infos = styled.div`
    padding: 3%;
    width: 100%;
    
    ul {
        list-style: none;
        padding: 0%;
    }

    img {

        width: 24px;
    }

    @media screen and (max-width: 600px) {
        height: 66vh;
    }

`;

const Div = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 2%;
    align-items: center;

    @media screen and (max-width: 600px) {
        margin-bottom: 8%;
        width: 73%;
    }
`;

const Form = ({submeter, setEmailValue}) => {
    return (
        <Infos>
            <h1>{textos.sign_up_form.title}</h1>
            <p>{textos.sign_up_form.description}</p>
            <ul>
                {Object.values(textos.sign_up_form.topics).map((topic, index) => (
                    <li key={index}>
                        <Div>
                            <img src={icon} alt="Ícone de sucesso" />
                            {topic}
                        </Div>
                    </li>
                ))}
            </ul>

            <Email submeter={submeter}  setEmailValue={setEmailValue}/>
        </Infos>
    );
};

export default Form;
