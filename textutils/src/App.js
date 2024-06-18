import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TF from './components/TF';
import Alert from './components/Alert';
// import About from './components/About';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} /> */}
            {/* <Route path="/" element={ */}
              <TF showAlert={showAlert} heading="Enter text to analyse: " mode={mode} />
              {/* } /> */}
          {/* {/* </Routes>
        </div>
      </Router> */}
    </> 
  );
}

export default App;
