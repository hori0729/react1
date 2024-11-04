import { useState, useEffect } from "react";
import './Posts.css';

function PostsBuscador() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  // Filtrar posts según el término de búsqueda
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contenedor">
      <h1> Todos los posts creados </h1>

      {/* Campo de búsqueda */}
      <input
        type="text"
        placeholder="Buscar por título..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "20px", padding: "5px", width: "100%" }}
      />

      {selectedPost ? (
        // Mostrar solo el post seleccionado
        <div>
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.body}</p>
          <button onClick={() => setSelectedPost(null)}>Volver a la lista</button>
        </div>
      ) : (
        // Mostrar la lista filtrada de posts
        filteredPosts.map(post => (
          <ul key={post.id}>
            <li>
              <strong onClick={() => setSelectedPost(post)} style={{ cursor: "pointer" }}>
                {post.title}
              </strong>
            </li>
            <li>{post.body}</li>
          </ul>
        ))
      )}
    </div>
  );
}

export default PostsBuscador;
