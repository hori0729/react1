// import Posts from './apis/Posts'
import PostsBuscador from './apis/PostBuscador';
import DragonBall from './apis/DragonBalll';
import DragonBuscador from './apis/DragonBuscador';
import DragonError from './apis/DragonBallErrores'
function AppApi() {

  return (
    <>
      <DragonError />
      <DragonBuscador />
      <DragonBall />
      <PostsBuscador />


    </>
  )

}
export default AppApi;