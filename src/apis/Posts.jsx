import { useState, useEffect } from "react";
import './Posts.css'
function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(responder => responder.json())
      .then(dato => setPosts(dato))
  }, [])


  return (
    <>
      <div className="contenedor">
        <h1> Todos los posts creados </h1>
        {
          posts.map(
            pos => (
              <ul key={pos.id} >
                <li> {pos.title} </li>
                <li>{pos.body} </li>
              </ul>
            )
          )
        }
      </div>
    </>
  )
}

export default Posts;
