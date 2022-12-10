import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function ScreenBot({changeBG}) {
  let colors = ['#F9C335', '#35F983', '#CD35F9', '#3571F9', '#9A35F9']
  let [bgColor, setBgColor] = useState(1)
  let [isDarkMode, setIsDarkMode] = useState(false)
  let [isMenuShowing, setIsMenuShowing] = useState(false)

  let [time, setTime] = useState('00:00:00')
  let [date, setDate] = useState('00/00/0000')

  let handleStartBtn = ()=>{
    setIsMenuShowing(!isMenuShowing)
  }
  let handleChangeBG = ()=>{    
    // console.log(colors[Math.floor(Math.random() * ((colors.length-1) - 0 + 1) + 0)])
    // let newColor = colors[Math.floor(Math.random() * ((colors.length-1) - 0 + 1) + 0)]
    // let oldBgColor = bgColor
    // while(newColor === oldBgColor){
    //   newColor = colors[Math.floor(Math.random() * ((colors.length-1) - 0 + 1) + 0)]
    // }
    setBgColor(bg=>bg !== 4? bg+=1 : 0)
    // if(bgColor==4) bgColor=
    // setBgColor(bg=>{
    //   bgColor++
    //   if(bgColor==4) return bgColor=0
    // })
    console.log(bgColor)
    changeBG(colors[bgColor], isDarkMode)
  }
  useEffect(()=>{
    setInterval(function() {
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth() + 1;
      let day = today.getDate();
      let hour = today.getHours();
      let min = today.getMinutes();
      let sec = today.getSeconds();
      let am_pm = "AM";
    
      if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
      }
      if (hour === 0) {
        hour = 12;
        am_pm = "AM";
      }
    
      hour = hour < 10 ? "0" + hour : hour;
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;
      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;
    
      // let currentDate = [year, month, day].join("-")
      let currentDate = [day, month, year].join("/")
      let currentTime = hour + ":"
          + min + ":" + sec + " " + am_pm;
      // console.log(currentDate, currentTime)
      setTime(time=>time=currentTime)
      setDate(date=>date=currentDate)
      // document.getElementById("app")
      //     .innerHTML = currentDate + " " + currentTime;
    }, 1000)
  },[])
  return (
    <div className='screenBot'>
      <div className="screenBotMenu"
        style={isMenuShowing ? {bottom: '100%'} : {}}
      >
        <button onClick={()=>handleChangeBG()}>Change background</button>
        <button>Change light mode</button>
      </div>
      <div className="botMenu" onClick={()=>handleStartBtn()}>
        {isMenuShowing ? 'Close' : 'Start'}
      </div>
      <div className="botSpace"></div>
      <div className="botTimeDate">
        <span>{time}</span>
        <span>{date}</span>
      </div>

    </div>
  )
}
