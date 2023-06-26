//npm install react-icons
import { SiVtex, SiReact, SiJavascript, SiNpm, SiGit} from "react-icons/si";
import styles from './Footer.module.css'

function Footer(){
    return(

        <ul className={styles.social_list}>
            <p>Rodapé da página</p>
            <li><SiVtex/></li>
            <li><SiReact/></li>
            <li><SiJavascript/></li>
            <li><SiNpm/></li>
            <li><SiGit/></li>
        </ul>
    )
}

export default Footer