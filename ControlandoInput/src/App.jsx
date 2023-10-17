import { useState } from "react"

function App() {
  
  const [valor , setValor] = useState('')

  const OuvirInput = (ev) => {
    setValor(ev.target.value)
  };

  return (
    <>
      <div>
        <h1>Controlando Inputs</h1>
        <label htmlFor=""> Input</label>  
        <input 
        type="text"
        id="textInput"
        min={1}
        /* ev esta acessando o evento , target o elemento alvo e o value o valor digitado */
        onChange={(ev) => setValor(ev.target.value)} 
        />
        <p>{valor}</p> {/* exibindo as alteraçoes da variavel valor  */}
      </div>

    </>
  )
}

export default App
