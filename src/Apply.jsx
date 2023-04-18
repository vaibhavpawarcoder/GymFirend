import React from 'react'
import styled from 'styled-components'
import Register from './components/Register';
import Page from './components/Page';

const Apply = () => {
  return (
    <Wrapper>
    <Page page="Join-Us" pagename="Join-Us" />
        <Register />
    </Wrapper>
  )
}
const Wrapper=styled.section`



`;
export default Apply