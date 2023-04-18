import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Button = (prpos) => {
  return (
    <Wrapper>
      <NavLink to={prpos.link}> <button>{prpos.name}</button> </NavLink>  
    </Wrapper>
  )
}
const Wrapper=styled.section`

button{
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    padding: 0 12px;
    color: #ffffff;
    text-align: center;
    width: 160px;
    height: 46px;
    
    border-left: 2px solid #eb3c5a;
    border-right: 2px solid #f67831;
    background-image: linear-gradient(to right, #eb3c5a 0%, #f67831 100%), linear-gradient(to right, #eb3c5a 0%, #f67831 100%);    background-image: linear-gradient(to right, #eb3c5a 0%, #f67831 100%), linear-gradient(to right, #eb3c5a 0%, #f67831 100%);
    transition-duration: 1000ms;
    line-height: 45px;
}
`;
export default Button