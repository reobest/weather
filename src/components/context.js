import React, { useState, useContext,useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
const AppContext = React.createContext()
const alankey = `a0a5cdfac8cebb6183fddb15073920a72e956eca572e1d8b807a3e2338fdd0dc/stage`;
const AppProvider = ({ children }) => {
    const [cardOne,setCardOne] = useState(true)
    const [cardTwo,setCardTwo] = useState(true)
    const [cardThree,setCardThree] = useState(true)
    const [showCards,setShowCards] = useState(false)
    const [articals,setArticals] = useState([])
    const [commanD,setCommanD] = useState("")
    const [weather,setWeather] = useState([])
    const [hover,setHover] = useState(false)
    const [start,setStart] = useState(false)

    const setHovering = () => {
         setHover(true)
    }
    const unsetHovering = () => {
      setHover(false)
 }
    const style = {
        backgroundColor:"#000",
    }
    const style2 = {
        backgroundColor:"#084849",
    } 
    useEffect(() => {
        alanBtn({
          key:alankey,
          onCommand:({q,command,s,country}) => {
            if(command === 'reo') { 
              setStart(true)           
            }
            if(command === '1') {
                setCommanD(q)
                setCardTwo(false)
                setCardThree(false)
            }
            if(command === '2') {
                setCommanD(s)
                setCardOne(false)
                setCardThree(false)
            }
            if(command === '3') {
                setCommanD(country)
                setCardTwo(false) 
                setCardOne(false)
            }  
          }  
        })
    },[])
    const handleClick = async (id) => {
        const API_KEY = `6e1c1b84f4266237ace3e568fbf81eb3`;
        let WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=cairo&appid=${API_KEY}`; 
        if(id == 1) {
          WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${commanD}&appid=${API_KEY}`; 
        }
        else if(id == 2) {
          WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?id=${commanD}&appid=${API_KEY}`;
        }
        else if(id == 3) {
          WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${commanD}&apiKey=${API_KEY}`
          const api = await  fetch(WEATHER_API_URL)
            .then(res => res.json())
            .then(data => {
              setWeather(data.list)
            } )
         
        }
        const api = await  fetch(WEATHER_API_URL)
            .then(res => res.json())
            .then(data => {
                setArticals(data)
            } )
        
    }
    useEffect(() => {
        handleClick()
     }, [])
  return (
    <AppContext.Provider value={{cardOne,setCardOne,cardTwo,setCardTwo,cardThree,setCardThree,handleClick,alanBtn,style,style2,articals,weather,setWeather,hover,setHovering,unsetHovering,setShowCards,showCards,start}}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }