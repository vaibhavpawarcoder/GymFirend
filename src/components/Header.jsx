import { React, useRef } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("shows");
    }
    return (
        <Wrapper>

            <div className='Navbar'>

                {/* logo section */}
                <div className='Logo'>
                <NavLink to='/' className='logo'><p>GymFirend</p></NavLink>
                    
                </div>

                {/* Menu section */}
                <div ref={navRef} className='Menu'>
                    <div className='nav'>
                        <ul>
                            <a onClick={showNavbar} className="close">
                                <i class="bi bi-x-circle"></i>
                            </a>

                            <li onClick={showNavbar}>
                                <NavLink to='/' className='link' >Home</NavLink>
                            </li>

                            <li onClick={showNavbar}>
                                <NavLink to='/About' className='link' >About</NavLink>
                            </li>

                            <li onClick={showNavbar}>
                                <NavLink to='/Classes' className='link' >Classes</NavLink>
                            </li>

                            <li onClick={showNavbar}>
                                <NavLink to='/Pricing' className='link' >Pricing</NavLink>
                            </li>

                            <li onClick={showNavbar}>
                                <NavLink to='/Schedule' className='link' >Schedule</NavLink>
                            </li>

                            <li onClick={showNavbar}>
                                <NavLink to='/Gallery' className='link' >Gallery</NavLink>
                            </li>

                            <li onClick={showNavbar}>
                                <NavLink to='/Blog' className='link' >Blog</NavLink>
                            </li>

                            <li onClick={showNavbar}>
                                <NavLink to='/Contact' className='link' >Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Side Link section */}
                <div className='Menu-links'>
                    <i class="bi bi-list burger" onClick={showNavbar}></i>
                    <NavLink to='/About' className='link'>
                        <i class="bi bi-person-bounding-box"></i>
                    </NavLink>

                    <p>
                        <NavLink to='/Apply' className='link'>
                            <i class="bi bi-plus-square"></i>
                            <span>Join Us</span>
                        </NavLink>
                    </p>
                </div>
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.section`
width:100%;
height:80px;
background:black;
color:white;
position:fixed;
.logo{
text-decoration:none;
color:white;
}
.Navbar{
    display:flex;
    justify-content: space-evenly;
    padding:20px;
    
}
.Menu-links{
    display:flex;
    justify-content: space-evenly;
    margin-right:10px;
     }
     ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
}
li{margin-left: 20px; list-style:none;}
.link{text-decoration:none; Color:white;}
.link{
    text-decoration:none; 
    Color:white;
    margin-right:10px;
    
    }
    .close{
                display:none;
    }
    .bi{
        margin-right:10px;
        cursor:pointer;
        font-size:20px;
    }

    .burger{display:none;}

    @media only screen and (max-width:786px){
        .link span{display:none;}
        .Menu{display:none;}
        .burger{display:block;}
        .shows{ 
            display:block;
            width:100%;
            height:100vh;
            background:red;
            position: absolute;
            top: 0;
         }
         .shows ul{
            display:flex; 
            flex-direction: column;
            }

            .shows ul li{
                position: relative;
                top:55px;
                left:100px;
                margin-top:30px;
            }

            .close{
                display:block;
                position: absolute;
                right:20px;
                top:20px; 
                list-style:none; color:white;
            }
            .bi-x-circle{
                font-size:30px;
            }
    }
`;

export default Header