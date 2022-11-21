import { Routes, Route } from 'react-router-dom'

import Home from '../../pages/Home/Home'
import Perfil from '../../pages/Perfil/Perfil'
import UltimasNoticias from '../../pages/Noticias/UltimasNoticias'
import Guia from '../../pages/Guia/Guia';
import Chat from '../../pages/Chat/Chat';
import Login from '../../pages/Login/Login';

import NavBar from '../../components/MainMenu/NavBar';
import Footer from '../../components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="noticias" element={<UltimasNoticias />} />
        <Route path="guia" element={<Guia />} />
        <Route path="chat" element={<Chat />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
