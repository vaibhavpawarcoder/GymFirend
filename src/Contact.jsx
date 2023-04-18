import React, { useRef } from 'react'
import styled from 'styled-components'
import Page from './components/Page';
import Register from './components/Register';
import emailjs from '@emailjs/browser';



const Contact = () => {

  const form= useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wsvdhtu', 'template_lma7zgx', form.current, 'KOj4ujD8JMhyhDWKe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <Wrapper>
      <Page page="Contact" pagename="Contact" />

      <div className='container-fluid'>
        <div className='row  mt-5 mb-5'>

          <div className='col-md-5'>
            <h1>CONTACTS US</h1>

            <p>Our Location</p>
            <p><i class="bi bi-geo-alt"></i> <span>60-49 Road 11378 New York</span></p>

            <p>Phone:</p>
            <p><i class="bi bi-phone"></i> <span>+91 81.1885.8888</span></p>

            <p>Mail</p>
            <p><i class="bi bi-envelope"></i> <span>gymkhan@ gmail.com</span></p>
          </div>

          <div className='col-md-7'>
            <h1>LEAVE A COMMENT</h1>

            <form ref={form} onSubmit={sendEmail} className="row g-3 needs-validation" novalidate>

              <div className="col-md-6 mt-3 mb-3">
                <label for="validationCustom01" className="form-label">First Name</label>
                <input type="text" className="form-control" id="validationCustom01" name='name' required />
              </div>


              <div className="col-md-6 mt-3 mb-3">
                <label for="validationCustom01" className="form-label">Your email address</label>
                <input type="email" className="form-control" id="validationCustom01" name='email' required />
              </div>

              <div className="col-md-12 mt-3 mb-3">
                <label for="validationCustom01" className="form-label">Message</label>
                <textarea type="tel" cols='50' rows='5' className="form-control" id="validationCustom01" name='message' required />
              </div>

              <div class="col-12">
                <button class="btn btn-primary" type="submit">Send Message</button>
              </div>

            </form>
          </div>
        </div>
      </div>

      <Register />
    </Wrapper>
  )
}
const Wrapper = styled.section`
p{font-size:20px;}
i{
  padding:10px;
}
`;
export default Contact