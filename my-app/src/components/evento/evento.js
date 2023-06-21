function Evento(){
    function meuEvento(){
        alert('Fui ativado!');
    }
    return(
        <>
        <p>Clique para ativar o evento</p>
        <button onClick={meuEvento}>Ativar!</button>
        </>
    );
};
export default Evento;