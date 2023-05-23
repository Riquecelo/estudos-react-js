function PropsIntermediario (props){
    return(
        <>
            <h5>Usando mais de uma Props</h5>
            <p>Confirmando seu pedido.
            <span>Um: {props.lanche}, </span>
            <span>Sabor: {props.sabor}, </span>
            <span>sua bebida: {props.bebida}</span>
            </p>
        </>
    )
}
export default PropsIntermediario