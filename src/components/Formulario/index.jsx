import { useState, useEffect } from "react"

const Formulario = () => {

    const [materiaA, setMateriaA] = useState(0)
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)

    //alterando valores atraves de funcao
    let [nome, setNome] = useState ('')

      useEffect(() =>  {
        console.log("o componente iniciou");

        return () => {
            console.log("o componente finalizou")
        }
    }, []);

    useEffect(() =>  {
        console.log("o estado mudou")
    }, [nome]);

    useEffect(() => {
        console.log("materia A mudou para: " + materiaA)
    }, [materiaA, materiaB, materiaC]);

    
    //atribuicao de valor usando set (nao é uma substituicao e sim um acresimo)

    const alteraNome = (evento) => {
        
        setNome(estadoAnterior => {
            return evento.target.value;
        })
    }
 
    //FUNCAO DENTRO DA FUNCAO

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Ola {nome} você foi aprovado</p>
            )
        } else {
            return (
                <p>Ola {nome} você não foi aprovado</p>
            )
        }
    }   

    // Renderizacao de listas//

    


                                              
    return(
        <form>

            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>




                  {/* para nao tratar como concatenacao é necessario o parseInt */}
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota materia A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario