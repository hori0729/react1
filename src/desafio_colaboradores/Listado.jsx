/* eslint-disable react/prop-types */
import Table from 'react-bootstrap/Table';
function Listado({ colaboradores }) {

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {
            colaboradores.map(
              (c) => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.nombre}</td>
                  <td>{c.correo}</td>
                  <td>{c.edad}</td>
                  <td>{c.cargo}</td>
                  <td>{c.telefono}</td>
                </tr>

              )
            )
          }


        </tbody>
      </Table>
    </>
  )
}

export default Listado;