import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Login.scss';

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  
  return (
    <div className="Login">
      <img src={require('../../static/logoDevuei.svg').default} alt='Trail icon' />
      <div className="box">
        <h2>Login</h2>
        <form>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail..."
          />
          <input
            type="text"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha..."
          />
        </form>
        <div className='buttons'>
          <button style={{backgroundColor: '#50FA7B'}}>Entrar</button>
          <Link to="/cadastro"><button style={{backgroundColor: '#6272A4', border: 'solid 2px #50FA7B'}}>Cadastre-se</button></Link>
        </div>
      </div>

    </div>
  );
}

export default Login;