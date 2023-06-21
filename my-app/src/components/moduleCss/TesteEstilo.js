import style from './Estilo.module.css'

function TesteEstilo(){
    return(
        <div className={style.mainContainer}>
            <h3 className={style.frase_estilo}>Testando CSS Module</h3>
        </div>
    );
}

export default TesteEstilo