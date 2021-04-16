// Write your Character component here
import React from 'react';
import styled, { keyframes } from 'styled-components'

const StyledDiv = styled.div`
    h3 {
        color: ${pr => pr.vader ? pr.theme.starWarsRed : pr.luke ? pr.theme.starWarsBlue : pr.theme.starWarsYellow};
        font-family: Rockwell;
        font-size: 180%;
    }

    button {
        color: white;
        background-color: ${pr => pr.theme.buttonColor};
        border-radius: 8px;
        border: 2px dotted yellow;
        font-family: Rockwell;
        padding: .5%;
        font-weight: bold;

        &:hover{
            border: 3px solid yellow; 
        }
    }
`

const Character = (props) => (
    <StyledDiv className='character' vader={props.info.name === 'Darth Vader'} luke={props.info.name === 'Luke Skywalker'}>
      <h3>{props.info.name}</h3>
      <button onClick={() => props.openDetails(props.cId)}>About me</button>
    </StyledDiv>
  );

  export default Character;