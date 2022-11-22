import { Routes, Route } from 'react-router-dom'

import Home from '../../pages/Home/Home'
import Perfil from '../../pages/Perfil/Perfil'
import UltimasNoticias from '../../pages/Noticias/UltimasNoticias'
import Guia from '../../pages/Guia/Guia';
import Chat from '../../pages/Chat/Chat';
import Login from '../../pages/Login/Login';
import Feed from '../../pages/Feed/Feed';

import NavBar from '../../components/MainMenu/NavBar';
import Footer from '../../components/Footer/Footer';
import Cadastro from '../../pages/Cadastro/Cadastro';
import Artigo from '../../pages/Artigos/Artigo';

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
        <Route path="feed" element={<Feed />} />
        <Route path="chat" element={<Chat />} />
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="artigo" element={<Artigo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
