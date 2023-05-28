import React from 'react'
import styled from 'styled-components'
import weather from '../images/weather.jpeg'
import { useGlobalContext } from './context'
import cloudSuny from '../images/weather1.png'
import rain from '../images/rain.png'
import snow from '../images/snow.png'
import sunny from '../images/sunny.png'
const WeatherPages = () => {
    const context = useGlobalContext()
    const {articals,weather,cardThree} = context  
  return (
    <>
    <NewPagesContainer>
    <H>Alan AI Weather Application</H>
     { cardThree == true ?
     weather.map((w) => {
      return <CardDays>
      <Day>{w.dt_txt.slice(0,11)}</Day>
     { w.weather.map((w) => {
         if(w.main == 'Clouds') {
          return <img style={{width: "50px",transform: "translate(-5px,7px)"}} src={cloudSuny}></img>
        }else if (w.main == "Rain") {
          return <img style={{width: "50px",transform: "translate(-5px,7px)"}} src={rain}></img> 
        }
        else if (w.main == "Snow") {
          return <img style={{width: "50px",transform: "translate(-5px,7px)"}} src={snow}></img> 
        }
        else if (w.main == "Clear") {
          return <img style={{width: "50px",transform: "translate(-5px,7px)"}} src={sunny}></img> 
        }
     })
     }         
      <Max>{Math.floor(w.main.temp_max - 273)}°</Max>
      <Min>{Math.round(w.main.temp_min - 273)}°</Min>
   </CardDays>
     })
     
     
     :
    <Card key={Math.random()} >                              
                 <Cityname>Weather in {articals.name}</Cityname>
                 <Temp>{articals.weather.map((w) => {
                  if(w.main == 'Clouds') {
                    return <img style={{width: "50px",transform: "translate(-5px,7px)"}} src={cloudSuny}></img>
                  }else if (w.main == "Rain") {
                    return <img style={{width: "50px",transform: "translate(-5px,7px)"}} src={rain}></img> 
                  }
                  else if (w.main == "Snow") {
                    return <img style={{width: "50px",transform: "translate(-5px,7px)"}} src={snow}></img> 
                  }
                  else if (w.main == "Clear") {
                    return <img style={{width: "50px",transform: "translate(-5px,7px)"}} src={sunny}></img> 
                  }
                 })}{Math.floor(articals.main.temp - 273)}°C</Temp>
                 <Feelslike>Feels Like: {articals.weather.map((w) => {
                  if(w.main == 'Clouds') {
                    return <span style={{fontSize:"17px",fontWeight:"400",  color: "#b509f3"}}>{w.description}</span> 
                  }else if (w.main == "Rain") {
                    return <span style={{fontSize:"17px",fontWeight:"400",  color: "#b509f3"}}>{w.description}</span> 
                  }
                  else if (w.main == "Snow") {
                    return <span style={{fontSize:"17px",fontWeight:"400",  color: "#b509f3"}}>{w.description} </span> 
                  }
                  else if (w.main == "Clear") {
                    return <span>{w.description}</span> 
                  }
                 })}</Feelslike>
                 <Humidity><span style={{color:"#000"}}>Humidity:</span>  {articals.main.humidity}%</Humidity>
                 <Windspeed><span style={{color:"#000"}}>Wind Speed:</span>  {articals.wind.speed}  km/h</Windspeed>
                 <Pressure><span style={{color:"#000"}}>Pressure:</span>{articals.main.pressure}  hpa </Pressure>
    </Card>}
    </NewPagesContainer>
    </>
  )
}

export default WeatherPages
const H = styled.div`
margin:0;
text-align:center;
letter-spacing:5px;
color:#fff;
padding:10px 0;
font-size:4vw;
font-weight:400;
width:100%;
    @media screen and (max-width:400px) {
      font-size: 30px;
    }
`
const CardDays = styled.div`
  width: 110px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    background-color: #fff;
    height: 150px;
    margin: 10px;
    box-shadow: 5px 5px 5px #000;
`
const Day = styled.div``
const Max = styled.div`
 color: #ffd100;
 font-size: 24px;
 font-weight: 500;
`
const Min = styled.div`
color: #ffd100;
font-size: 17px;
font-weight: 300;
`
const NewPagesContainer = styled.div`
  width: 100%;
  min-height:100vh;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: url(${weather});
  background-size: cover;
`
const Card = styled.div`
box-sizing: border-box;
color: #000;
position: relative;
margin: 100px 10px;
background-color: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  height: 300px;
  border-radius: 15px;
  padding-left: 40px;
  @media screen and (max-width:400px) {
      margin: 0px 10px;
      transform: translateY(-80px);
      height: 350px;
    }
`
const Cityname = styled.p`
  font-size: 30px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 5px;
`
const Temp = styled.div`
font-size:45px;
font-weight: 500;
color: #ffd100;
margin-bottom: 5px;
`
const Feelslike = styled.h1`
margin: 0;
margin-bottom: 5px;
  font-size: 15px;
  font-weight: 400;
`
const Humidity = styled.span`
font-size: 15px;
font-weight: 400;
color: #b509f3;
 `
const Windspeed = styled.h5`
  background-color: transparent;
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 0;
  font-weight: 400;
  color: #b509f3;
`
const Pressure = styled.span`
margin: 0;
margin-top: 5px;
  font-size: 15px;
font-weight: 400;
color: #b509f3;
`