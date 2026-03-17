  //importacao
import styles from './Perfil.module.css';


//propriedades
const Perfil = ({nomeUsuario}) => { 
     return (
        // uso do css
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} /> 
            <h1 className={styles.name}> 
                {nomeUsuario}
            </h1>
        </header>
     )
}

export default Perfil;