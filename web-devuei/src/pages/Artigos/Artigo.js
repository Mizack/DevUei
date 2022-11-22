import React, { useState } from 'react'

import './Artigo.scss'

function Artigo() {
    const [post, setPost] = useState("");
    return (
        <section className="Artigo">
            <div className='conteudo'>
                <h1>GUIA: Front-end, Back-end ou Banco de dados?</h1>
                <h2>Front-End</h2>
                <p>Desenvolvimento web front-end é o desenvolvimento da interface gráfica do usuário de um site, através do uso de HTML, CSS e JavaScript, para que os usuários possam visualizar e interagir com esse site.</p>
                <h2>Back-End</h2>
                <p>O back-end é a área que armazena os dados sendo consumidos ou manipulados por aplicativos ou softwares.</p>
                <h2>Banco de Dados</h2>
                <p>Um banco de dados é uma coleção organizada de informações - ou dados - estruturadas, normalmente armazenadas eletronicamente em um sistema de computador. Um banco de dados é geralmente controlado por um sistema de gerenciamento de banco de dados (DBMS).</p>
            </div>
            <div className='ArtigoFooter'>
                <div className="box comentarios">
                    <h3 className="title">Comentários</h3>
                    <div className="comentario">
                        <div className="user">
                            <div className="avatar">
                                <img src={require('../../assets/jefferson.jpg')} alt='' />
                            </div>
                        </div>
                        <div className="content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <div className="comentario">
                        <div className="user">
                            <div className="avatar">
                                <img src={require('../../assets/rafael.jpeg').default} alt='' />
                            </div>
                        </div>
                        <div className="content">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        </div>
                    </div>
                    <div className='comentar'>
                        <input
                            type="text"
                            value={post}
                            onChange={(e) => setPost(e.target.value)}
                            placeholder="Digite seu coentário..."
                        />
                        <button>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.625 1.75H13.875C4.5 1.75 0.75 5.5 0.75 14.875V26.125C0.75 35.5 4.5 39.25 13.875 39.25H25.125C34.5 39.25 38.25 35.5 38.25 26.125V22.375" stroke="#282A36" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M27.075 3.66261L12.3 18.4376C11.7375 19.0001 11.175 20.1064 11.0625 20.9126L10.2563 26.5564C9.95627 28.6001 11.4 30.0251 13.4438 29.7439L19.0875 28.9376C19.875 28.8251 20.9813 28.2626 21.5625 27.7001L36.3375 12.9251C38.8875 10.3751 40.0875 7.41261 36.3375 3.66261C32.5875 -0.0873925 29.625 1.11261 27.075 3.66261V3.66261Z" stroke="#282A36" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="box relacionados">
                    <h3 className="title" style={{ marginBottom: '40px' }}>Quer ser um Dev...</h3>
                    <div className="relacionado" style={{ backgroundColor: '#F1FA8C' }}>
                        Front-End
                    </div>
                    <div className="relacionado" style={{ backgroundColor: '#FFB86C' }}>
                        Back-End
                    </div>
                    <div className="relacionado" style={{ backgroundColor: '#FF5555' }}>
                        Banco de Dados
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Artigo