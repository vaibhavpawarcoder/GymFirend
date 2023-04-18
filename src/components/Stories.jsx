import React from 'react'
import styled from 'styled-components'

const Stories = () => {
    return (
        <Wrapper>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./Img/classinfo.png" className="d-block img_main" alt="..." />
                        <div className="carousel-caption  d-md-block">
                        <p>Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient montes.</p>
                        <p>Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient montes.</p>
                        <img src='./Img/trainer-1.jpg' className='trainer-logo' />
                            <h5>Patrick Cortez</h5>
                            <p>Leader</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./Img/classinfo.png" className="d-block img_main" alt="..." />
                        <div className="carousel-caption  d-md-block">
                        <p>Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient montes.</p>
                        <p>Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient montes.</p>
                        <img src='./Img/trainer-2.jpg' className='trainer-logo' />
                            <h5>Gregory Powers</h5>
                            <p>Gym coach</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./Img/classinfo.png" className="d-block img_main" alt="..." />
                        <div className="carousel-caption  d-md-block">
                        <p>Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient montes.</p>
                        <p>Aenean massa. Cum sociis Theme et natoque penatibus et magnis dis part urient montes.</p>
                        <img src='./Img/trainer-3.jpg' className='trainer-logo' />
                            <h5>Walter Wagner</h5>
                            <p>Dance trainer</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
.img_main{
    width:100%;
    height: 80vh;
}
.trainer-logo{
    width:130px;
    border-radius:50%;
}
`;
export default Stories