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
.buttons{
  width: 80%;
  display:flex;
  justify-content:space-between;
 margin: 5% 10%;
}
button{
  border: 1px solid black;
  background:rgba(0,0,0,0.4);
  padding: 1% 2%;
  color: white;
  border-radius: 5px;
  text-align:center;
  &:hover{
    background-color:black;
  }
}

`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characterList, setCharacterList] = useState([])
  let [pageNumber, setPageNumber] = useState(1)
  const onPageChangeForward = event => {
    if(pageNumber < 9){
      pageNumber = setPageNumber(pageNumber+1)
    } else {
      pageNumber = 9
    }
    
  }
  const onPageChangeBack = event => {
    if(pageNumber > 1){
     pageNumber = setPageNumber(pageNumber-1) 
    } else {
      pageNumber = 1
    }
  }

  useEffect(() => {
    Axios.get(`https://swapi.py4e.com/api/people/?page=${pageNumber}`)
    .then(res => {
      setCharacterList(res.data.results)   
    })
    .catch(err => {
      console.log('error')
    })
  }, [pageNumber])


  return (
    <StyledApp className="App">
      <h1 className="Header">Characters</h1>
      <div className="contentContainer">
      {characterList.map((characterObj) => <Character name={characterObj.name} height={characterObj.height} mass={characterObj.mass} hairColor={characterObj.hair_color} skinColor={characterObj.skin_color} homeWorld={characterObj.homeWorld} />)}
      </div>
      <div className="buttons">
      <button onClick={onPageChangeBack}>Prev</button>
      <button onClick={onPageChangeForward}>Next</button>
      </div>
    </StyledApp>
  );
}

export default App;
