import {useState} from 'react';

function FormComState(){

    function cadastra(e){
        e.preventDefault()
        alert(`nome:${nome} e senha:${password} cadastrado com sucesso!`)
        setNome('');
        setPassword('');
    };

    const[nome, setNome] = useState();
    const[password, setPassword] = useState();

    return(
        <>
        <section>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastra}>
                <div>
                    <label htmlFor='name'>Nome:</label>
                    <input id="name" name='name' type="text" placeholder="Digite o seu nome" 
                    onChange={(e) => setNome(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='password'>Senha:</label>
                    <input id="password" name='password' type="password" placeholder="Digite o sua senha"
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </section>
        </>
    );
};
export default FormComState;