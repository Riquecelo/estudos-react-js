import PropsBasico from "./PropsBasico";
import PropsIntermediario from "./PropsIntermediario";
import PropsAvancado from "./PropsAvancado";
function TesteProps(){
    return(
        <>
            <PropsBasico nome="Santos"/>
            <PropsIntermediario lanche="hamburguer" sabor="frango" bebida="espoca"/>
            <PropsAvancado bairro="Matriz" rua="Castelo Branco" casa="7"/>
        </>
    )
}

export default TesteProps;