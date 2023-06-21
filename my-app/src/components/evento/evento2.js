function Evento2(){
    function meuEvento(numero){

        if(numero !== isNaN(numero)){
            alert('Fui ativado!');
        }else{
            alert('Sem parâmetro na função.')
        }
    }
    return(
        <>
        <p>Clique para ativar o evento</p>
        <button onClick={meuEvento}>Ativar!</button>
        </>
    );
};
export default Evento2;