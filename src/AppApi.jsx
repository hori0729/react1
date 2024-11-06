// import Posts from './apis/Posts'  
import PostsBuscador from './apis/PostBuscador';
import DragonBall from './apis/DragonBalll';
import DragonBuscador from './apis/DragonBuscador';
import DragonError from './apis/DragonBallErrores';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function AppApi() {
  return (
    <Router>
      <nav>
        <Link to="/"> Inicio </Link>
        <Link to="/postbuscador"> Buscando Post </Link>
        <Link to="/dragonball"> Dragon Ball Normal </Link>
        <Link to="/dragonballerrores"> Error Dragon Ball </Link>
        <Link to="/dragonbuscador"> Dragon Buscador </Link>
      </nav>

      <Routes>
        <Route path="/" element={<PostsBuscador />} />
        <Route path="/postbuscador" element={<PostsBuscador />} />
        <Route path="/dragonball" element={<DragonBall />} />
        <Route path="/dragonballerrores" element={<DragonError />} />
        <Route path="/dragonbuscador" element={<DragonBuscador />} />
      </Routes>
    </Router>
  );
}

export default AppApi;
