import React from 'react'
import styled from 'styled-components'

const Classinfosec = (prpos) => {
  return (
    <Wrapper>
        <div className='col-md-6'>
        <img src={prpos.icon} style={{width:80}} className='p-2' />
        <h2>{prpos.title}</h2>
        <p>{prpos.para}</p>
        </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
color:white;
algin-item:center;
text-algin:center;
`;

export default Classinfosec