import Button from "./Button";

const ButtonGroup = ({up, down}) => {
    return ( 
        <>
            <Button  nome='up' acao={up} />
            <Button  nome='down' acao={down} /> 
        </>       
        );
}
 
export default ButtonGroup;
