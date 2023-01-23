const Materia = ({nome, turno}) => {
    return ( 
        <div>
            <h1 style={{color:'blue'}} >Nome: {nome} </h1>
            <h2>Turno: { turno==='M' ? 'Matutino' : 'Noturno' }</h2>
        </div>
     );
}
 
export default Materia;