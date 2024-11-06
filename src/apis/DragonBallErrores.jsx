import { useState, useEffect } from "react";
import './Posts.css';

function DragonBuscador() {
  const [posts, setPosts] = useState([]); // Almacena los personajes de la API
  const [searchTerm, setSearchTerm] = useState(""); // Controla el término de búsqueda
  const [selectedCharacter, setSelectedCharacter] = useState(null); // Personaje seleccionado
  const [loading, setLoading] = useState(true); // Indicador de carga
  const [error, setError] = useState(null); // Estado de error

  // Fetch usando async/await con manejo de errores
  const fetchWithAsync = async () => {
    setLoading(true);
    setError(null);

    try {
      // Cambia la URL para provocar el error
      const response = await fetch('https://dragonball-api.com/api/characters?limit=5');
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      setPosts(data.items);
    } catch (err) {
      setError(`No se pudo cargar los datos: ${err.message}`);
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWithAsync(); // Usando async/await para la solicitud
  }, []);

  // Filtrar personajes según el término de búsqueda
  const filteredPosts = posts.filter(post =>
    post.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mostrar mensajes de carga o error
  if (loading) return <p>Cargando personajes...</p>;
  if (error) return <p style={{ color: "red", fontWeight: "bold" }}>Error al cargar personajes: {error}</p>;

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
            <li><strong>Nombre:</strong> {post.name}</li>
            <li><strong>Descripción:</strong> {post.description}</li>
            <li><strong>Raza:</strong> {post.race}</li>
            <li><strong>Género:</strong> {post.gender}</li>
            <li><img src={post.image} alt={post.name} style={{ width: "100px" }} /></li>
          </ul>
        ))
      )}
    </div>
  );
}

export default DragonBuscador;
