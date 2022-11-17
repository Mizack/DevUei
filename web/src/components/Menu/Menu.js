import { Fade as Hamburger } from 'hamburger-react'

function MainMenu() {
    return (
        <nav className="App-menu">
            <div className="App-menu-logo">
                <img src={require('../../logoMenu.svg').default} alt='Devuei Logo Menu' />
            </div>
            <div className="App-menu-right">
                <Hamburger size={20} />
            </div>
        </nav>
    )
}

export default MainMenu