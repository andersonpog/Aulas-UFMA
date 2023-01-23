import { useState } from "react"

import Button from "./Button"
import Contador from "./Contador"
import ButtonGroup from "./ButtonGroup"

function App() {

  const nota=5
  const [nome, setNome] = useState('React')
  const [contador,setContador] =useState(0)

  const handleNome = (evento) => {
      setNome(evento.target.value)
  }

  const up = () => {
    setContador(contador+1)
  }

  const down = () => {
    setContador(contador-1)
  }

  return (
    <div>
      <h1>ufma</h1>
      <h2>{nome}</h2>
      <h2>{nota+2}</h2>
      <input value={nome}  onChange={handleNome} ></input>
      <Contador numero={contador} />
      <ButtonGroup up={up} down={down} />
    </div>
  );
}

export default App;
