import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import styled, { keyframes } from 'styled-components'
import Character from './components/Character.js'
import Details from './components/Details.js'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setChracters] = useState([])
  const [currentCharacterId, setCurrentCharacterId] = useState(null)

  const openDetails = (id) => {
    setCurrentCharacterId(id);
  };

  const closeDetails = () => {
    setCurrentCharacterId(null);
  };

  useEffect(()=>{
    axios.get(`https://swapi.dev/api/people/`)
    .then(function(res){
      console.log(res)
      console.log(res.data)
      setChracters(res.data)
    })
    .catch(function(err){
      console.log(err)
    })
  }, [])

  /*I imported a font with a link on line 13 of the public/index.html.
  If the 'CHARACTERS' header isnt loading/working for you, you can remove
  that link and erase the font-family on like 44 below*/

  const StyledHeader = styled.h1`
    color: ${pr => pr.theme.starWarsYellow};
    font-family: 'Press Start 2P', cursive;
    font-size: 3rem;
    text-shadow: 1.5px 1px 5px #fff;
  `

  return (
    <div className="App">
      <StyledHeader className="Header">CHARACTERS:</StyledHeader>
      {
        characters.map((character, index) => {
          return <Character key={index + 1} info={character} openDetails={openDetails} cId={index + 1}/>
        })
      }
      {currentCharacterId && (
        <Details characterId={currentCharacterId} close={closeDetails} />
      )}
    </div>
  );
}

export default App;
