import './UltimasNoticias.scss';

function Noticias(img, text) {
    let noticias = [
        {
            img: require('../../static/feed.svg').default,
            title: 'Esse é o título da notícia',
            text: 'Guiar Devs iniciantes mostrando tudo o que precisa para a trilha desejada.'
        },
        {
            img: require('../../static/feed.svg').default,
            title: 'Esse é o título da notícia',
            text: 'Mostrar que ninguém está nessa sozinho compartilhando suas experiências e dicas.'
        },
        {
            img: require('../../static/feed.svg').default,
            title: 'Esse é o título da notícia',
            text: 'Descomplicar as horas de busca unindo tudo em um só site com linguagem de fácil entendimento.'
        },
        {
            img: require('../../static/feed.svg').default,
            title: 'Esse é o título da notícia',
            text: 'Guiar Devs iniciantes mostrando tudo o que precisa para a trilha desejada.'
        },
        {
            img: require('../../static/feed.svg').default,
            title: 'Esse é o título da notícia',
            text: 'Mostrar que ninguém está nessa sozinho compartilhando suas experiências e dicas.'
        },
        {
            img: require('../../static/feed.svg').default,
            title: 'Esse é o título da notícia',
            text: 'Descomplicar as horas de busca unindo tudo em um só site com linguagem de fácil entendimento.'
        },
        
    ]
    return (
        <div className='Noticias'>
            {noticias.map(a => (
                <article className="Noticia">
                    <img src={a.img} alt='' />
                    <h4>{a.title}</h4>
                    <p>{a.text}</p>
                </article>
            ))}
        </div>
    )
}

export default Noticias;