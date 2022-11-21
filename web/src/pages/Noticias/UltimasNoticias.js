import Noticias from './Noticias';

import './UltimasNoticias.scss';

function UltimasNoticias() {
  return (
    <section className="UltimasNoticias">
      <div className='title'>
        <h2>Notícias</h2>
        <h3>---------- T.I. ----------</h3>
      </div>

      <Noticias />
    </section>
  );
}

export default UltimasNoticias;