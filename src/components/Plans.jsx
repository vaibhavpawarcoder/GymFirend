import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Plans = (props) => {
  return (
    <Wrapper>
      <div className='plans'>
        <div className='head-plan'>
          <h2>{props.plans}</h2>
        </div>
        <div className='plan-content'>
          <h2 className='m-price'>
          {props.price} / 01 Mo
          </h2>
          <p>Duration</p>
          <h5>12 Month</h5>

          <p>Personal trainer</p>
          <h5>{props.pep} person</h5>

          <p>Amount of people</p>
          <h5>{props.people} person</h5>

          <p>Number of visits</p>
          <h5>Unlimited</h5>

          <NavLink to={props.link} > <button>Start Now</button></NavLink> 
        </div>
      </div>
     
    </Wrapper>
  )
}
const Wrapper = styled.section`
padding:10px;
.head-plan{
  color:white;
  text-align:center;
  background: linear-gradient(to right, #eb3c5a, #f67831);
  padding: 25px 0;
    margin-bottom: 38px;
}
.plan-content{
  text-align:center;
}
.m-price{
  text-align:center;
  font-size: 40px;
    color: #f15d44;
    font-weight: 600;
    margin-bottom: 24px;
}
button{
  display: inline-block;
    font-size: 16px;
    font-weight: 600;
    padding: 0 12px;
    text-align: center;
    width: 160px;
    height: 46px;
    border-left: 2px solid #eb3c5a;
    border-right: 2px solid #f67831;ive;
    box-sizing: border-box;
    background-position: 0 0, 0 100%;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    transition-duration: 1000ms;
    line-height: 45px;
}
`;

export default Plans