function UsandoVariaveis(){

    const nome = "Marcelo"
    const nomeModificado = nome.toUpperCase()
    const url = 'https://via.placeholder.com/150'
    return(
        <>
            <p>
            Exibindo conteúdo de uma variável<br/>
            <span>Olá, {nome}</span>
            </p>
            <p>
            Exibindo conteúdo de uma variável tratada<br/>
            <span>Olá, {nomeModificado}</span>
            </p>
            <img src={url} alt="uma imagem"/>
        </>
    )

}

export default UsandoVariaveis