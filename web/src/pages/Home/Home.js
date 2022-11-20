import Card from "../../components/Card/Card"

import './Home.scss';

function Home() {

    return (
        <div className="Home">
            <header className="App-header">
                <img src={require('../../static/devuei.svg').default} alt='Trail icon' />
            </header>
            <main className="App-main">
                <section className="App-goals">
                    <div className="App-h2">
                        <h2 class="App-title">Nosso objetivo é...</h2>
                    </div>
                    <Card />
                </section>
            </main>

            <section className="App-about">
                <article className="App-box">
                    <h2 className="App-box-title">Sobre</h2>
                    <p className="App-box-text">
                        O Devuei é uma plataforma focada em guiar devs iniciantes de forma divertida e acolhedora.
                        <br />
                        Fundada pelo grupo 5Minds, com o objetivo de motivar estudantes de programação facilitando a tomada de decisão sobre qual trilha seguir.
                    </p>
                </article>
                <img className="App-img" src={require('../../static/devueiAbout.svg').default} alt='Trail icon' />
            </section>

            <section className="App-call-action">
                <div className="App-call">
                <h3 className="App-call-text">Entenda melhor sobre o mundo DEV, faça parte do <span className="text-logo">[)evuei!</span></h3>
                <button className="App-call-btn">Começar</button>
                </div>
                <figure className="App-call-img">
                    <img stye="" src={require('../../static/imgMundoDev.svg').default} alt='Trail icon' />
                </figure>
            </section>
        </div>
    );
}

export default Home;