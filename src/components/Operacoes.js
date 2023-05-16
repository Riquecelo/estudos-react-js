function Operacoes(){

    function multi(a,b){
        return a * b
    }

    return(
        <>
            <p>
            Executando operação de soma <br/>
            <b>Soma</b>:{2 + 3}
            </p>
            <p>
            Usando uma função para executar uma multiplicação<br/>
            <b>Mulptiplicação é:</b> {multi(9,9)}
            </p>
        </>
    )
}

export default Operacoes