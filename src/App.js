import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h1>Welcome to My World!</h1>
        
        <p>
          Silakan Pilih <strong>Tombol</strong> dibawah ini:
        </p>

        <a
          className="App-link"
          href="https://www.linkedin.com/in/ihsandroid"
          target="_blank"
          rel="noopener noreferrer"
        >
        <p>Linkedin</p>
        </a>

        <a
          className="App-link"
          href="https://github.com/hahamen-ihs"
          target="_blank"
          rel="noopener noreferrer"
        >
        <p>Github</p>
        </a>

        <a
          className="App-link"
          href="https://www.ihsanmagazine.com"
          target="_blank"
          rel="noopener noreferrer"
        >
        <p>Website</p>
        </a>

        <a
          className="App-link"
          href="https://www.youtube.com/c/ihsanmagazine"
          target="_blank"
          rel="noopener noreferrer"
        >
        <p>Youtube</p>
        </a>

    

      </header>

    <footer>
      <p>With Love By Ihsandroid</p>
    </footer>

    </div>
  );
}

export default App;
