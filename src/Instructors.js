import logo from './logo.svg';
import './Instructors.css';
import React, { useState, useRef } from 'react';
import up from './img/uparrow.png'
import down from './img/downarrow.png'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Instructors() {

  const isOpenRef = useRef(false);


  let c = 0;

  function dropdown(){
    isOpenRef.current = !isOpenRef.current;
    if(c%2===0){
      document.getElementById("header3").style.visibility = "visible";
    }
    else{
      document.getElementById("header3").style.visibility = "hidden";
    }
    c += 1;
  }

  function fun(x){

    document.getElementById("courseheadd").innerHTML=x;
    document.getElementById("prog1").style.color = "white";
    document.getElementById("prog1").style.backgroundColor = "transparent";
    document.getElementById("prog2").style.color = "white";
    document.getElementById("prog2").style.backgroundColor = "transparent";
    document.getElementById("prog3").style.color = "white";
    document.getElementById("prog3").style.backgroundColor = "transparent";
    document.getElementById("prog4").style.color = "white";
    document.getElementById("prog4").style.backgroundColor = "transparent";


    if(x==="ECRD"){
      document.getElementById("prog1").style.color = "black";
      document.getElementById("prog1").style.backgroundColor = "white";
    }
    else if(x==="FSR222222"){
      document.getElementById("prog2").style.color = "black";
      document.getElementById("prog2").style.backgroundColor = "white";
    }
    else if(x==="DS261121"){
      document.getElementById("prog3").style.color = "black";
      document.getElementById("prog3").style.backgroundColor = "white";
    }
    else if(x==="DS031221"){
      document.getElementById("prog4").style.color = "black";
      document.getElementById("prog4").style.backgroundColor = "white";
    }

  }

  return (
    <div className="Instructors">
      <div id="header">
      <p id="sitename">EDYODA</p>
      </div>

      <div id="header2">
        <div id="dropbar" onClick={dropdown}>
        <p id="courseheadd">DS031221</p><div id="arrow1"></div><div id="arrow2"></div>
        </div>

        <p id="coursetitle">Data Scientist Program</p>

        <p id="hitext">Hi Test Learner!</p>

        <div id="profileimg"></div>
      </div>

      <div id="header3">
        <p id="selprog">Select Program</p>

        <div id="programs">
          <p id="prog1" onClick={()=>fun('ECRD')}>ECRD</p> 
          <p id="prog2" onClick={()=>fun('FSR222222')}>FSR222222</p>
          <p id="prog3" onClick={()=>fun('DS261121')}>DS261121</p>
          <p id="prog4" onClick={()=>fun('DS031221')}>DS031221</p>
        </div>
      </div>

      <div id="leftbar">
        <Link to="/">
        <div id="homebuttonnn">
          <div id="homeimggg"></div>
          <p>HOME</p>
        </div>
        </Link>

        <Link to="/modulepython">
          <div id="modulesbuttonnn">
            <div id="modulesimggg"></div>
            <p>MODULES</p>
          </div>
        </Link>
        
        <div id="instructorsbuttonnn">
          <div id="instructorimggg"></div>
          <p>INSTRUCTORS</p>
        </div>
      </div>

      <div id="instructorsection">
        Instructors Details Here

        <div id="chatbott"></div>
      </div>
    </div>
  );
}

export default Instructors;
