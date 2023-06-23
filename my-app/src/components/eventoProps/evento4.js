import Botao from "./Botao"

function Evento4(){

    function meuEvento(){
        alert('Ativado evento com props!')
    }

    return(
        <>
            <div>
                <p>Clique para disparar um evento:</p>
                <Botao event={meuEvento} text="Evento com props"/>
            </div>
        </>
    )
}

export default Evento4