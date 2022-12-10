import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Loading({upDateMain}) {
  let [loadingUserName, setLoadingUserName] = useState('')
  let [loadingUserPass, setLoadingUserPass] = useState('')
  let [isLoaded, setIsLoaded] = useState(false)

  useEffect(()=>{
    function typeWriter(text, textSetState, textState, isPass) {
      const textArray = text.split('');
      textArray.forEach((letter, i) =>{
          setTimeout(() => (textSetState(textState=>textState+=letter)), 115 * i)
      });
      
    }
    typeWriter('Prince Jeffrey', setLoadingUserName, loadingUserName, false);
    setTimeout(()=>typeWriter('*********', setLoadingUserPass, loadingUserPass, true),2500)
    setTimeout(()=>setIsLoaded(load=>load = !isLoaded),3800)
    // setTimeout(()=>{
    //   setLoadingUserName(loadingUserName=>loadingUserName='')
    //   setLoadingUserPass(loadingUserPass=>loadingUserPass='')
      
    // },7500)

  },[])
  function handleMainPage(isLoaded){
    if(!isLoaded) return
    upDateMain(isLoaded)
      setLoadingUserName(loadingUserName=>loadingUserName='')
      setLoadingUserPass(loadingUserPass=>loadingUserPass='')
  }
  return (
    <div className="loadingContainer">
      <div className="formLoadingContainer">
        <div className="pfpLoading border">
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" className="sc-crHmcD jEZbbz" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
        </div>
        <div className="inputLoadingContainer">
          <input className='inputLoading border' type="text" value={loadingUserName} readOnly="readOnly"/>
          <input className='inputLoading border' type="text" value={loadingUserPass} readOnly="readOnly"/>
        </div>
        <button className="buttonLoading border"
          // style={animation: isLoaded ? 'scale 2.5s ease-in-out infinite;': ''}}
          style={isLoaded ? {animation:'scale 2.5s ease-in-out infinite'} : {}}
          onClick={()=>handleMainPage(isLoaded)}
        >{isLoaded? 'Login':'Loading'}</button>
      </div>
    </div>
  )
}
