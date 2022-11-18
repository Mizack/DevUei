import styles from './App.module.css'
import { Cadastro } from './Cadastro'

export function App() {
  return (
    <div className={styles.teste}>
      <header className={styles.header}>
        &#91;&#41;
      </header>
      <Cadastro />
      {/* <div className={styles.App}>
        <span className={styles.logo}>&#91;&#41;EVUEI</span>
        <form>
          <section className={styles.loginCard}>
            <p>Login</p>
            <div>
              <input type="email" placeholder='Digite seu e-mail...'/>
              <input type="password" placeholder='Digite sua senha...'/>
            </div>
            <footer>
              <button type="submit">
                Entrar
              </button>
              <a href='#'>Cadastre-se</a>
            </footer>
          </section>
        </form>
      </div> */}
    </div>
  )
}