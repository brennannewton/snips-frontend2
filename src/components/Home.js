import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <body>
        <main>
          <section id="hero">
            <h1>✂️ Snips ✂️</h1>
            <h2>
              The slickest, fastest way to save and share your code snippets.
            </h2>
          </section>
          <section>
            <div className="info-block">
              <img
                src="https://ckeditor.com/cke4/sites/default/files/styles/large/public/codesnippet/codesnippet_05.png?itok=a72BnV1N"
                alt="Snip 1"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                repudiandae dolor maxime libero, autem veniam non ea porro
                quisquam maiores itaque hic, ut quod doloremque ipsum quis
                mollitia magni esse?
              </p>
            </div>
            <div className="info-block">
              <img src={require('../img/snip-2.png')} alt="Snip 2" />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                voluptate fugiat, omnis illo incidunt quis accusamus sint quam
                tempora, amet odio, placeat eligendi corrupti debitis recusandae
                dolores? Eius, totam recusandae.
              </p>
            </div>
            <div className="info-block">
              <img
                src={require('../img/python-tweets-code-snippet.png')}
                alt="Snip 3"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                itaque nobis tenetur excepturi qui maiores eaque aspernatur fuga
                blanditiis saepe pariatur consequuntur obcaecati maxime at
                inventore, quo aperiam id ut.
              </p>
            </div>
          </section>
          <section id="competitors">
            <h2>Competitors</h2>
            <div className="icon-container">
              <a target="_blank" href="https://stackoverflow.com/">
                <img
                  className="competitor"
                  src={require('../img/stack-overflow-logo.png')}
                  alt="Colored StackOverflow logo"
                />
              </a>
              <a target="_blank" href="https://wesbos.com/">
                <img
                  className="competitor"
                  src={require('../img/wes-bos-logo.png')}
                  alt="Colored Wes Bos logo"
                />
              </a>
              <a target="_blank" href="https://codepen.io/">
                <img
                  className="competitor"
                  src={require('../img/codepen-logo.png')}
                  alt="Black and white Codepen logo"
                />
              </a>
              <a target="_blank" href="https://dribbble.com/">
                <img
                  className="competitor"
                  src={require('../img/dribbble-icon.png')}
                  alt="Black and white dribble icon"
                />
              </a>
            </div>
          </section>
        </main>
        <footer>
          <a id="tp-link" href="https://talentpath.com">
            Talent Path
          </a>
          <span>© 2019</span>
          <a href="mailto: xyz@genuent.com">Email Corporate</a>
        </footer>
      </body>
    );
  }
}
