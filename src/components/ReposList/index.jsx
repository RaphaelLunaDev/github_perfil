import { useEffect, useState } from "react";

//importacao do css

import styles from './ReposList.module.css'

const ReposList = ( {nomeUsuario})  => {

    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true)


    // recebendo o nome de usuario como propriedade
    useEffect(() => {

        setEstaCarregando(true);

        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {

            setTimeout(() => {
                setEstaCarregando(false)
                setRepos(resJson);
            }, 3000);
        })
    }, [nomeUsuario]);

    return (
        < div className="container">
            {/* se estiver Carregando ira mostrar a mensagem senao ira carregar o formulario */}
        {estaCarregando ? (
            <h1>Carregando...</h1>
        ) : (

        <ul className={styles.list}>
           
            {repos.map(({ id, name, language, html_url }) => (
                
                <li className={styles.listItem} key={id}>

                    <div className={styles.itemName}>
                        <b>Nome:</b> {name} 
                    </div>

                    <div className={styles.itemLanguage}>
                        <b>linguagem:</b> {language}    
                    </div>

                    <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
                </li>
            ))}


            <li>Repositorio</li>
        </ul>
        )}
        </div>
    )
}

export default ReposList;