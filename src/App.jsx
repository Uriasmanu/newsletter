import { styled } from "styled-components"
import EstilosGlobais from "./assets/componentes/estilosGlobais"
import Card from "./assets/componentes/Card"

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
      <Card/>
    </Div>
  )
}

export default App
