import React, { useRef } from 'react'
import styled from 'styled-components'
import Button from './Button';
import emailjs from '@emailjs/browser';


const Register = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wsvdhtu', 'template_i716itj', form.current, 'KOj4ujD8JMhyhDWKe')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <Wrapper>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        <h1>REGISTER NOW</h1>
                        <p>The First 7 Day Trial Is Completely Free With The Teacher</p>

                        <form ref={form} onSubmit={sendEmail} className="row g-3 needs-validation" novalidate>

                            <div className="col-md-6 mt-3 mb-3">
                                <label for="validationCustom01" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="validationCustom01" name='fname' required />
                            </div>

                            <div className="col-md-6 mt-3 mb-3">
                                <label for="validationCustom01" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="validationCustom01" name='lname' required />
                            </div>


                            <div className="col-md-6 mt-3 mb-3">
                                <label for="validationCustom01" className="form-label">Your email address</label>
                                <input type="email" className="form-control" id="validationCustom01" name='email' required />
                            </div>

                            <div className="col-md-6 mt-3 mb-3">
                                <label for="validationCustom01" className="form-label">Your mobile</label>
                                <input type="tel" className="form-control" id="validationCustom01" name='mobile' required />
                            </div>

                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Send Message</button>
                            </div>

                        </form>

                    </div>
                    <div className='col-md-4'>
                        <img src='./Img/register-pic.jpg' />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
img{
    width:300px
}
`;

export default Register