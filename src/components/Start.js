import React from 'react'
import styled from 'styled-components';
import weather from '../images/weather.jpeg';
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom';
const Start = () => {
  const context = useGlobalContext()
    const {start} = context 
    console.log(start)
  return (
    <WeatherContainer>
      <Alan style={{color: start ? '#3498db' : '#ed2020'}}>Alan</Alan>
     <Link to={start ? `/start` : '/'}><ChoiceButton style={{background: start ? '#3498db' : '#ed2020'}}>Try Saying : WEATHER</ChoiceButton></Link>
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
    color: rgb(92 143 255 / 95%);
    margin: 0;
`
const ChoiceButton = styled.div`
  cursor: pointer;
  margin-top: 20px;
  width: 400px;
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border-radius: 1px;
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  border-color: #3498db;
  color: #fff;
  transition: all 350ms ease-in-out;
  :hover {
    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
    color: #3498db;
    background-color: #fff;
  }
  @media screen and (max-width:400px) {
      width: 300px;
      font-size: 12px;
    }
`