import { useState, useEffect } from "react";
import './Posts.css';

function DragonBuscador() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters?limit=30')
      .then(res => res.json())
      .then(data => setPosts(data.items))
      .catch(error => console.error("Error fetching data: ", error));
  }, []);

  // Filtrar personajes según el término de búsqueda
  const filteredPosts = posts.filter(post =>
    post.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contenedor">
      <h1>Personajes de Dragon Ball</h1>

      {/* Campo de búsqueda */}
      <input
        type="text"
        placeholder="Buscar personaje por nombre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "20px", padding: "5px", width: "100%" }}
      />

      {selectedCharacter ? (
        // Mostrar solo el personaje seleccionado
        <div>
          <h2>Nombre: {selectedCharacter.name}</h2>
          <p>Descripción: {selectedCharacter.description}</p>
          <p>Raza: {selectedCharacter.race}</p>
          <p>Género: {selectedCharacter.gender}</p>
          <img src={selectedCharacter.image} alt={selectedCharacter.name} style={{ width: "200px" }} />
          <button onClick={() => setSelectedCharacter(null)} style={{ marginTop: "10px" }}>
            Volver a la lista
          </button>
        </div>
      ) : (
        // Mostrar la lista filtrada de personajes
        filteredPosts.map(post => (
          <ul key={post.id} style={{ cursor: "pointer" }} onClick={() => setSelectedCharacter(post)}>
            <li>Nombre: {post.name}</li>
            <li>Descripción: {post.description}</li>
            <li>Raza: {post.race}</li>
            <li>Género: {post.gender}</li>
            <img src={post.image} alt={post.name} style={{ width: "100px" }} />
          </ul>
        ))
      )}
    </div>
  );
}

export default DragonBuscador;
