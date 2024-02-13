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
`;

const Div = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 2%;
    align-items: center;
`;

const Form = ({submeter}) => {
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

            <Email submeter={submeter}/>
        </Infos>
    );
};

export default Form;
