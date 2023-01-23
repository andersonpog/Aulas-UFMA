import {useState} from "react"

import Materia from "./Materia";

const App = () => {

    const materiasVetor =[
        {
          id:1,
          materia:'calculo',
          turno:'M'
        },
        {
          id:2,
          materia:'algebra',
          turno:'M'
        },
        {
          id:3,
          materia:'quimica',
          turno:'N'
        },
        {
            id:4,
            materia:'circuitos',
            turno:'N'
        }
      ]

    const [novaMateria, setNovaMateria] = useState('')
    const [novoTurno, setNovoTurno] = useState('M')
    const [materias, setMaterias] = useState(materiasVetor)
    const [filtro,setFiltro] = useState('')

    const handleMateria = e => {
        setNovaMateria(e.target.value)
    }

    const handleTurno = e => {
        setNovoTurno(e.target.value)
    }

    const handleFiltro = e => {
        setFiltro(e.target.value)
    }

    const handleEnviar = () =>{
        setMaterias([...materias,{id:materias.length+1, materia:novaMateria, turno:novoTurno}])
    }
    

    return ( 
        <div>
            <ul>
                {materias.filter(mat => mat.materia.includes(filtro)).map(mat => <Materia key={mat.id} nome={mat.materia} turno={mat.turno}  />)}
            </ul>
            <div>
            <label>Materia</label>
            <input value={novaMateria}  onChange={handleMateria} ></input>
            </div>
            <div>
            <label>Turno</label>
            <select value={novoTurno} onChange={handleTurno} >
                <option value='M' >Matutino</option>
                <option value='N' >Noturno</option>
            </select>
            </div>
            <button onClick={handleEnviar} >Enviar</button>
            <div>
            <label>Filtro</label>
            <input value={filtro}  onChange={handleFiltro} ></input>
            </div>
        </div>
     );
}
 
export default App;