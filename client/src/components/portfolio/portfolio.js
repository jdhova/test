import React from 'react'

export default function portfolio() {
  return (
    <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Check Out Some of My Projects.</h1>
        {/* portfolio-wrapper */}
        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-01" title>
                <img alt src="images/portfolio/expforum.png" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Expert Forum</h5>
                    <p>React/ Redux Node.js</p>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-02" title>
                <img alt src="images/calc.png" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Calc</h5>
                    <p>Web Development</p>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-03" title>
                <img alt src="images/shopping.png" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Mini Shopping Cart</h5>
                    <p>React Wed Development</p>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-04" title>
                <img alt src="images/movie.png" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Mini movie DB</h5>
                    <p>React Web Development</p>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}
       
       

        

        </div> {/* portfolio-wrapper end */}
      </div> {/* twelve columns end */}
      {/* Modal Popup
      --------------------------------------------------------------- */}
      <div id="modal-01" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src="images/portfolio/expforum.png" alt />
        <div className="description-box">
          <h4>Expert Forum</h4>
          <p>Full Stack Application with React/ Redux front end, Nodejs Express back end and Mongo db as database. This Applications connects IT experts and employers.</p>
          <span className="categories"><i className="fa fa-tag" />React/Redux  MERN stack  Development</span>
        </div>
        <div className="link-box">
        <a href ='https://xpertforum.herokuapp.com' rel="noopener noreferrer" target ="_blank">  Heroku</a>
          <a href ='https://github.com/jdhova/Expartsforum' rel="noopener noreferrer" target ="_blank">  <i className="fa fa-github" /></a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>{/* modal-01 End */}
      <div id="modal-02" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src="images/calc.png" alt />
        <div className="description-box">
          <h4>Calc</h4>
          <p>Basic Calculator React.js</p>
          <span className="categories"><i className="fa fa-tag" />React Development</span>
        </div>
        <div className="link-box">
          {/* <a href="https://calgame.herokuapp.com">Details</a> */}
          <a href ='https://calgame.herokuapp.com' rel="noopener noreferrer" target ="_blank">  Heroku</a>
          <a href ='https://github.com/jdhova/game' rel="noopener noreferrer" target ="_blank">  <i className="fa fa-github" /></a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>{/* modal-02 End */}
      <div id="modal-03" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src="images/shopping.png" alt />
        <div className="description-box">
          <h4>Mini Shopping Cart</h4>
          <p>Basic mini shopping cart built on react.js .</p>
          <span className="categories"><i className="fa fa-tag" />React Web Development</span>
        </div>
        <div className="link-box">
        <a href ='https://minishoping.herokuapp.com' rel="noopener noreferrer" target ="_blank">  Details</a>
          <a href ='https://github.com/jdhova/react-counter' rel="noopener noreferrer" target ="_blank">  <i className="fa fa-github" /></a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>{/* modal-03 End */}
      <div id="modal-04" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src="images/movie.png" alt />
        <div className="description-box">
          <h4>Mini Movie DB</h4>
          <p>Basic mini movie db where viewers can search movies in acceding, decending and based on genres.</p>
          <span className="categories"><i className="fa fa-tag" />React Web Development</span>
        </div>
        <div className="link-box">
        <a href ='https://minishoping.herokuapp.com' rel="noopener noreferrer" target ="_blank">  Heroku</a>
          <a href ='https://github.com/jdhova/react-movie-page' rel="noopener noreferrer" target ="_blank">  <i className="fa fa-github" /></a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>{/* modal-04 End */}


      <div id="modal-05" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt />
        <div className="description-box">
          <h4>Farmer Boy</h4>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
        </div>
        <div className="link-box">
          <a href="http://www.behance.net">Heroku</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>{/* modal-05 End */}
      
      <div id="modal-06" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt />
        <div className="description-box">
          <h4>Girl</h4>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <span className="categories"><i className="fa fa-tag" />Photography</span>
        </div>
        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>{/* modal-06 End */}
      <div id="modal-07" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt />
        <div className="description-box">
          <h4>Origami</h4>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <span className="categories"><i className="fa fa-tag" />Web Development</span>
        </div>
        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>{/* modal-07 End */}
      <div id="modal-08" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt />
        <div className="description-box">
          <h4>Retrocam</h4>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
        </div>
        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>{/* modal-01 End */}
    </div> {/* row End */}
  </section> 
);
}
