/* eslint-disable no-unused-vars */
import BaseColaboradores from './desafoColab/Basecolab'
import Listado from './desafoColab/Listado'
// import Formulario from './desafio_render/Formulario'
import FormBootstrap from './desafio_render/Form'
import Buscador from './desafio_render/Buscador'
import Alert from './desafio_render/Alert'
import { useState, useEffect } from 'react'
import './App.css'
function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState(BaseColaboradores); // Estado para colaboradores filtrados
  const [mensaje, setMensaje] = useState('');
  const [colaboradorEditando, setColaboradorEditando] = useState(null);
  const [esAdmin, setEsAdmin] = useState(false); // Cambiar a true si el usuario es administrador


  // agregando un colaborador 
  const agregarColaborador = (nuevoColaborador) => {
    if (Object.values(nuevoColaborador).some((campo) => campo === '')) {
      setMensaje({ tipo: 'danger', texto: 'Todos los campos son obligatorios' });
      return;
    }

    // Obtener el último id en la lista y sumar 1, si no hay colaboradores, empezar en 1
    const ultimoId = colaboradores.length > 0 ? parseInt(colaboradores[colaboradores.length - 1].id) : 0;
    const nuevoId = (ultimoId + 1).toString();

    // Crear el nuevo colaborador con el id secuencial
    const colaboradorConId = { id: nuevoId, ...nuevoColaborador };

    // Actualizar tanto colaboradores como colaboradoresFiltrados
    setColaboradores((prevColaboradores) => [...prevColaboradores, colaboradorConId]);
    setColaboradoresFiltrados((prevColaboradoresFiltrados) => [...prevColaboradoresFiltrados, colaboradorConId]);

    setMensaje({ tipo: 'success', texto: 'Colaborador agregado correctamente' });
  };

  // buscando un colaborador
  const buscarColaborador = (filtro) => {
    if (filtro === '') {
      // Si el filtro está vacío, restaurar la lista completa
      setColaboradoresFiltrados(colaboradores);
    } else {
      const filtrando = colaboradores.filter(
        (e) => Object.values(e).some(valor => valor.toLowerCase().includes(filtro.toLowerCase()))
      );
      setColaboradoresFiltrados(filtrando);
    }
  };


  const eliminarColaborador = (id) => {
    console.log('Antes de eliminar:', colaboradores);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(nuevosColaboradores);
    setColaboradoresFiltrados(nuevosColaboradores);
    console.log('Después de eliminar:', nuevosColaboradores);
  };



  // Función para editar un colaborador (simplificada aquí)
  const actualizarColaborador = (colaboradorActualizado) => {
    // Actualizar colaboradores
    setColaboradores((prevColaboradores) =>
      prevColaboradores.map((colaborador) =>
        colaborador.id === colaboradorActualizado.id ? colaboradorActualizado : colaborador
      )
    );

    // Actualizar colaboradoresFiltrados
    setColaboradoresFiltrados((prevColaboradoresFiltrados) =>
      prevColaboradoresFiltrados.map((colaborador) =>
        colaborador.id === colaboradorActualizado.id ? colaboradorActualizado : colaborador
      )
    );
    setMensaje({ tipo: 'success', texto: 'Colaborador actualizado correctamente' });
    setColaboradorEditando(null);
  };
  useEffect(() => {
    setColaboradoresFiltrados(colaboradores);
  }, [colaboradores]); // Esto se ejecutará cada vez que cambie el estado de colaboradores




  return (
    <>
      <div className="container">
        <h1>Gestión de colaboradores</h1>
        <div className="row">
          {/* Columna para el formulario (1/4) */}
          <div className="col-md-3">
            <FormBootstrap
              agregarColaborador={agregarColaborador}
              actualizarColaborador={actualizarColaborador}
              colaboradorEditando={colaboradorEditando}
            />
          </div>

          {/* Columna para el listado (3/4) */}
          <div className="col-md-9">
            {mensaje && <Alert mensaje={mensaje} />}
            <Buscador buscarColaborador={buscarColaborador} />
            <Listado
              colaboradoresFiltrados={colaboradoresFiltrados}
              colaboradores={colaboradores}
              esAdmin={true}
              eliminarColaborador={eliminarColaborador}
              setColaboradorEditando={setColaboradorEditando}
            />
          </div>
        </div>
      </div>



    </>
  )
}

export default App
