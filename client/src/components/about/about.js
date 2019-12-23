import React from 'react'
// import image from '../'

export default function about() {
  return (
  
     <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/portfolio/me.jpeg" alt />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p> Expert freelance web developer, and I am looking to leverage my wealth of 
              knowledge and experience in designing and developing web applications 
              with basic techniques like HTML, CSS, JavaScript, and Wordpress. 
              I also design build and deploy more web applications on GIT and Heroku. 
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Jude Okagu</span><br />
                  <span>Amsterdam NL<br />
                   
                  </span><br />
                  <span>+31 687773342</span><br />
                  <span>juud0010@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
              
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>  
    ); 
  }

      
