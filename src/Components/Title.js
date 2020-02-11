import React from "react";
import styled from "styled-components";

const Heading1 = styled.h3`
    color: white;
`;

export default function Title(props) {
    return (
        <div>
            <Heading1>Title: {props.nasaData.title}</Heading1>
        </div>
    );
}