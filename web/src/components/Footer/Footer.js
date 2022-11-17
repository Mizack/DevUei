import './Footer.css'

function Footer() {
    return (
        <footer className="App-footer">
            <figure className="App-footer-logo">
                <img stye="" src={require('../../devuei_2.svg').default} alt='Trail icon' />
            </figure>
            <div className='contentFooter'>
                <h3>Contato</h3>
                <img stye="" src={require('../../devuei_2.svg').default} alt='Trail icon' /> devuei@gmail.com
                <img stye="" src={require('../../devuei_2.svg').default} alt='Trail icon' /> @Devuei
            </div>
            <div className='contentFooter'>
                <h3>Contato</h3>
                <img stye="" src={require('../../devuei_2.svg').default} alt='Trail icon' /> devuei@gmail.com
                <img stye="" src={require('../../devuei_2.svg').default} alt='Trail icon' /> @Devuei
            </div>
            © Equipe 5Minds
        </footer>
    )
}

export default Footer