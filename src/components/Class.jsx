import React from 'react'
import styled from 'styled-components'

const Class = (props) => {
    return (
        <Wrapper>
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <img src={props.img} />
                        <div className='info-class'>
                            <h3>{props.class}</h3>
                            <p><i className='bi bi-person'></i> {props.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`

.col-3 img{
    width:300px;
}
.info-class{
    margin-top:-60px;
    background-color:rgb(0,0,0);
    background-color:rgba(0,0,0,0.8);
    color:white;
    width:300px;
    text-algin:center;
}


`;

export default Class