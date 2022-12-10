import React from 'react'
import { useEffect } from 'react'

export default function Windows({handleIntro}) {

  useEffect(()=>{
    let draggable = document.getElementById('draggable')
    let draggableContrls = document.getElementById('draggableContrls')
    var isMouseDown,initX,initY,height = draggable.offsetHeight,width = draggable.offsetWidth;
    draggableContrls.addEventListener('mousedown', function(e) {
      isMouseDown = true;
      document.body.classList.add('no-select');
      initX = e.offsetX;
      initY = e.offsetY;
    })
  
    document.addEventListener('mousemove', function(e) {
      if (isMouseDown) {
        var cx = e.clientX - initX,
            cy = e.clientY - initY;
        if (cx < 0) {
          cx = 0;
        }
        if (cy < 0) {
          cy = 0;
        }
        if (window.innerWidth - e.clientX + initX < width) {
          cx = window.innerWidth - width;
        }
        if (e.clientY > window.innerHeight - height+ initY) {
          cy = window.innerHeight - height;
        }
        draggable.style.left = cx + 'px';
        draggable.style.top = cy + 'px';
      }
    })
  
    draggable.addEventListener('mouseup', function() {
      isMouseDown = false;
      document.body.classList.remove('no-select');
    })


    function resize(elementId, buttonId) {
      const element = document.getElementById(elementId);
      const button = document.getElementById(buttonId);
      const min = 54;
      let initialWidth = 0, initialHeight = 0, mouseX = 0, mouseY = 0;
    
      //Mousedown event to control scaling with scale() and to add mouseup event to stop scaling with stop()
        button.addEventListener('mousedown', function(e) {
          getMousePositions(e);
          getElementDimensions();
          window.addEventListener('mousemove', scale);
          window.addEventListener('mouseup', removeScale);
        });
      
        //Get x and y mouse position
        function getMousePositions(e) {
          mouseX = e.pageX;
          mouseY = e.pageY;
        }
        
        //Get element height and width make property a number
        function getElementDimensions() {
          initialWidth = element.clientWidth;
          initialHeight = element.clientHeight;
        }
        
        //Sets the width and height bases on how the mouse moves to scale the element
        function scale(e) {
          const width = initialWidth + (e.pageX - mouseX);
          const height = initialHeight + (e.pageY - mouseY);
          if (width > min) {
            element.style.width = width + 'px';
          }
          if (height > min) {
            element.style.height = height + 'px';
          }
        }
        
        //Removes the scale() function to stop scaling element
        function removeScale() {
          window.removeEventListener('mousemove', scale);
        }
        
        //Mobile event listeners
        button.addEventListener("touchstart", function(e) {
          e.preventDefault();
          getAxisPositions(e);
          getElementDimensions();
          window.addEventListener('touchmove', scaleMobile);
          window.addEventListener('touchend', removeScaleMobile);
        });
      
        //Scale function for mobile
        function scaleMobile(e) {
          const width = initialWidth + (e.touches[0].pageX - mouseX);
          const height = initialHeight + (e.touches[0].pageY - mouseY);
          if (width > min) {
            element.style.width = width + 'px';
          }
          if (height > min) {
            element.style.height = height + 'px';
          }
        }
      
        //Mobile get touch location
        function getAxisPositions(e) {
          mouseX = e.touches[0].pageX;
          mouseY = e.touches[0].pageY;
        }
      
        //Removes Mobile Scale
        function removeScaleMobile() {
          window.removeEventListener('touchmove', scaleMobile);
        }
      }
    
    resize('draggable','button');
  },[])
  let introHandler = (e)=>{
    handleIntro(e.target)
  }
  return (
    <div id='draggable' className='windowsWrapper'>
      <div id='draggableContrls' className="windowsTopBar">
        <button className='windowsExit' onClick={introHandler}>X</button>
      </div>
      <div className="windowsContent">
        <h1>Hi, I'm Prince Villamil and I build things for the web!</h1>
        <p>I’m a software engineer who specialises in building exciting front-end applications, back-end applications and digital experiences.</p>
        <p>I have recently been working with (amongst other things): Javascript, React, Node.js, Express, MongoDB, HTML and a little CSS and Tailwind!</p>
        <p>
          <span>Note for this website:</span>
          <br></br>
          You can move windows by dragging from the top and resize them from the bottom right also, close windows using the top left X button (not on mobile devices).
        </p>
      </div>
      <div id="button"></div>
    </div>
  )
}
