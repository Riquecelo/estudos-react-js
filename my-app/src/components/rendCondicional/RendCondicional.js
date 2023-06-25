import {useState} from 'react';

function RendCondicional(){

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        //console.log(email)
    }

    function limpaEmail(){
        setUserEmail('')
    }

    return(
        <>
            <h2>Cadastre seu email:</h2>
            <form>
                <input 
                    type="email" 
                    placeholder="digite seu email..."
                    onChange={(e) =>setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar email</button>
            </form>
            {userEmail && (
                <div>
                    <p>O email do usuário é: {userEmail}</p>
                    <button onClick={limpaEmail}>Limpa email</button>
                </div>
            )}
        </>
    )
}

export default RendCondicional;