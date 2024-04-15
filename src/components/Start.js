import React from 'react'
import styled from 'styled-components';
import weather from '../images/Weather.jpg';
import { useGlobalContext } from './context'
import { useNavigate } from 'react-router-dom';
const Start = () => {
  const context = useGlobalContext()
  const { start } = context
  const navigate = useNavigate();
  if (start == true) {
    setTimeout(() => {
      navigate('/start')
    }, 2000);
  } else {
    setTimeout(() => {
      navigate('/')
    }, 2000);
  }
  return (
    <WeatherContainer>
      <Alan start={start}>Alan</Alan>
      <ChoiceButton start={start}> Say : WEATHER</ChoiceButton>
    </WeatherContainer>
  )
}

export default Start
const WeatherContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${weather});
  background-size: cover;
`
const Alan = styled.h1`
    font-size: 60px;
    letter-spacing: 5px;
    color: ${props => props.start ? '#3498db' : '#ed2020'};
    margin: 0;
    transition: color 2s ease-in-out;
`
const ChoiceButton = styled.div`
  cursor: ${props => props.start ? "pointer" : "auto"};
  width: 400px;
  box-sizing: border-box;
  background-color: ${props => props.start ? "#3498db" : "#ed2020"};
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  padding: 1.2em 2.8em;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #fff;
  transition: background-color 2s ease-in-out;
  @media screen and (max-width:400px) {
      width: 300px;
      font-size: 12px;
    }
`