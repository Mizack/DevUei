import './Perfil.scss';

function Perfil() {
  return (
    <div className="Perfil">
      <div className='usuario'>
        <div className='header'>
          <div className='avatar'>
            <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="150" height="150" rx="75" fill="#A29A9A" />
              <path d="M75.75 79.875C75.252 79.8125 74.748 79.8125 74.25 79.875C68.9497 79.6966 63.9262 77.4649 60.2409 73.6513C56.5556 69.8377 54.497 64.7409 54.5 59.4375C54.5 48.125 63.625 38.9375 75 38.9375C80.3715 38.9282 85.5315 41.0301 89.3677 44.79C93.2038 48.55 95.4087 53.6668 95.5071 59.0374C95.6055 64.4081 93.5895 69.6022 89.8936 73.5002C86.1978 77.3981 81.1182 79.6876 75.75 79.875V79.875ZM117.125 121.125C105.639 131.682 90.6002 137.528 75 137.5C58.75 137.5 44 131.313 32.875 121.125C33.5 115.25 37.25 109.5 43.9375 105C61.0625 93.625 89.0625 93.625 106.062 105C112.75 109.5 116.5 115.25 117.125 121.125V121.125Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M75 137.5C109.519 137.5 137.5 109.519 137.5 75C137.5 40.4813 109.519 12.5 75 12.5C40.4813 12.5 12.5 40.4813 12.5 75C12.5 109.519 40.4813 137.5 75 137.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div className='username'>Nome do usuário</div>
        </div>
        <div className='clear'></div>
        <ul>
          <li>Idade</li>
          <li>email@email.com</li>
          <li>Sobre</li>
        </ul>
      </div>
      <div className='feed'>
        <div className='post'>
          <p>Depois de 5 anos de muito estudo e trabalho enfim conquistei o emprego dos sonhos. Não desista!</p>
          <img src={require('../../static/feed.svg').default} alt='Feed' />
        </div>
      </div>
    </div>
  );
}

export default Perfil;