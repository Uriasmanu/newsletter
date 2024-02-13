import { styled } from "styled-components"
import EstilosGlobais from "./assets/componentes/estilosGlobais"
import Card from "./assets/componentes/Card"
import CardThanks from "./assets/componentes/CardThanks"
import { useState } from "react"

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

function App() {

  const [showCard, setShowCard] = useState(true)
  const [email, setEmail] = useState("");

  const submeter = () =>{
    setShowCard(false)
  }

  const dispersar = () =>{
    setShowCard(!showCard)
  }

  return (
    <Div>
      <EstilosGlobais />
      {showCard ? <Card submeter={submeter} setEmailValue={setEmail} /> : <CardThanks dispersar={dispersar} email= {email}/>}
    </Div>
  )
}

export default App
