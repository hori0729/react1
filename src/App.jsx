import Hola from "./components/Hola"
import Foo from "./components/Footer"
import Contador from "./components/Contador"
import './App.css'
import Tareas from "./components/Tareas"
import Contando2 from "./components/Contando2"
import Header from "./store/Header"
function App() {

  return (
    <>
      <Header />
      <Hola ></Hola>
      <Contador />
      <Contando2 />
      <Tareas />
      <Tareas />
      <Foo></Foo>
    </>
  )
}

export default App
