import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: #fff;
  font-size: 15px;
  font-family: "Space Mono";
  background: #000;
  border: 1px solid white;
  border-radius: 3px;
  @media only screen and (max-width: 600px) {
    width: 25%;
    margin: 10px;
    padding: 15px;
    text-align: left;
  }
`;

const Button = styled.button`
  padding: .8em;
  margin: 0.6em;
  color: black;
  background: #ccc;
  font-size: 15px;
  font-family: "Space Mono";
  border: none;
  border-radius: 3px;
`;


export default function Date(props) {
   const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    const dateHandler = ()=> {
        const newDate = `&date=${year}-${month}-${day}`
        console.log(newDate);
        props.setDate(newDate);
        props.setNasaData({});
  }
    const clearDate = ()=> {
        setDay('');
        setMonth('');
        setYear('');
        props.setDate('');
    }
    return (
      <div>
        <Input
          onChange={e => setMonth(e.target.value)}
          value={month}
          placeholder="Month"
        />
        <Input
          onChange={e => setDay(e.target.value)}
          value={day}
          placeholder="Day"
        />
        <Input
          onChange={e => setYear(e.target.value)}
          value={year}
          placeholder="Year"
        />
        <Button onClick={dateHandler}>View</Button>
        <Button onClick={clearDate}>Back to Today</Button>
      </div>
    );
}