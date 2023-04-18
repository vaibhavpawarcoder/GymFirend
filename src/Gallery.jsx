import React from 'react'
import Page from './components/Page'
import Button from './components/Button'
import styled from 'styled-components'

const Gallery = () => {
  return (
    <Wrapper>
      <Page page="Gallery" pagename='Gallery' />
      
      <div className='container mt-5'>
        <div className='row mt-5'>
          <div className=' col-md-4 mt-3'>
            <img src='./Img/blog-9.jpg' className='img1'/>
          </div>
          <div className=' col-md-4 mt-3'>
            <img src='./Img/blog-2.jpg' className='img2'/>
          </div>
          <div className=' col-md-4 mt-3'>
            <img src='./Img/blog-3.jpg' className='img1'/>
          </div>
          <div className=' col-md-4 mt-3'>
            <img src='./Img/blog-4.jpg' className='img2'/>
          </div>
          <div className=' col-md-4 mt-3'>
            <img src='./Img/blog-5.jpg' className='img1'/>
          </div>
          <div className=' col-md-4 mt-3'>
            <img src='./Img/blog-6.jpg' className='img2'/>
          </div>
          <div className=' col-md-4 mt-3'>
            <img src='./Img/blog-7.jpg' className='img1'/>
          </div>
          <div className=' col-md-4 mt-3'>
            <img src='./Img/blog-1.jpg' className='img2'/>
          </div>
          <div className=' col-md-4 mt-3'>
            <img src='./Img/blog-8.jpg' className='img1'/>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper= styled.section` 
img{
  transition: 1s ease;
  cursor:pointer;

}

img:hover{
  -webkit-transform: scale(1.2);
-ms-transform: scale(1.2);
transform: scale(1.2);
transition: 1s ease;
}

.img2:hover{
-webkit-transform: scale(0.8);
-ms-transform: scale(0.8);
transform: scale(0.8);
transition: 1s ease;
}
`;
export default Gallery