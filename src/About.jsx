import React from 'react'
import styled from 'styled-components'
import Page from './components/Page';
import Aboutinto from './components/Aboutinto';
import Trainers from './components/Trainers';


const About = () => {
  return (
    <Wrapper>
      <Page page='About' pagename="About" />

      <Aboutinto
                img='./Img/one-removebg-preview.png'
                title='STORY ABOUT US'
                paraone='Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean pretium sollicitudin, nascetur auci elit consequat ipsutissem niuis sed odio sit amet nibh vulputate cursus a amet.'
                paratwo='Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam semper libero sit amet. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam semper libero sit amet.'
                button='MoreInfo'
                link='/About'
            />

      <div className='train mb-5 pb-5'>

        <Aboutinto
          // img='./Img/2.png'
          img='./Img/award.jpg'
          title='BEST GYM AWARD'
          paraone='Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean pretium sollicitudin, nascetur auci elit consequat ipsutissem niuis sed odio sit amet nibh vulputate cursus a amet.'
          paratwo='Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam semper libero sit amet. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam semper libero sit amet.'
          link='/Classes'
          button='Know More '
        />
      </div>

      <div className='TRAINERS mt-5'>
        {/* <h1 className='mt-5 mb-4 text'>EXPERT TRAINERS</h1> */}
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
    </Wrapper>
  )
}
const Wrapper = styled.section`

.train{
    background-image: url(./Img/classinfo.png);
    background-repeat: no-repeat;
    background-size: cover;
    color:white;
}

.text{
text-align:center;
}

`
  ;

export default About