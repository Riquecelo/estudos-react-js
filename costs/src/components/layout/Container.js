import styles from './Container.module.css'
//está recebendo os filhos do conteinar como props
function Container(props){
    return(
    <div 
        className={`${styles.container}    
                    ${styles[props.customClass]}`//recebendo classe customizada
                    }>
                        {props.children}{/*recebendo os route do containe pela props */}
    </div>
    )
}

export default Container