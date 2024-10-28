import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './formulario.css'
function Formulario() {
  const datos_vacios = {
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  };
  const [colaborador, setColaborador] = useState(datos_vacios);
  const cambiarDatos = (e) => {
    setColaborador({ ...colaborador, [e.target.name]: e.target.value })
  }
  const enviarDatos = (e) => {
    e.preventDefault();
    setColaborador(datos_vacios);
  }

  return (
    <>
      <Form className='formulario' onClick={enviarDatos} >
        <Form.Group className="mb-3" controlId="formBasicEmail">

          <Form.Control type="text" placeholder="Nombre" name='nombre' value={colaborador.nombre} onChange={cambiarDatos} />
          <Form.Control type="email" placeholder="Correo" name='correo' value={colaborador.correo} onChange={cambiarDatos} />
          <Form.Control type="number" placeholder="Edad" name='edad' value={colaborador.edad} onChange={cambiarDatos} />
          <Form.Control type="text" placeholder="Cargo" name='cargo' value={colaborador.cargo} onChange={cambiarDatos} />
          <Form.Control type="text" placeholder="Telefono" name='telefono' value={colaborador.telefono} onChange={cambiarDatos} />


        </Form.Group>

        <Button variant="primary" type="submit">
          Agregar Colaborador
        </Button>
      </Form>
    </>
  )
}

export default Formulario;