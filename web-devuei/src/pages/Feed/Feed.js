import React, { useState } from 'react'

import './Feed.scss'

function Feed() {
  const [post, setPost] = useState("")
  const feed = [
    {
      avatar: require('../../static/feed.svg').default,
      name: 'Jay Carter',
      text: 'Dica para quem quer seguir carreira de Front-end, mas não tem grana: Tem ótimos cursos gratuitos no YouTube! Comecem com HTML, CSS e JavaScript',
      img: require('../../static/feed2.svg').default,
    },
    {
      avatar: require('../../static/feed.svg').default,
      name: 'Rui Avaron',
      text: 'Primeiro dia como Dev Fullstack! Não foi um caminho fácil, mas não devemos desistir. Uma hora você chega lá!',
      img: require('../../static/feed.svg').default,
    },
    {
      avatar: require('../../static/feed.svg').default,
      name: 'Jay Carter',
      text: 'Fala Dev! Sou programador Back-End a 4 anos. Nas horas vagas posso ajudar nas dúvidas de vocês, não tenham vergonha.',
      img: '',
    }
  ]
  return (
    <section className="Feed">
      <form>
        <textarea
          type="text"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        ></textarea>
      <button type="">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.625 1.75H13.875C4.5 1.75 0.75 5.5 0.75 14.875V26.125C0.75 35.5 4.5 39.25 13.875 39.25H25.125C34.5 39.25 38.25 35.5 38.25 26.125V22.375" stroke="#282A36" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.075 3.66261L12.3 18.4376C11.7375 19.0001 11.175 20.1064 11.0625 20.9126L10.2563 26.5564C9.95627 28.6001 11.4 30.0251 13.4438 29.7439L19.0875 28.9376C19.875 28.8251 20.9813 28.2626 21.5625 27.7001L36.3375 12.9251C38.8875 10.3751 40.0875 7.41261 36.3375 3.66261C32.5875 -0.0873925 29.625 1.11261 27.075 3.66261V3.66261Z" stroke="#282A36" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </button>
        </form>
      {feed.map(a => (
        <article className="post">
          <div className="user">
            <div className="avatar" style={{ backgroundImage: a.avatar }}></div>
            <div className="name">{a.name}</div>
          </div>
          <div className="content">
            <p>{a.text}</p>
            <figure className="image">
              <img src={a.img} alt='' />
            </figure>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Feed