import React from 'react'
import styled from 'styled-components'

const Blog = (props) => {
    return (
        <Wrapper>
            <div className='container'>
                <div className='row'>
                    <div className='col mt-5 mb-5'>
                        <div className='blog-img'>
                            <img src={props.img} />
                        </div>
                        <div className='blog-text'>
                            <p>{props.date}</p>
                            <p> #{props.name}</p>
                            <h2>{props.info}</h2>
                        </div>
                    </div>
                </div>
            </div>

        </Wrapper>
    )
}
const Wrapper = styled.section``;

export default Blog