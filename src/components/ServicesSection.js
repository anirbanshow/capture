import React, { useEffect } from 'react';

// Import Icons
import clock from '../img/clock.svg';
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

// Styles
import styled from "styled-components";
import { About, Description, Image } from "../styles";
import { fade } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {

    const [element, controls] = useScroll();

    return (
        <Services
            variants={fade}
            animate={controls}
            initial="hidden"
            ref={element}
        >
            <Description>
                <h2>High <span>quality</span> service.</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p> Lorem ipsum dolor sit amet. </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork" />
                            <h3>Teamwork</h3>
                        </div>
                        <p> Lorem ipsum dolor sit amet. </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p> Lorem ipsum dolor sit amet. </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="money" />
                            <h3>Money</h3>
                        </div>
                        <p> Lorem ipsum dolor sit amet. </p>
                    </Card>
                </Cards>
            </Description>

            <Image>
                <img src={home2} alt="home 2" />
            </Image>

        </Services>
    )
}

const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div`
    flex: 1;
    flex-basis: 50%;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background-color: white;
            color: black;
            padding: 1rem;
        }
    }
`;

export default ServicesSection;