/* eslint-disable react/prop-types */
import { useState } from "react";
import './Formulario.css'

function Formulario({ agregarColaborador }) {
  const datos_iniciales = {
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
  }
  const [colaborador, setColaborador] = useState(datos_iniciales);

  const cambiandoDatos = (e) => {
    setColaborador({ ...colaborador, [e.target.name]: [e.target.value] })
  }
  const enviarDatos = (e) => {
    e.preventDefault();
    agregarColaborador(colaborador);
    setColaborador(datos_iniciales);
  }

  return (
    <>
      <form className="formulario" action="" onSubmit={enviarDatos} >
        <h1>Hola mundo</h1>
        <input className="input1" type="text" placeholder="nombre" name="nombre" value={colaborador.nombre} onChange={cambiandoDatos} />
        <input className="input1" type="text" placeholder="correo" name="correo" value={colaborador.correo} onChange={cambiandoDatos} />
        <input className="input1" type="text" placeholder="edad" name="edad" value={colaborador.edad} onChange={cambiandoDatos} />
        <input className="input1" type="text" placeholder="cargo" name="cargo" value={colaborador.cargo} onChange={cambiandoDatos} />
        <input className="input1" type="text" placeholder="telefono" name="telefono" value={colaborador.telefono} onChange={cambiandoDatos} />
        <input className="inputenvio" type="submit" value="enviar" />
      </form>
    </>
  )
}

export default Formulario;