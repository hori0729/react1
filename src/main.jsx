import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import AppApi from './AppApi.jsx'
// import App2 from './App2.jsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppApi />

    {/* <App2 /> */}

  </StrictMode>
)
