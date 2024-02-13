import { styled } from "styled-components"
import EstilosGlobais from "./assets/componentes/estilosGlobais"
import Card from "./assets/componentes/Card"
import CardThanks from "./assets/componentes/CardThanks"

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

function App() {

  return (
    <Div>
      <EstilosGlobais/>
<CardThanks/>
    </Div>
  )
}

export default App
