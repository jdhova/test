
import React, { Component } from 'react';
class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="home"> 
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Quotes</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm Jude Okagu.</h1>
            <h3>I'm an Amsterdam based <span>Web Developer</span> 
           <span>" I don't just build websites, I create websites that SELL.”</span> 
             Your in the safest hands so <a className="smoothscroll" href="#about">welcome to my page</a>
                and i will tell you more about my self 
               {/* <a className="smoothscroll" href="#about">about me</a>. */}
               </h3>
            <hr />
            <ul className="social">
              <li><a href ='https://www.facebook.com/juud.ik?ref=bookmarks' rel="noopener noreferrer" target ="_blank">  <i className="fa fa-facebook" /></a></li>
              <li><a href ='linkedin.com/in/jude-okagu-6142b913b/' rel="noopener noreferrer" target ="_blank">  <i className="fa fa-linkedin" /></a></li>
              <li><a href ='https://www.instagram.com/jdhova/?hl=nl/' rel="noopener noreferrer" target ="_blank">  <i className="fa fa-instagram" /></a></li>
              <li><a href ='https://join.skype.com/invite/p7UwOM5p2T3s/' rel="noopener noreferrer" target ="_blank">  <i className="fa fa-skype" /></a></li>
              <li><a href ='https://github.com/jdhova/' rel="noopener noreferrer" target ="_blank">  <i className="fa fa-github" /></a></li>
              <li><a href ='https://stackoverflow.com/users/10671168/jude-okagu/' rel="noopener noreferrer" target ="_blank">  <i className="fa fa-stack-overflow" /></a></li>
             
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
        
      </header> {/* Header End */}
      </React.Fragment>
    );
  } }


  export default  Header