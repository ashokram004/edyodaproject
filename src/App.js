import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from './Home';
import ModuleAssignment from './ModuleAssigment';
import ModuleQuiz from './ModuleQuiz';
import ModulePython from './ModulePython';
import Instructors from './Instructors';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/"  element={ <Home/> } />
          <Route path="moduleassign" element={ <ModuleAssignment/> } />
          <Route path="modulequiz"  element={ <ModuleQuiz/> } />
          <Route path="modulepython"  element={ <ModulePython/> } />  
          <Route path="instructor"  element={ <Instructors/> } />
        </Routes>
    </div>
  );
}

export default App;
