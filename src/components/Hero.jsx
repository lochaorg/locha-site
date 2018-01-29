import React from 'react';
import '../styles/Hero.css';

const Hero = () => (
  <section className="Hero">
    <div className="row-container Hero-main">
      <h1 className="Hero-title z-index-3">
        Una moneda alternativa al Bolívar, sin el control del Gobierno.
      </h1>
      <p className="Hero-description z-index-3">
        Locha es una criptomoneda creada por Venezolanos para Venezolanos.
        Transacciones en menos de 15 segundos. Ingresa tu correo y conoce más sobre Locha
      </p>
      <div id="mc_embed_signup">
        <form
          action="https://lochacoin.us17.list-manage.com/subscribe/post?u=c2f63130b4348f9208a82b86e&amp;id=b7ddf2ba89"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate Hero-form z-index-3"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll" className="z-index-3">
        	  <input
              type="email"
              name="EMAIL"
              className="Hero-input z-index-3"
              id="mce-EMAIL"
              placeholder="Email"
              required
            />
            <div
              style={{
                position: 'absolute',
                left: '-5000px',
              }}
              aria-hidden="true"
            >
              <input type="text" name="b_c2f63130b4348f9208a82b86e_b7ddf2ba89" tabIndex="-1" value="" />
            </div>
            <div className="clear">
              <input
                type="submit"
                value="Notifícame"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="Hero-submit"
              />
            </div>
          </div>
        </form>
      </div>

      {/* <!--End mc_embed_signup-->
      <form className="Hero-form z-index-3">
        <input type="email" className="Hero-input z-index-3" placeholder="Email" required />
        <input type="submit" className="Hero-submit z-index-3" value="Notifícame" />
      </form> */}
    </div>
  </section>
);

export default Hero;
