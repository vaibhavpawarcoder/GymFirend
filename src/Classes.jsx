import React from 'react'
import styled from 'styled-components'
import Page from './components/Page';
import Register from './components/Register';
import Class from './components/Class';


const Classes = () => {
  return (
    <Wrapper>
      <Page page='Classes' pagename="Classes" />
      <br />
      <div className='container mt-5 mb-5'>
        <div className='row'>
          <div className='col-md-4'>
             <Class name=" Ryan Knight" img="./Img/blog-1.jpg" class="yoga" />
          </div>
          <div className='col-md-4'>
             <Class name="Kevin McCormick" img="./Img/blog-2.jpg" class="Karate" />
          </div>
          <div className='col-md-4'>
             <Class name=" Randy Rivera" img="./Img/blog-3.jpg" class="Running" />
          </div>

          <div className='col-md-4'>
             <Class name=" Russell Lane" img="./Img/blog-4.jpg" class="Dance" />
          </div>
          <div className='col-md-4'>
             <Class name="Cole Robertson" img="./Img/blog-5.jpg" class="Personal Training" />
          </div>
          <div className='col-md-4'>
             <Class name=" Ryan Scott" img="./Img/blog-6.jpg" class="Weight Loss" />
          </div>

          <div className='col-md-4'>
             <Class name=" Chester Bowen" img="./Img/blog-7.jpg" class="Box" />
          </div>
          <div className='col-md-4'>
             <Class name="Jorge Fernandez" img="./Img/blog-8.jpg" class="Cardio" />
          </div>
          <div className='col-md-4'>
             <Class name="Chester Bowen" img="./Img/blog-9.jpg" class="Crossfit" />
          </div>
        </div>
      </div>

      <Register />
    </Wrapper>
  )
}
const Wrapper = styled.section``;

export default Classes