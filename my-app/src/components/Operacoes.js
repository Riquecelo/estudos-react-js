function Operacoes(){

    function multi(a,b){
        return a * b
    }
    return( 
    <div>
        <p>
            Executando operações de soma no jsx
            <br/>
            <b>Soma:</b>{2 + 3}
        </p>
        <p>
            Usando uma função para executar uma multiplicação
            <br/>
            <b>Multiplicação é :</b>
            {multi(9,9)}
        </p>
    </div>
    )
}

export default Operacoes