// Write your Character component here
import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import styled from 'styled-components'

const StyledCharacter = styled.div`

border: 2px solid black;
border-radius: 10px;
width:38vw;
display:flex;
flex-direction:row;
justify-content:space-between;
margin: 5%;
background:rgba(0,0,0,0.4);


h3{
    padding: 0 5%;
    font-size: 1.8em;
    color:white;
}

.details{
    text-align: right;
    padding: 0 5%;
    font-size: 1.2em;
    color:white;
}
`


export default function Character(props) {
    const { name, height, mass, hairColor, skinColor, homeWorld } = props;
    return (
        <StyledCharacter>
            <h3>{name}</h3>

            <div className="details">
                <p>height:{height}cm</p>
                <p>mass:{mass}</p>
                <p>Hair Color:{hairColor}</p>
                <p>Skin Color:{skinColor}</p>
            </div>
        </StyledCharacter>
    )
}