import './Card.scss'

function Card(img, text) {
    let about = [
        {
            img: require('../../static/iconTrail.svg').default,
            text: 'Guiar Devs iniciantes mostrando tudo o que precisa para a trilha desejada.'
        },
        {
            img: require('../../static/iconComment.svg').default,
            text: 'Mostrar que ninguém está nessa sozinho compartilhando suas experiências e dicas.'
        },
        {
            img: require('../../static/iconSearch2.svg').default,
            text: 'Descomplicar as horas de busca unindo tudo em um só site com linguagem de fácil entendimento.'
        },
    ]
    return (
        <div className='Cards'>
            {about.map(a => (
                <article className="Card">
                    <img src={a.img} alt='' />
                    <p>{a.text}</p>
                </article>
            ))}
        </div>
    )
}

export default Card;
