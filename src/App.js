import './assets/css/App.css';
import { useState } from 'react';
import Card from './Card'

function App() {
  const [showComponent, setShowComponent] = useState(true);
  const [showPreviousComponent, setShowPreviousComponent] = useState(false);
  const toggleComponent = () => {
    setShowComponent(false);
    setShowPreviousComponent(true);
  };

  const handleBackButtonClick = () => {
    setShowComponent(true);
    setShowPreviousComponent(false);
  };
  
  return (
    <div className="App">
      <div className='div-container' id="star-1" style={{top: 100,
    left: 370}}>
        <svg data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 247">
        <polygon className="cls-1" points="195.28 198.84 143.47 172.43 122.48 226.66 104.52 171.35 51.33 194.86 77.74 143.05 23.5 122.06 78.81 104.09 55.31 50.9 107.12 77.31 128.11 23.08 146.07 78.38 199.26 54.88 172.86 106.69 227.09 127.68 171.78 145.65 195.28 198.84"/>
      </svg>
      </div>
      <div id="star-2" className='div-container' style={{top: 30, right: 290}}>
        <svg  data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 247">
        <polygon className="cls-1" points="195.28 198.84 143.47 172.43 122.48 226.66 104.52 171.35 51.33 194.86 77.74 143.05 23.5 122.06 78.81 104.09 55.31 50.9 107.12 77.31 128.11 23.08 146.07 78.38 199.26 54.88 172.86 106.69 227.09 127.68 171.78 145.65 195.28 198.84"/>
      </svg>
      </div>
      <div className='info-container'>
      {showComponent ? (
        <h1>Hacé una pregunta al oráculo</h1>
      ) : null}
        {showComponent ? (
        <div>
          <button onClick={toggleComponent}>Quiero una carta!</button>
        </div>
      ) : null}
     
      {!showComponent && showPreviousComponent && <Card/>}
      {showPreviousComponent ? (
        <div>
          <button onClick={handleBackButtonClick}>Volver a preguntar</button>
        </div>
      ) : null}
     
      </div>
      <div id="star-3" className='div-container' style={{top: 550,
    left: 170}}>
        <svg  data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 247">
        <polygon className="cls-1" points="195.28 198.84 143.47 172.43 122.48 226.66 104.52 171.35 51.33 194.86 77.74 143.05 23.5 122.06 78.81 104.09 55.31 50.9 107.12 77.31 128.11 23.08 146.07 78.38 199.26 54.88 172.86 106.69 227.09 127.68 171.78 145.65 195.28 198.84"/>
      </svg>
      </div>
      <div id="star-4" className='div-container' style={{top: 600, right: 100}}>
        <svg data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 247">
        <polygon className="cls-1" points="195.28 198.84 143.47 172.43 122.48 226.66 104.52 171.35 51.33 194.86 77.74 143.05 23.5 122.06 78.81 104.09 55.31 50.9 107.12 77.31 128.11 23.08 146.07 78.38 199.26 54.88 172.86 106.69 227.09 127.68 171.78 145.65 195.28 198.84"/>
      </svg>
      </div>
      <p>@GUADA.SANDOVAL©2023</p>
    </div>
  );
}

export default App;
