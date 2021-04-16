import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components'

export default function Details(props) {
  const { characterId, close } = props;
  const [details, setDetails] = useState({});

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${characterId}`)
      .then((res) => {
        setDetails(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [characterId])

  const StyledDiv = styled.div`
    border: 2px dashed ${pr => pr.theme.starWarsYellow};
    width: 30%;
    margin: auto;
    border-radius: 8px;
    margin-top: 3%;

    h2 {
        font-family: Rockwell;
        color: ${pr => pr.theme.starWarsBlue}
    }

    ul {
        font-family: Rockwell;
        color: ${pr => pr.theme.starWarsBlue}
    }
    ul li {
        list-style-type: none;
    }
    
    button {
        color: white;
        background-color: ${pr => pr.theme.buttonColor};
        border-radius: 8px;
        border: 2px dotted yellow;
        font-family: Rockwell;
        padding: .7%;

        &:hover{
            border: 3px solid yellow; 
        }
    }
  `

  return (
    <StyledDiv className='container'>
      <h2>Some info about {details.name}:</h2>
      <ul>
          <li>Birth year: {details.birth_year}</li>
          <li>Gender: {details.gender}</li>
          <li>Mass: {details.mass}</li>
          <li>Height: {details.height}</li>
          <li>Eye color: {details.eye_color}</li>
          <li>Hair color: {details.hair_color}</li>
          <li>Skin color: {details.skin_color}</li>
      </ul>
      <button onClick={close}>Close</button>
    </StyledDiv>
  );
}