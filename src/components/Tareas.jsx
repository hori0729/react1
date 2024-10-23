/* eslint-disable no-unused-vars */
// vamor hacer componente crud para agregar datos 
import React, { useState } from 'react';

const GestorDeTareas = () => {
  const alumnos = ["Gabriel", "Hector", "Joaquin", "Ramon", "Vicente", "Victor"]
  const [tareas, setTareas] = useState([]);
  const [tareaAEditar, setTareaAEditar] = useState(null);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const manejarEnvioFormulario = (evento) => {
    evento.preventDefault();
    const tareaFormateada = nuevaTarea.trim();

    if (!tareaFormateada) return;

    setTareas((prev) => {
      const tareaExistente = prev.find((t) => t.nombre === tareaFormateada);
      return tareaExistente
        ? prev.map((t) => t.nombre === tareaFormateada ? { ...t, conteo: t.conteo + 1 } : t)
        : [...prev, { nombre: tareaFormateada, conteo: 1 }];
    });

    setNuevaTarea('');
  };

  const eliminarTarea = (indice) => setTareas((prev) => prev.filter((_, i) => i !== indice));

  const iniciarEdicion = (indice) => {
    setTareaAEditar(indice);
    setNuevaTarea(tareas[indice].nombre);
  };

  const confirmarEdicion = (evento) => {
    evento.preventDefault();
    const tareaFormateada = nuevaTarea.trim();

    if (tareaFormateada && tareaAEditar !== null) {
      setTareas((prev) => prev.map((t, i) => i === tareaAEditar ? { ...t, nombre: tareaFormateada } : t));
      setTareaAEditar(null);
      setNuevaTarea('');
    }
  };

  return (
    <div>
      <h1>Gestión de Tareas</h1>
      <form onSubmit={tareaAEditar !== null ? confirmarEdicion : manejarEnvioFormulario}>
        <input
          type="text"
          placeholder="Agregar nueva tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button type="submit">{tareaAEditar !== null ? 'Editar Tarea' : 'Agregar Tarea'}</button>
      </form>
      <ul>
        {tareas.map((tarea, indice) => (
          <li key={indice}>
            {tarea.nombre} (Cantidad: {tarea.conteo})
            <button onClick={() => iniciarEdicion(indice)}>Editar</button>
            <button onClick={() => eliminarTarea(indice)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GestorDeTareas;
