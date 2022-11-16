import './Home.css';

function Home() {
    return (
        <div>
            <main className="App-main">

                <section className="App-goals">
                    <div className="App-h2">
                        <h2 class="App-title">Nosso objetivo é...</h2>
                    </div>
                    <article class="App-box App-box-1">
                        <figure className="App-box-icon">
                            <img src={require('../../iconTrail.svg').default} alt='Trail icon' />
                        </figure>
                        <p className="App-box-text">Guiar Devs iniciantes mostrando tudo o que precisa para a trilha desejada.</p>
                    </article>
                    <article class="App-box App-box-2">
                        <figure className="App-box-icon">
                            <img src={require('../../iconTrail.svg').default} alt='Trail icon' />
                        </figure>
                        <p className="App-box-text">Guiar Devs iniciantes mostrando tudo o que precisa para a trilha desejada.</p>
                    </article>
                    <article class="App-box App-box-3">
                        <figure className="App-box-icon">
                            <img src={require('../../iconTrail.svg').default} alt='Trail icon' />
                        </figure>
                        <p className="App-box-text">Guiar Devs iniciantes mostrando tudo o que precisa para a trilha desejada.</p>
                    </article>
                </section>
            </main>

            <section className="App-about">
                <article className="App-box App-box-4">
                    <div>
                        <h2 className="App-box-title">Sobre</h2>
                    </div>
                    <p className="App-box-text">
                        O Devuei é uma plataforma focada em guiar devs iniciantes de forma divertida e acolhedora.
                        <br />
                        Fundada pelo grupo 5Minds, com o objetivo de motivar estudantes de programação facilitando a tomada de decisão sobre qual trilha seguir.
                    </p>
                </article>
                <figure className="App-box-5">
                    <img stye="width:725px;height:351px;" src={require('../../devueiAbout.svg').default} alt='Trail icon' />
                </figure>
            </section>

            <section className="App-call-action">
                <h3 className="App-call-text">Entenda melhor sobre o mundo DEV, faça parte do <span className="text-logo">[)evuei!</span></h3>
                <button className="App-call-btn">Começar</button>
                <figure className="App-call-img">
                    <img stye="" src={require('../../imgMundoDev.svg').default} alt='Trail icon' />
                </figure>
            </section>

        </div>
    )
}

export default Home