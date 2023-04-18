import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Aboutinto = (prpos) => {
    return (
        <Wrapper>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 pt-3'>
                        <img src={prpos.img} />
                    </div>
                    <div className='col-md-6 pt-5'>
                        <h1>{prpos.title}</h1>
                        <p>{prpos.paraone}
                        </p>
                        <p>{prpos.paratwo}</p>
                       <NavLink to={prpos.link} ><button className='bt btn-dark rounded-pill p-2'>{prpos.button}</button></NavLink> 
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
@media only screen and (max-width:786px){
    img{
        width:330px;
    }
}
`;

export default Aboutinto