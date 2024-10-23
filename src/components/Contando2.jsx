import { useState } from "react";

function Contando() {
  const [contando, setContando] = useState(0)

  const incrementarContador = () => {
    setContando(contando + 1)
  }

  return (
    <>
      <div>
        <h1>Contando de app.jsx</h1>
        <h1>contador: {contando} </h1>
        <button onClick={incrementarContador}>Incrementar contador</button>
      </div>
    </>
  )
}

export default Contando;