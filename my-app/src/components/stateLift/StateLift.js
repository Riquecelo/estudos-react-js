function StateLift({setNome}){
    return(
        <>
        <p>Digite seu nome</p>
        <input type="text" placerolder="Qual é o seu nome?" onChange={(e) => setNome(e.target.value)}/>
        </>
    )
}

export default StateLift