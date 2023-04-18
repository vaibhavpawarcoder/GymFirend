import React from 'react'
import styled from 'styled-components'
import Page from './components/Page';
import Post from './Post';

const Blog = () => {
  return (
    <Wrapper>
      <Page page="Blog" pagename="Blog" />
    
      <div className='container mb-5 blog'>
                <div className='row mb-5'>

                    <div className='col-md-4'>
                        <Post
                            img='./Img/blog-1.jpg'
                            date='February 17, 2019'
                            name='Running'
                            info='Russias first male synchronised swimmer'
                        />
                    </div>
                    <div className='col-md-4'>
                        <Post
                            img='./Img/blog-2.jpg'
                            date='February 17, 2019'
                            name='GYM'
                            info='NYC measles vaccination order prevails in court'
                        />
                    </div>
                    <div className='col-md-4'>
                        <Post
                            img='./Img/blog-3.jpg'
                            date='February 17, 2019'
                            name='Sport'
                            info='The Week in Pictures: April 11 - 18'
                        />
                    </div>


                    <div className='col-md-4'>
                        <Post
                            img='./Img/blog-4.jpg'
                            date='February 17, 2019'
                            name='Running'
                            info='Russias first male synchronised swimmer'
                        />
                    </div>
                    <div className='col-md-4'>
                        <Post
                            img='./Img/blog-5.jpg'
                            date='February 17, 2019'
                            name='GYM'
                            info='NYC measles vaccination order prevails in court'
                        />
                    </div>
                    <div className='col-md-4'>
                        <Post
                            img='./Img/blog-6.jpg'
                            date='February 17, 2019'
                            name='Sport'
                            info='The Week in Pictures: April 11 - 18'
                        />
                    </div>


                    <div className='col-md-4'>
                        <Post
                            img='./Img/blog-7.jpg'
                            date='February 17, 2019'
                            name='Running'
                            info='Russias first male synchronised swimmer'
                        />
                    </div>
                    <div className='col-md-4'>
                        <Post
                            img='./Img/blog-8.jpg'
                            date='February 17, 2019'
                            name='GYM'
                            info='NYC measles vaccination order prevails in court'
                        />
                    </div>
                    <div className='col-md-4'>
                        <Post
                            img='./Img/blog-9.jpg'
                            date='February 17, 2019'
                            name='Sport'
                            info='The Week in Pictures: April 11 - 18'
                        />
                    </div>
                </div>
            </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
.blog, .plan{
    background:#f2f2f2;
}

`;
export default Blog