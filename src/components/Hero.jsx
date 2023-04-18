import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Class from './Class';
import Aboutinto from './Aboutinto';
import Classinfo from './Classinfo';
import Trainers from './Trainers';
import Stories from './Stories';
import Plans from './Plans';
import Register from './Register';
import Blog from './Blog';

const Hero = () => {
    return (
        <Wrapper>
            <div className='hero'>
                <p>FIND YOUR ENERGY</p>
                <h2>MAKE YOUR BODY</h2>
                <h3>FIT & PERFECT</h3>
                <NavLink to="/Classes" className='class-btn'>Our Classes</NavLink>
            </div>

            <Aboutinto
                img='./Img/one-removebg-preview.png'
                title='STORY ABOUT US'
                paraone='Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean pretium sollicitudin, nascetur auci elit consequat ipsutissem niuis sed odio sit amet nibh vulputate cursus a amet.'
                paratwo='Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam semper libero sit amet. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam semper libero sit amet.'
                button='MoreInfo'
                link='/About'
            />

            <Classinfo />
            
            

            <div className='TRAINERS mt-5'>
                <h1 className='mt-5 mb-4'>EXPERT TRAINERS</h1>
                <div className='container mt-5'>
                    <div className='row mb-5 mt-5'>
                        <div className='col-md-4'>
                            <Trainers
                                traimg='./Img/trainer-1.jpg'
                                traname='Patrick Cortez'
                                trapost='Leader'
                                trainfo='non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
                                fac='https://icons.getbootstrap.com/icons/twitter/'
                                ins='https://icons.getbootstrap.com/icons/twitter/'
                                twi='https://icons.getbootstrap.com/icons/twitter/'
                            />
                        </div>
                        <div className='col-md-4'>
                            <Trainers
                                traimg='./Img/trainer-2.jpg'
                                traname='Gregory Powers'
                                trapost='Gym coach'
                                trainfo='non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
                                fac='https://icons.getbootstrap.com/icons/twitter/'
                                ins='https://icons.getbootstrap.com/icons/twitter/'
                                twi='https://icons.getbootstrap.com/icons/twitter/'
                            />
                        </div>
                        <div className='col-md-4'>
                            <Trainers
                                traimg='./Img/trainer-3.jpg'
                                traname='Walter Wagner'
                                trapost='Dance trainer'
                                trainfo='non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
                                fac='https://icons.getbootstrap.com/icons/twitter/'
                                ins='https://icons.getbootstrap.com/icons/twitter/'
                                twi='https://icons.getbootstrap.com/icons/twitter/'
                            />
                        </div>
                    </div>
                </div>

            </div>

            <Stories />

            <div className='container mt-5 mb-5 plan'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Plans
                            plans='Basic'
                            price="$ 17"
                            pep='01'
                            people="01"
                            link='/Pricing'
                        />
                    </div>
                    <div className='col-md-4'>
                        <Plans
                            plans='STANDARD'
                            price="$ 54"
                            pep='01'
                            people="01"
                            link='/Pricing'
                        />
                    </div>
                    <div className='col-md-4'>
                        <Plans
                            plans='PREMIUM'
                            price="$ 97"
                            pep='01'
                            people="01"
                        />
                    </div>
                </div>
            </div>

            <div className='train mb-5 pb-5'>

                <Aboutinto
                    // img='./Img/2.png'
                    title='GET TRAINING TODAY'
                    paraone='Gimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard.'
                    paratwo='Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam semper libero sit amet. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam semper libero sit amet.'
                    link='/Classes'
                    button='Contact Now'
                />
            </div>

            <div className='container mb-5 blog'>
            <h2>LATEST BLOG</h2>
                <div className='row mb-5'>

                    <div className='col-md-4'>
                        <Blog
                            img='./Img/blog-1.jpg'
                            date='February 17, 2019'
                            name='Running'
                            info='Russias first male synchronised swimmer'
                        />
                    </div>
                    <div className='col-md-4'>
                        <Blog
                            img='./Img/blog-2.jpg'
                            date='February 17, 2019'
                            name='GYM'
                            info='NYC measles vaccination order prevails in court'
                        />
                    </div>
                    <div className='col-md-4'>
                        <Blog
                            img='./Img/blog-3.jpg'
                            date='February 17, 2019'
                            name='Sport'
                            info='The Week in Pictures: April 11 - 18'
                        />
                    </div>
                </div>
            </div>



            <div className=''>
                <Register />
            </div>



        </Wrapper>
    )
}
const Wrapper = styled.section`
.blog, .plan{
    background:#f2f2f2;
}
.train{
    background-image: url(./Img/classinfo.png);
    background-repeat: no-repeat;
    background-size: cover;
    color:white;
}
.TRAINERS h1{
    text-align: center;
    align-items: center;
}
.bi{
    font-size:50px;
    color:red;
}
.hero{
    background-image: url("Img/1.jpg");
    width: 100%;
    height: 100vh;
    padding-top:18%;
    padding-left:10%;
}
.hero p{
  font-size:20px;
  color: #fff;
}
.hero h2{font-size:55px; color:white;}
.hero h3{font-size:50px; color:white; margin-bottom:25px;}
.hero .class-btn{
  padding:10px;
  width:350px;
  color:black;
  background-color:#f2f2f2;
  margin:15px;
  cursor:pointer;
  list-style:none;
  text-decoration:none;
  font-size:15px;
  text-transform:capitalize;
  border-top-width: 10px;
  border:1px soild white;
  box-shadow: 10px 10px 10px;
}
img{
    width:100%;
    pointer: relative;
    top:0;
    }


        @media only screen and (max-width:786px){
            .hero{
                padding-top:50%;
                color:silver;
            }
        }


 
`;

export default Hero