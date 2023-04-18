import React from 'react'
import styled from 'styled-components'

const Trainers = (props) => {
  return (
    <Wrapper>
    <div className='trainesrs'>

        <div className='tranier'>
            <img src={props.traimg} />
        </div>
        <div className='trainer-info p-2'>
        <h3>{props.traname}</h3>
        <h5>{props.trapost}</h5>
        <p>{props.trainfo}</p>
        <div className='links'>
         <a href={props.fac} target='_blank'><i class="bi bi-facebook"></i></a> 
         <a href={props.ins} target='_blank'><i class="bi bi-instagram"></i></a> 
         <a href={props.twi} target='_blank'><i class="bi bi-twitter"></i></a> 
        </div>
        </div>
    </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
.trainesrs{
    cursor:pointer;
    transition: 3.9s all;
}
.trainesrs:hover .trainer-info{
    background-color: #f2f2f2   ;
    position:relative;
    top:-210px;
    height:300px
}
.trainesrs:hover .trainer-info p, .trainesrs:hover .trainer-info .links{
    display:block;
}
.trainer-info{
    background-color:#f2f2f2;
    transition: 3.9s all;
    cursor: pointer;
    text-align: center;
    align-items: center;
}
.trainer-info:hover{
    background-color: #f2f2f2   ;
    position:relative;
    top:-210px;
    height:300px
}
.trainer-info p, .trainer-info .links{
display:none;
}
.trainer-info .links a .bi{
    font-size:20px;
    margin-left:20px
}
.trainer-info:hover.trainer-info p, .trainer-info:hover.trainer-info .links{
    display:block;
}

`;

export default Trainers