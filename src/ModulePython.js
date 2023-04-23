import logo from './logo.svg';
import loop from './img/activeTopic.svg';
import prewatch from './img/topic.svg';
import quiz from './img/moduleQuiz.svg';
import assignment from './img/assignment.svg';
import sessionplan from './img/sessionplan.svg';
import references from './img/doc.svg';
import cam from './img/videocam2.svg';

import './ModulePython.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function ModulePython() {
  return (
    <div className="ModulePython">
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

    
        <div id="modlefttt1">
         <img id="imgloop1" src={loop} alt="ss"/> Python Loops
        </div>


        <Link to="/modulequiz">
          <div id="modlefttt2">
          <img id="imgquiz2" src={quiz} alt="ss"/> Quiz-1: Data Types
          </div>
        </Link>

        <Link to="/moduleassign">
          <div id="modlefttt3">
          <img id="imgassign2" src={assignment} alt="ss"/>  Assignment-1: <br/>Operators | Loops
          </div>
        </Link>

        </div>

        <div id="modulesright">
          <p id="pr1">Python Loops</p>

          <p id="pr2">15 December 2021, Wednesday, 07:30 PM</p>

          <p id="pr3">DAILY FEEDBACK</p>

          
         

          <div id="modulerightbox">

            <p id="mrr1">Session Plan</p>
            <p id="mrr2">LIVE session is about to start. Please stay tuned.</p>

            <div id="mrr3">JOIN LIVE SESSION</div>

            <p id="mrr4">Sub-Topics</p>
            <p id="mrr5">1. Sorting and Indexing Dataframe</p>
            <p id="mrr6">2. Filtering Dataframe</p>
            <p id="mrr7">3. Usage of loc and iloc functions</p>

            <p id="mrr8">Session Details</p>
          
          </div>

          <div id="modulerightboxhead">
            <div id="modhead1">
            <img src={sessionplan} alt="Session plan" style={{height:'25px', position:'absolute', top:'17px',left:'40px'}}/>  SESSION PLAN
            </div>
            <div id="modhead2">
            <img src={prewatch} alt="Pre-watch videos" style={{height:'25px', position:'absolute', top:'17px',left:'290px'}}/> PRE-WATCH VIDEOS
            </div>
            <div id="modhead3">
            <img src={cam} alt="Session Recording" style={{height:'22px', position:'absolute', top:'18px',left:'560px'}}/>  SESSION RECORDING
            </div>
            <div id="modhead4">
            <img src={references} alt="References" style={{height:'18px', position:'absolute', top:'20px',left:'880px'}}/>  REFERENCES
            </div>
          </div>

          <div id="tabheadwhite"></div>
        </div>

      
        
        <div id="chatbot"></div>
        
      </div>
    </div>
  );
}

export default ModulePython;
