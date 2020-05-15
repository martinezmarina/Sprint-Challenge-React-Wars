import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import Character from './components/Character'
import styled from 'styled-components'

const StyledApp = styled.div`
.contentContainer{
  display:flex;
flex-direction: row;
flex-wrap:wrap;
justify-content:space-evenly;
}

`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characterList, setCharacterList] = useState([])

  useEffect(() => {
    Axios.get(`https://swapi.py4e.com/api/people/`)
    .then(res => {
      setCharacterList(res.data.results)   
    })
    .catch(err => {
      console.log('error')
    })
  }, [])
  

  return (
    <StyledApp className="App">
      <h1 className="Header">Characters</h1>
      <div className="contentContainer">
      {characterList.map((characterObj) => <Character name={characterObj.name} height={characterObj.height} mass={characterObj.mass} hairColor={characterObj.hair_color} skinColor={characterObj.skin_color} homeWorld={characterObj.homeWorld} />)}
      </div>
    </StyledApp>
  );
}

export default App;
