function Form(){

    function cadastra(e){
        e.preventDefault()
        let user = document.querySelector('.nome').value
        alert(user + ' cadastrado com sucesso!')
    };

    return(
        <>
        <section>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastra}>
                <div>
                    <input className="nome" type="text" placehoder="Digite o su nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </section>
        </>
    );
};
export default Form;