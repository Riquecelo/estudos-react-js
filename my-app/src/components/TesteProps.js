import PropsBasico from "./props/PropsBasico";
import PropsIntermediario from "./props/PropsIntermediario";
import PropsAvancado from "./props/PropsAvancado";
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