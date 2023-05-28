import React from 'react'
import styled from 'styled-components';
import weather from '../images/weather.jpeg'
import classifications from './Classify';
import { useGlobalContext } from './context';
import { Link} from 'react-router-dom';
const Weather = () => {
    const context = useGlobalContext()
    const {cardOne,cardTwo,cardThree,handleClick,hover,setHovering,unsetHovering} = context
    const redirect = () => {
      window.location.replace('http://bulk.openweathermap.org/sample/')
    } 
    const newCards =   classifications.map((c) => {
        const {footer,id} = c  
            if(id ==1 && cardOne) {
                return <Link to={`/${id}`} key={id}><Card id={id}   onClick={(e) => handleClick(e.target.id)}>
           <TrySaying>Try Saying : {footer}</TrySaying>
        </Card></Link>
            }
            if(id ==2 && cardTwo) {
                return  <Link to={`/${id}`} key={id} onMouseOver={setHovering} onMouseOut={unsetHovering}><Card id={id}  onClick={(e) => handleClick(e.target.id)}>
           <TrySaying>{hover == true ? <span onClick={redirect}>Download Pdf Of Codes</span> : "Try Saying :" + footer}</TrySaying>
        </Card></Link> 
            }
            if(id ==3 && cardThree) {
              return  <Link to={`/${id}`} key={id}><Card id={id}   onClick={(e) => handleClick(e.target.id)}>
 <TrySaying>Try Saying :{footer}</TrySaying>
      </Card></Link> 
          }
      }) 
  return (
    <WeatherContainer>
        <CardContainer>
          <Header>Alan AI Weather Application</Header>
        {newCards}
        </CardContainer>
    </WeatherContainer>
  )
}

export default Weather
const Header = styled.h1`
  margin:0;
  text-align:center;
  position: absolute;
  top: 20px;
  width:100%;
  letter-spacing:5px;
  color:#fff;
  padding:10px 0;
  font-size:40px;
  font-weight:400;
  @media screen and (max-width:400px) {
      font-size: 20px;
  }
`

const WeatherContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${weather});
  background-size: cover;
  @media screen and (max-width:400px) {
      background-position-x: 20px;
    }
`
const CardContainer = styled.div`
display: flex;
width: 100%;
min-height: 100vh;
flex-direction: column;
justify-content: center;
background: url(${weather});
background-size: cover;
`
const Card  = styled.div`
position: relative;
letter-spacing: 1px;
text-align: center;
margin: 20px auto;
color: rgb(62 97 239 / 95%);
display: flex;
justify-content: center;
align-items: center;
width: 60%;
height: 100px;
border: #fff 1px solid;
font-weight: 500;
:hover{
    opacity:0.7;
    box-shadow: 0 0 40px #fff;
}
@media screen and (max-width:400px) {
      width:80%;
      font-size: 12px;
    }
`
const Alan = styled.h1`
    font-size: 60px;
    letter-spacing: 5px;
    color: rgb(92 143 255 / 95%);
    margin: 0;
    @media screen and (max-width:400px) {
      font-size: 40px;
    }

`
const TrySaying = styled.p`
  margin: 0;
  text-align: left;
  margin-left: 20px;
  font-size: 17px;
  color: #fff;
  @media screen and (max-width:400px) {
      font-size: 12px;
    }
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
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  transition: all 350ms ease-in-out;
  :hover {
    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
    color: #3498db;
    background-color: #fff;
  }
  @media screen and (max-width:400px) {
      width: 200px;
      font-size: 12px;
    }
`
