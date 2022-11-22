import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Cadastro.scss';

function Cadastro() {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [sexo, setSexo] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleChange = (event) => {
        setSexo(event.target.value)
    }
    return (
        <section className="Cadastro">
            <div className="box">
                <h3>Preencha os dados...</h3>
                <form>
                    <fieldset className='nome'>
                        <label>Nome</label>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </fieldset>
                    <fieldset className='idade'>
                        <label>Idade</label>
                        <input
                            type="number"
                            value={idade}
                            onChange={(e) => setIdade(e.target.value)}
                        />
                    </fieldset>
                    <fieldset className='sexo'>
                        <label>Sexo</label>
                        <select value={sexo} onChange={handleChange}>
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                        </select>
                    </fieldset>
                    <fieldset className='email'>
                        <label>E-mail</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </fieldset>
                    <fieldset className='senha'>
                        <label>Senha</label>
                        <input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </fieldset>
                </form>
                <div className='buttons'>
                    <button>Finalizar</button>
                    <p>Já tem conta no Devuei?</p>
                    <Link to="/login"><button>Faça login</button></Link>
                </div>

            </div>
        </section>
    )
}
export default Cadastro;