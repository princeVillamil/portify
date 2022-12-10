import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from './Loading';
import Screen from './Screen';


export default function MainPage() {
  let [isInMain, setIsInMain] = useState(false)
  let [mainBG, setMainBG] = useState('#F9C335')
  useEffect(()=>{
    document.body.style.backgroundColor = `${mainBG}`
  },)
  function upDateMain(isLoaded){
    console.log(isLoaded)
    setIsInMain(isLoaded)
  }
  function changeBG(bgColor, isDarkMode){
    console.log(bgColor, isDarkMode)
    setMainBG(mainBG=>mainBG=bgColor)
  }
  
  return (
    <div className="mainBody">
      {!isInMain ? <Loading upDateMain={upDateMain}/> : <Screen changeBG={changeBG} mainBG={mainBG}/>}
    </div>
  )
}
