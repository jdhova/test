import React from 'react'

export default function resume() {
  return (
    <section id="resume">
    {/* Education
  ----------------------------------------------- */}
    <div className="row education">
      <div className="three columns header-col">
        <h1><span>Education</span></h1>
        <img className="profile-pic" src="images/portfolio/green.png" alt />

      </div>
      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            <h3>University of Greenwich London</h3>
            
            <p className="info">Master in Facility and Real Estate Management <br></br> Master Thesis 'Facilitating the way Cloud personnel work in the cloud<span>•</span> <em className="date">Feb 2019</em></p>
            
            <p>
            • Wrote a thesis on the topic “Facilitating the Way Cloud Personnel Work in
            the Cloud.”. This thesis was aimed at facilitating the way cloud personnel
            works in the cloud from three platforms, namely: SAAS, PAAS, and IAAS.
            
            • Thesis research also covered IT services like Big data, Artificial
            intelligence, Machine learning, Deep learning, Serverless computing,
            and Block chain technology
            </p>
          </div>
        </div> {/* item end */}
        <div className="row item">
          <div className="twelve columns">
            <h3>Rotterdam Business School</h3>
            <p className="info">Pre-Masters  Finance and Accounting <span>•</span> <em className="date">Feb 2017</em></p>
            <p>
            The first part of my premasters focused on Financial Accounting where I learnt the basics
              of Financial Accounting, FIFO and LIFO etc.
              <br></br>
              Other modules during my pre masters also focued on the fundermentals and basics of Logistics and Supply Chain Managaement
            </p>
          </div>
        </div> {/* item end */}
      </div> {/* main-col end */}
    </div> {/* End Education */}
    {/* Work
  ----------------------------------------------- */}
    <div className="row work">
      <div className="three columns header-col">
        <h1><span>Work</span></h1>
      </div>
      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            <h3>Lajok BV</h3>
            <p className="info">Free Lance Web Developer <span>•</span> <em className="date">Aug 2019 - Present</em></p>
            <p>
            Designed Built and Deployed Web Application with basic technologies like
              HTML,CSS and JavaScript
            </p>
          </div>
        </div> {/* item end */}
        <div className="row item">
          <div className="twelve columns">
            <h3>Iron Hack Amsterdam</h3>
            <p className="info">Front End Developer <span>•</span> <em className="date">Oct 2018 - February 2019</em></p>
            <p>
            • Designed and developed a full-stack property valuation search web
              application with HTML CSS, Express.JS, Node.JS, MongoDB, and Zillow
              API.

              • Designed and developed Full Stack Movie Reviews and database Web
              Application with React.JS, Express.JS, Node.JS, MongoDB (Database).
              • Designed and developed music back end database with Spotify API
              (Node.JS)

              • Deployed full-stack React.js applications.

            </p>
          </div>
        </div> {/* item end */}
      </div> {/* main-col end */}
    </div> {/* End Work */}
    {/* Skills

  ----------------------------------------------- */}
    <div className="row skill">
      <div className="three columns header-col">
        <h1><span>Skills</span></h1>
      </div>
    
      <div className="nine columns main-col">
       
        
        <div className="bars">
          <ul className="skills">
          <li><span className="bar-expand css" /><em>React</em></li>
          <li><span className="bar-expand css" /><em>React/Redux</em></li>
          <li><span className="bar-expand html5" /><em>Node/Express</em></li>
          <li><span className="bar-expand html5" /><em>CSS</em></li>
            <li><span className="bar-expand html5" /><em>HTML5</em></li>
          <li><span className="bar-expand html5" /><em>AWS</em></li>
          <li><span className="bar-expand jquery" /><em>TypeScript</em></li>
          <li><span className="bar-expand jquery" /><em>React Native</em></li>  
            <li><span className="bar-expand jquery" /><em>jQuery</em></li>
          </ul>
        </div>{/* end skill-bars */}

        
      </div> {/* main-col end */}
    </div> {/* End skills */}
  </section> 
);
}


