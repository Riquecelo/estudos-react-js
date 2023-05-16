import PropsBasico from "./PropsBasico"
import PropsIntermediario from "./PropsIntermediario"
import PropsAvancado from "./PropsAvancado"

function TesteProps(){

    return(
        <>
            <PropsBasico nome="Pedro"/>
            <PropsIntermediario 
                lanche="Pizza G"
                sabor="calabresa"
                bebida="refrigerante de 2L"
            />
            <PropsAvancado
                bairro="Matriz"
                rua="Castelo Branco"
                casa="10"
            />
        </>
    )
}

export default TesteProps