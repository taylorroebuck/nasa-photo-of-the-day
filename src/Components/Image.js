import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
    color: white;
    font-size: 1rem;
    width: 80%;
    margin-left: 10%;
    background-color: black;
    text-align: center;
    opacity: 0.6;
`;

export default function Image(props) {
    return (
        <div>
            <img
            src={props.nasaData.hdurl}
            width="80%"
            alt="NASA photo"
            />
            <Paragraph>{props.nasaData.explanation}</Paragraph>
        </div>
    );
}