function Menu() {
    return (
        <nav className="App-menu">
            <div className="App-menu-logo">
                <img src={require('../../logoMenu.svg').default} alt='Devuei Logo Menu' />
            </div>
            <div className="App-menu-right">
                <img src={require('../../iconSearch.svg').default} alt='Search icon' />
                <img src={require('../../iconMenu.svg').default} alt='Menu icon' />
            </div>
        </nav>
    )
}

export default Menu