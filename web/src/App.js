import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Perfil from './pages/Perfil/Perfil'

import NavBar from './components/MainMenu/NavBar';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={ <Home /> } />
        <Route path="perfil" element={ <Perfil /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
