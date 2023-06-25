function RendLista({itens}){
    return(
        <>
            <h3>Tecnologias baseadas em JavaScript:</h3>
            <ul>
            { itens.length > 0 ? ( 
                itens.map((item, index) =>(
                    <li key={index}>{item}</li>))
                ) : (
                    <p>Não a itens na lista de Tecnologias</p>
                )
            }
            </ul>
            
        </>
    )
}

export default RendLista