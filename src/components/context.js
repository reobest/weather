import React, { useState, useContext,useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
const AppContext = React.createContext()
const alankey = `a0a5cdfac8cebb6183fddb15073920a72e956eca572e1d8b807a3e2338fdd0dc/stage`;
const AppProvider = ({ children }) => {
    const [cardOne,setCardOne] = useState(false)
    const [cardTwo,setCardTwo] = useState(false)
    const [cardThree,setCardThree] = useState(false)
    const [showCards,setShowCards] = useState(false)
    const [articals,setArticals] = useState([])
    const [Command,setCommand] = useState("")
    const [weather,setWeather] = useState([])
    const [start,setStart] = useState(false)
    const [wetherPage ,setWeatherPage] = useState(false)
    const [keyWord,setKeyWord] = useState("")
 
    useEffect(() => {
        alanBtn({
          key:alankey,
          onCommand:({code,command,city,country}) => {
            if(command === 'reo') { 
              setStart(true)           
            }
            if(command === '1') {
              setCommand(city)
                setCardTwo(false)
                setCardThree(false)
                setCardOne(true)
                setWeatherPage(true)
            }
            if(command === '2') {
              setCommand(code)
                setCardOne(false)
                setCardTwo(true)
                setCardThree(false)
                setWeatherPage(true)
            }
            if(command === '3') {
              setCommand(country)
                setCardTwo(false) 
                setCardThree(true)
                setCardOne(false)
                setWeatherPage(true)
            }  
          }  
        })
    },[])


    const handleNavigate = async (KeyWord) => {
        const API_KEY = `6e1c1b84f4266237ace3e568fbf81eb3`;
        let WEATHER_API_URL = '' 
        if(KeyWord == "1") {
          WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${Command}&appid=${API_KEY}`; 
        }
        else if(KeyWord == "2") {
          WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?id=${Command}&appid=${API_KEY}`;
        }
        else if(KeyWord == "3") {
          WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${Command}&apiKey=${API_KEY}`
           await  fetch(WEATHER_API_URL)
            .then(res => res.json())
            .then(data => {
              setWeather(data.list)
            } ).catch(error => {
              console.error('Error:', error);
            })
         
        }
           await  fetch(WEATHER_API_URL)
            .then(res => res.json())
            .then(data => {
                setArticals(data)
            } ).catch(error => {
              console.error('Error:', error);
            })
        
    }
    useEffect(() => {
      handleNavigate()
     }, [])
  return (
    <AppContext.Provider value={{cardOne,setCardOne,cardTwo,setCardTwo,cardThree,setCardThree,handleNavigate,alanBtn,articals,weather,setWeather,setShowCards,showCards,start,wetherPage,keyWord,setKeyWord}}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }