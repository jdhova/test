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
            <p> I am a Full Stack web developer based in Amsterdam NL, I have been developing with React/Redux and Node.js
                for more than 1 year. I enjoy coding and i believe web develoment is all about bringing
                ideas and imaginations to reality. 
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

      
