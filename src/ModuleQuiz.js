import logo from './logo.svg';
import './ModuleQuiz.css';
import loop from './img/topic.svg';
import quiz from './img/activeModuleQuiz.svg';
import assignment from './img/assignment.svg';
import clock from './img/clock.svg';
import calendar from './img/calendar.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function ModuleQuiz() {
  return (
    <div className="ModuleQuiz">
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
          <div id="modleftt1">
          <img id="imgloop2" src={loop} alt="Python"/>   Python Loops
          </div>
        </Link>


        <div id="modleftt2">
        <img id="imgquiz" src={quiz} alt="Quiz"/> Quiz-1: Data Types
        </div>

        <Link to="/moduleassign">
          <div id="modleftt3">
          <img id="imgassign2" src={assignment} alt="Assignment"/>  Assignment-1: <br/>Operators | Loops
          </div>
        </Link>

        </div>

        <div id="modulesright">
          <p id="mr1">Quiz-1: Data Types</p>

          <p id="mr2">16 December 2021, Thursday</p>

          <p id="mr3">Quiz Details</p>

          

          <div id="modulerightboxx">

          <p id="ques">10</p>
          <p id="questag">Questions</p>
          <p id="dur">-</p>
          <p id="durtag">Duration</p>
          <p id="score1">125</p>
          <p id="scoretag1">Total Score</p>

          <div id="verticalline"></div>


          <p id="modstart1">Start:</p>

          <p id="modstart2"><img src={calendar} alt="Calendar" style={{height:'18px'}}/> 16 Dec 2021</p>

          <p id="modstart3"><img src={clock} alt="Calendar" style={{height:'18px'}}/> 07:30 PM</p>

          <p id="moddue1">Due:</p>

          <p id="moddue2"><img src={calendar} alt="Calendar" style={{height:'18px'}}/> 19 Dec 2021</p>

          <p id="moddue3"><img src={clock} alt="Calendar" style={{height:'18px'}}/> 11:59 PM</p>

          
          </div>
        </div>

      
        <div id="chatbot"></div>

        
      </div>
    </div>
  );
}

export default ModuleQuiz;
