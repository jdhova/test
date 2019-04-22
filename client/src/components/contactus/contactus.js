

import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {

    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    }

    formSubmit = (e) => {
      e.preventDefault()
    
      this.setState({
          buttonText: '...sending'
          
      })
    
      let data = {
          name: this.state.name,
          email: this.state.email,
          message: this.state.message
          
      }
      
      axios.post('http://localhost:5000/api/mail', data)
      .then( res => {
        // debugger
        console.log(res)
          this.setState({ sent: true }, this.resetForm())
          
      })
      .catch( err => {
        console.log(err,' why Message not sent')
      })
    }

    resetForm = () => {
      this.setState({
          name: '',
          message: '',
          email: '',
          buttonText: 'Message Sent'
      })
  }

    render() {


        return(
          <React.Fragment>
              <section id="contact">
                  <div className="row section-head">
                    <div className="two columns header-col">
                      <h1><span>Get In Touch.</span></h1>
                    </div>
                    <div className="ten columns">
                      <p className="lead"> Glad your here! send an en Inquiry and i will get back to you as soon as possible
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="eight columns">

                        <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
                              <label class="message" htmlFor="message-input">Your Message</label>
                              <textarea onChange={e => this.setState({ message: e.target.value})} name="message" class="message-input" type="text" placeholder="Please write your message here" value={this.state.message} required/>

                              <label class="message-name" htmlFor="message-name">Your Name</label>
                              <input onChange={e => this.setState({ name: e.target.value})} name="name" class="message-name" type="text" placeholder="Your Name" value={this.state.name}/>

                              <label class="message-email" htmlFor="message-email">Your Email</label>
                              <input onChange={(e) => this.setState({ email: e.target.value})} name="email" class="message-email" type="email" placeholder="your@email.com" required value={this.state.email} />

                              <div className="button--container">
                                  <button type="submit" className="button button-primary">{ this.state.buttonText }</button>
                              </div>
                          </form>

                      {/* contact-warning */}
                      <div id="message-warning"> Error boy</div>
                      {/* contact-success */}
                      <div id="message-success">
                        <i className="fa fa-check" />Your message was sent, thank you!<br />
                      </div>
                    </div>
                    <aside className="four columns footer-widgets">
                      <div className="widget widget_contact">
                        <h4>Address and Phone</h4>
                        <p className="address">
                          Jude Okagu<br />
                          
                          Amsterdam NL<br />
                          <span>(+31) 687773342</span>
                        </p>
                      </div>
                      <div className="widget widget_tweets">
                        
                      </div>
                    </aside>
                  </div>
                </section> 
      </React.Fragment> 
        );
    }
}

export default Contact;
