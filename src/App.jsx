// App.jsx
import React, { useState, useContext } from "react";
import { styled } from "styled-components";
import EstilosGlobais from "./assets/componentes/estilosGlobais";
import Card from "./assets/componentes/Card";
import CardThanks from "./assets/componentes/CardThanks";
import ShowCardContext from "./assets/context/index";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  const [email, setEmail] = useState("");
  const { showCard } = useContext(ShowCardContext);

  return (
    <Div>
      <EstilosGlobais />
      {showCard ? <Card setEmailValue={setEmail} /> : <CardThanks email={email} />}
    </Div>
  );
}

export default App;
