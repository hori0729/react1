import { useState, useEffect } from "react";
import './Posts.css'
function DragonBall() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters?limit=30')
      .then(responder => responder.json())
      .then(dato => setPosts(dato.items))
      .catch(error => console.error("Error fetching data: ", error)); // Manejo de errores opcional

  }, [])


  return (
    <>
      <div className="contenedor">
        <h1> Todos los posts creados </h1>
        {
          posts.map(
            pos => (
              <ul key={pos.id} >
                <li>Nombre: {pos.name}</li>
                <li>Descripción: {pos.description}</li>
                <li>Raza: {pos.race}</li>
                <li>Género: {pos.gender}</li>
                <img src={pos.image} alt={`${pos.name}`} />
              </ul>
            )
          )
        }
      </div>
    </>
  )
}

export default DragonBall;
