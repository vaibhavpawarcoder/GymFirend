import React from 'react'
import styled from 'styled-components'
import Classinfosec from './Classinfosec';

const Classinfo = () => {
    return (
        <Wrapper>
            <div className='container-fluid mt-5 mb-2'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src='./Img/classinfo.png' />
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>

                            <div className='col-md-6 classinfosec-add'>

                                <Classinfosec
                                    icon='./Img/service-icon.png'
                                    title='Strategies'
                                    para='Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient montes.'
                                />
                            </div>
                            <div className='col-md-6 classinfosec'>

                                <Classinfosec
                                    icon='./Img/service-icon-2.png'
                                    title='Yoga'
                                    para='Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient montes.'
                                />
                            </div>
                        </div>
                        <div className='row'>

                            <div className='col-md-6 classinfosec'>

                                <Classinfosec
                                    icon='./Img/service-icon-3.png'
                                    title='Workout'
                                    para='Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient montes.'
                                />
                            </div>
                            <div className='col-md-6 classinfosec-add'>

                                <Classinfosec
                                    icon='./Img/service-icon-4.png'
                                    title='Weight Loss'
                                    para='Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient montes.'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper=styled.section`

    background-color:black;
.classinfosec-add{
    background: #1e1e1e;
}

`;

export default Classinfo