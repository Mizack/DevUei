import styles from './App.module.css'

export function App() {
  return (
    <>
      <header className={styles.header}>
        &#91;&#41;
      </header>
      <div className={styles.App}>
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
            </footer>
          </section>
        </form>
      </div>
    </>
  )
}