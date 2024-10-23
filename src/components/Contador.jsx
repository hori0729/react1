import { useState } from "react";

function Contador() {
  console.log("Desde contador")
  // const frutas = ['pera', 'platano']
  const dato1 = 0
  const [contador, setContador] = useState(dato1);
  const [saludo, setSaludo] = useState("hola");
  return (
    <>
      <h1 >Componente contador</h1>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>

      <p>Saludo: {saludo}</p>
      <button onClick={() => setSaludo("adios")}>Cambiar saludo</button>
    </>
  )
}

export default Contador;