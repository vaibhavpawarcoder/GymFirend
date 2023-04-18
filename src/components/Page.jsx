import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Page = (props) => {
    return (
        <Wrapper>
            <div className='conteiner-fluid pt-5 pb-5 '>
            <div className='row  mt-5 mb-5 pt-5 pb-5 d-flex justify-content-center'>
                <div className='col-11 justify-content-center'>
                    <h1>{props.pagename}</h1>
                    <p> <NavLink to={'/'} className='link'><i class="bi bi-house-door"></i> Home</NavLink> - {props.page} </p>
                </div>
            </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
background-image:url(./Img/classinfo.png);
background-size: cover;
text-algin:center;
algin-item:center;
background-repeat: no-repeat;
color:white;

.link{
color:white;
}

p{
    font-size:25px;
}

`;

export default Page