function Variaveis (){

    const nome = "Marcelo";
    const nomeModificado = nome.toUpperCase();
    const url = 'https://via.placeholder.com/150'

    return(
        <div>
            <p>
                Exibindo conteúdo de uma variável<br/>
                <i>Conteúdo da variável nome é: </i>{nome}
            </p>
            <p>
                Exibindo conteúdo de uma variável tratada<br/>
                <i>Conteúdo da variável tratada é: </i>{nomeModificado}
            </p>
            <p>
                Usando o conteúdo uma variável como atributo css<br/>
                <img src={url} alt="uma imagem"/>
            </p>
        </div>
    )
}
export default Variaveis