const Button = (props) => {
    return ( 
        <button onClick={props.acao} >{props.nome}</button>
     );
}
 
export default Button;