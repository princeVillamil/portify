import React from 'react'

export default function App({appName, appLogo, handleShowApps}) {
  let showAppsHandler = (e)=>{
    handleShowApps(e)
  }
  return (
    <div className='app'>
      <div className="appBg" onClick={(e)=>showAppsHandler(e)}>
        {appLogo}
      </div>
      <h4>{appName}</h4>
    </div>
  )
}
