import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Styles
import styled from "styled-components";

const Nav = () => {

    const { pathname } = useLocation();

    return (
        <StyledNav>
            <h1> <Link id='logo' to="/">Capture</Link> </h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: '0' }}
                        animate={{ width: pathname === "/" ? "50%" : "0%" }}
                    />
                </li>
                <li>
                    <Link to="/work">2. Our Work</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: '0' }}
                        animate={{ width: pathname === "/work" ? "50%" : "0%" }}
                    />
                </li>
                <li>
                    <Link to="/contactus">3. Contact Us</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: '0' }}
                        animate={{ width: pathname === "/contactus" ? "50%" : "0%" }}
                    />
                </li>
            </ul>
        </StyledNav>
    )
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;
    position: sticky;
    top: 0;
    z-index:10;
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
    li {
        padding-left: 10rem;
        position: relative;
    }
    @media (max-width:1300px) {
       flex-direction: column;
       padding: 2rem 0rem;
       
       #logo {
        padding: 2rem;
       }
       ul {
        padding: 2rem 0 1rem 0;
        justify-content: space-around;
        width: 100%;
        li {
            padding: 0;
        }
       }
    }
`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background-color: #23d997;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 60%;
    @media (max-width:1300px) {
        left: 0%;
    }
`;

export default Nav;
