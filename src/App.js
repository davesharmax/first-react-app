
import './App.css';
import About from './components/About';
import React, { useState } from 'react'

import Navbar from './components/Navbar';
import Alert from './components/Alert';

import TextUtils from './components/TextUtils';
import {Routes} from 'react-router-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';




function App() {
  const [mode,setmode] = useState('light');
  const [alert,setalert] = useState(null);

  const showAlert=(message,type)=>{
    setalert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
}


  const handleModechange=()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor ='darkblue';
      
      showAlert("Dark-mode has been enabeled","success");
    }else{
      setmode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Dark-mode has been disabeled","success");
    }
  }


  return (
    <>
    <Router>
    <Navbar title =" TextUtils" mode={mode} handleModechange={handleModechange} about="About Us"/>
   <Alert alert={alert} handleModechange={handleModechange}/>
    
    <Routes>
          <Route exact path="/about" element={<About mode={mode} />}>
          </Route>
          <Route exact path="/" element={<TextUtils mode={mode} heading="Enter the text here"/>}>
          </Route>
        </Routes>

   
    </Router>
    </>
  );
}
export default App;
