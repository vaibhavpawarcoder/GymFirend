import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Footer = () => {
    return (
        <Wrapper >
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='col-md-6 foot-one pt-5 pb-5 '>
                        <div>
                            <span>NEW MEMBER</span>
                            <h1>7 days for free</h1>
                            <p>Complete the training sessions with us, surely you will be happy</p>
                            <NavLink ><button>Get Started</button></NavLink>
                        </div>
                    </div>
                    <div className='col-md-6 foot-two pt-5 pb-5 '>
                        <div>
                            <span>CONTACT US</span>
                            <h1>7 387545205</h1>
                            <p>If you trust us on your journey they dark sex does not disappoint you!</p>
                            <NavLink ><button>Get Started</button></NavLink>
                        </div>
                    </div>


                    <div className='row justify-content-center foot-content mt-5 mb-5 pt2'>
                        <div className='col-md-4'>
                            <span>Phone</span>
                            <p>(123) 118 9999 - (123) 118 9999</p>
                        </div>
                        <div className='col-md-4'>
                            <span>Address</span>
                            <p>72 Kangnam, 45 Opal Point Suite 391</p>
                        </div>
                        <div className='col-md-4'>
                            <span>Email</span>
                            <p>contactcompany@vaibhavcodeer.com</p>
                        </div>
                    </div>

                    <div className='row justify-content-center'>
                        <div className='col-md-10 foot-sub '>
                            <div className='row'>
                                <div className='col-md-7 pt5  sub-text'>
                                    <h3>SUBSCRIBE TO OUR MAILING LIST</h3>
                                    <p>Sign up to receive the latest information</p>
                                </div>
                                <div className='col-md-5 pt5 '>
                                    <div className="input-group">
                                        <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                                            <span className="input-group-text"><i class="bi bi-send"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row justify-content-center mt-5 mb-5'>
                        <div className='col-md-10 '>
                            <div className='row'>
                                <div className='col-md-7 pt5  sub-text'>
                                    <p>Privacy Policy©Copyright ©2023 All rights reserved | <NavLink to='' >Vaibhav Pawar</NavLink> </p>
                                </div>
                                <div className='col-md-5 pt5 '>
                                <NavLink to='https://www.linkedin.com/in/vaibhav-pawar-2b3836251/' target='_blank'><i class="bi bi-linkedin"></i></NavLink>
                                <NavLink to='https://github.com/vaibhavpawarcoder' target='_blank' ><i class="bi bi-github"></i></NavLink>
                                <NavLink to='https://www.instagram.com/vaibhav___jpg/' target='_blank'><i class="bi bi-instagram"></i></NavLink>
                                <NavLink to='https://github.com/vaibhavpawarcoder' target='_blank'  ><i class="bi bi-facebook"></i></NavLink>
                                
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
background-color:black;

.sub-text h3 , .sub-text p{
    color:white;
}

i{margin-left:20px; font-size:25px; padding:5px; background-color:#f2f2f2; border-radius:50%; color:rgb(241, 93, 68); }
i:hover{background-color: rgb(241, 93, 68); color:white}
.foot-one{
    background-image:url(./Img/blog-4.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    color:white;
    padding:50px;
}
.foot-two{
    background-image:url(./Img/blog-6.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    color:white;
    padding:50px;
}

.foot-sub{
    background-image:url(./Img/blog-6.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    padding:30px;
}
span{
    font-size: 16px;
    color: rgb(241, 93, 68);
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
}
button{
    font-size: 16px;
    padding:10px;
    color:white;
    border:none;
    background-color: rgb(241, 93, 68);
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;   
}

.foot-content p{
    color:white;
}

`;

export default Footer