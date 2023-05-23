function PropsAvancado ({bairro,rua,casa}){
    return(
        <>
            <h5>Usando props com structs</h5>
            <p>Endereço para entrega.
                <span>Bairro: {bairro}, </span>
                <span>Rua: {rua}, </span>
                <span>casa:{casa}</span>
            </p>
        </>
    )
}

export default PropsAvancado