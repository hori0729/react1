import Formulario from './desafio_colaboradores/Formulario'
import Listado from './desafio_colaboradores/Listado';
import colaboradores from './desafio_colaboradores/datos/BaseColaboradores'
// va importar alert y buscador - Victor
function App2() {
  const alumnos = ['gabriel', 'hector', 'joaquin', 'ramon', 'vicente']
  return (
    <>
      <Formulario />
      <Listado colaboradores={colaboradores} alumnos={alumnos} />

    </>
  )
}

export default App2;