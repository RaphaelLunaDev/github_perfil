import { useState } from "react"

import Perfil from "./components/Perfil"
import Formulario from "./components/formulario"
import ReposList from "./components/ReposList"

function App() {
    const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
     
    // sistema dinamico de escrever o nome do perfil e ele aparecer
    const [nomeUsuario, setNomeUsuario] = useState('');
    
    return ( 
       <>     
            <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />     
            {/* nome do perfil no git hub */}

            {/* so vai renderizar quando o nome de usuario for preenchido */}

            {nomeUsuario.length > 4 && (
                <>
                <Perfil nomeUsuario= {nomeUsuario}/>
                <ReposList nomeUsuario= {nomeUsuario}/>
                </>
            )}


        {/* {formularioEstaVisivel && (
            <Formulario />
        )} */}
        {/* botao para fazer o formulario aparecer */}
        {/* <botton onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">botao de aparecer formulario</botton> */}
        </>
    )
}

export default App
