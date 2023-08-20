import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MovieState } from '../movieState';

// Animation
import { motion } from 'framer-motion';
import { pageAnimation } from './../animation';

const MovieDetail = () => {

    let location = useLocation()
    const url = location.pathname;

    const [movies, setmovies] = useState(MovieState);
    const [movie, setmovie] = useState(null);

    function fetchMovie() {
        const currentMovie = movies.filter((stateMovie) => {
            return stateMovie.url === url;
        });
        setmovie(currentMovie[0]);
    }

    // UseEffect
    useEffect(() => {
        fetchMovie();
    }, [url]);

    return (
        <>
            {
                movie && (
                    <Details
                        exit="exit"
                        variants={pageAnimation}
                        initial="hidden"
                        animate="show"
                    >
                        <HeadLine>
                            <h2>{movie?.title}</h2>
                            <img src={movie?.mainImg} alt='movie' />
                        </HeadLine>
                        <Awards>
                            {
                                movie?.awards.map((award, index) => (
                                    <Award
                                        key={index}
                                        title={award.title}
                                        description={award.description}
                                    />
                                ))
                            }
                        </Awards>
                        <ImageDisplay>
                            <img src={movie?.secondaryImg} alt='movie' />
                        </ImageDisplay>
                    </Details>
                )
            }
        </>
    )
}

const Details = styled(motion.div)`
    color: white;
`;

const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        text-align: center;
        margin-bottom: 4rem;
    }
    img {
        width: 100%;
        object-fit: cover;
    }
`;

const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1100px) {
        margin: 2rem;
        display: block;
    }
`;

const AwardStyle = styled.div`
    padding: 5rem;
    h3: {
        font-size: 2rem;
    }
    .line {
        width: 100%;
        background-color: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p {
        padding: 2rem 0rem;
    }
`;

const ImageDisplay = styled.div`
    min-height: 50vh;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;

// Award Component
const Award = ({ title, description }) => {
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}

export default MovieDetail;