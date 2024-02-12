import React from 'react'
import styled from 'styled-components';
import weather from '../images/Weather.jpg'
import classifications from './Classify';
import { useGlobalContext } from './context';
import { useNavigate} from 'react-router-dom';
const Weather = () => {
  const navigate = useNavigate();
    const context = useGlobalContext()
    const {cardOne,cardTwo,cardThree,handleNavigate,keyWord,setKeyWord,start} = context 
    const handleKeyWord = () => {
      if(cardOne == true ) {
        setKeyWord("1")
      }else if(cardTwo == true){
        setKeyWord("2")
      }else if(cardTwo == true){
        setKeyWord("3")
      }else{
        setKeyWord("")
      }
    }
    const handleWeatherPage = () => {
      if(keyWord == "1" && cardOne ) {
        handleNavigate(keyWord)
        navigate(`/${keyWord}`)
      }
      if(keyWord == "2" && cardTwo ) {
        handleNavigate(keyWord)
        navigate(`/${keyWord}`)
      }
      if(keyWord == "3" && cardThree ) {
        handleNavigate(keyWord)
        navigate(`/${keyWord}`)
      }
    }
    handleKeyWord()
    handleWeatherPage()

  const newCards = classifications.map((classification) => {
        const {footer,id} = classification  
 return <Card key={id}>
           <TrySaying>Try Saying : {footer}</TrySaying>
        </Card>
  }) 
  return (
    <>
    { start && <WeatherContainer>
      <CardContainer>
        <Header>Alan AI Weather Application</Header>
          {newCards}
        </CardContainer> 
          <CodeLinks href='http://bulk.openweathermap.org/sample/'>Country Codes</CodeLinks> 
    </WeatherContainer> }
    </>
  )
}

export default Weather
const CodeLinks = styled.a`
    width: 130px;
    height: 40px;
    display: flex;
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: 500;
    justify-content: center;
    border-radius: 5px;
    align-items: center;
    background: #fff;
    position: absolute;
    bottom: 30px;
    color: #000;
`
const Header = styled.h1`
  margin:0;
  text-align:center;
  position: absolute;
  top: 20px;
  width:100%;
  letter-spacing:5px;
  color:#000;
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
const TrySaying = styled.p`
  margin: 0;
  text-align: left;
  margin-left: 20px;
  font-size: 17px;
  color: #000;
  @media screen and (max-width:400px) {
      font-size: 12px;
    }
`

