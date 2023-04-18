import React from 'react'
import styled from 'styled-components'
import Plans from './components/Plans';
import Page from './components/Page';
import Trainers from './components/Trainers';

const Pricing = () => {
  return (
    <Wrapper>
      <Page page="Pricing" pagename="Pricing"/>
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
    </Wrapper>
  )
}
const Wrapper=styled.section`
h1{
  text-align:center;
}

`;
export default Pricing