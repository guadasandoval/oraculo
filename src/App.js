import './assets/css/App.css';
import { useState } from 'react';
import Card from './Card'
import oraculo from './assets/static/oraculo.png'

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
      <div className='info-container'>
        <div className='border'>              
        {showComponent ? (
        <img className='img-app' src={oraculo} alt=''/>
      ) : null}
        {showComponent ? (
        <h1>Preguntá al oráculo</h1>
      ) : null}
        {showComponent ? (
        <div>
          <button onClick={toggleComponent}>Quiero una carta!</button>
        </div>
      ) : null}
     
      {!showComponent && showPreviousComponent && <Card/>}
      {showPreviousComponent ? (
        <div>
          <button onClick={handleBackButtonClick}>Preguntar de nuevo</button>
        </div>
      ) : null}
        </div>
      </div>
      <p>@GUADA.SANDOVAL©2023</p>
    </div>
  );
}

export default App;
