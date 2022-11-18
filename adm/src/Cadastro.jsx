import styles from './Cadastro.module.css'

export function Cadastro() {
  return (
    <div className={styles.card}>
      <p>Preencha os dados...</p>
      <form>
        <div className={styles.campos}>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome"/>

          <label>Sexo</label>
          <div className={styles.sexoCard}>
            <span>
              <label htmlFor="m">M</label>
              <input type="radio" name="sexo" id="m" checked />
            </span>
            <span>
              <label htmlFor="f">F</label>
              <input type="radio" name="sexo" id="f" />
            </span>
          </div>
          
          <label htmlFor="idade">Idade</label>
          <input type="number" id="idade" size="1"/>

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" />

          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" />

          <footer>
            <button type="submit">
              Cadastrar
            </button>
          </footer>
        </div>
      </form>
    </div>
  )
}