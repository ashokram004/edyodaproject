import logo from './logo.svg';
import './ModuleAssignment.css';
import loop from './img/topic.svg';
import quiz from './img/moduleQuiz.svg';
import assignment from './img/activeAssignment.svg';
import clock from './img/clock.svg';
import calendar from './img/calendar.svg';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function ModuleAssignment() {
  return (
    <div className="ModuleAs">
      <div id="header">
      <p id="sitename">EDYODA</p>
      </div>

      <div id="header2">
        <p id="coursehead">DS031221</p>

        <p id="coursetitle">Data Scientist Program</p>

        <p id="hitext">Hi Test Learner!</p>

        <div id="profileimg"></div>
      </div>

      <div id="leftbar">
        <Link to="/">
        <div id="homebutton">
          <div id="homeimg"></div>
          <p>HOME</p>
        </div>
        </Link>
        <div id="modulesbutton">
          <div id="modulesimg"></div>
          <p>MODULES</p>
        </div>
        <Link to="/instructor">
        <div id="instructorsbuttonn">
          <div id="instructorimgg"></div>
          <p>INSTRUCTORS</p>
        </div>
        </Link>
      </div>

      <div id="modulesection">

        <div id="modulesleft">

        <Link to="/modulepython">
          <div id="modleft1">
          <img id="imgloop2" src={loop} alt="ss"/>  Python Loops
          </div>
        </Link>

        <Link to="/modulequiz">
          <div id="modleft2">
          <img id="imgquiz2" src={quiz} alt="ss"/>  Quiz-1: Data Types
          </div>
        </Link>

          <div id="modleft3">
          <img id="imgassign" src={assignment} alt="ss"/>  Assignment-1: <br/>Operators | Loops
          </div>


        </div>

        <div id="modulesright">
          <p id="mr1">Assignment-1: Operators | Loops</p>

          <p id="mr2">20 December 2021</p>

          <p id="mr3">Assignment Details</p>

          <p id="prob">3</p>
          <p id="probtag">Problems</p>
          <p id="score">100</p>
          <p id="scoretag">Total Score</p>

          <div id="modulerightboxx">

          <p id="prob2">3</p>
          <p id="probtag2">Problems</p>
          <p id="score2">100</p>
          <p id="scoretag2">Total Score</p>

          <div id="verticalline"></div>


          <p id="modstart1">Start:</p>

          <p id="modstart2"><img src={calendar} alt="Calendar" style={{height:'18px'}}/> 20 December 2021</p>

          <p id="modstart3"><img src={clock} alt="Calendar" style={{height:'18px'}}/> 07:30 PM</p>

          <p id="moddue1">Due:</p>

          <p id="moddue2"><img src={calendar} alt="Calendar" style={{height:'18px'}}/> 6 December 2021</p>

          <p id="moddue3"><img src={clock} alt="Calendar" style={{height:'18px'}}/> 11:59 PM</p>

          
          
          </div>
        </div>

      
        <div id="chatbot"></div>

        
      </div>
    </div>
  );
}

export default ModuleAssignment;
