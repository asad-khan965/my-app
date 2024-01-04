import { useState } from 'react';
import './App.css';
/* import About from './Components/About'; */
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
/* import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; */




function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState('null');
  const [change,changeMode]=useState('light');

  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 1500);

  }
  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#031837'
      showAlert('Dark mode has been enabled','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light mode has been enabled','success')
    }
  }
  const voggleMode=()=>{
    if(change==='light'){
      changeMode('green')
      document.body.style.backgroundColor='green'
      showAlert('Green mode has been enabled','success')
    }
    else{
      changeMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light mode has been enabled','success')
    }
  }
  return (
    <>
    
    <Navbar title='Textutils' mode={mode} change={change} toggleMode={toggleMode} voggleMode={voggleMode}/>
      <Alert alert={alert}/>
      
      
      <div className="container">
      <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
      </div> 
{/*     <Router>
      <Navbar title='Textutils' mode={mode} change={change} toggleMode={toggleMode} voggleMode={voggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
        
          <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
    </Router> */}
      
    </>
  );
}

export default App;
