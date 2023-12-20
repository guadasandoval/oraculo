import React, {useState, useEffect} from 'react'
import './assets/css/Card.css'
import confia from './assets/static/confia.png'
import partir from './assets/static/partir.png'
import calma from './assets/static/calma.png'
import paciencia from './assets/static/paciencia.png'
import tiempo from './assets/static/tiempo.png'

export default function Card() {
  const [selectedItem, setSelectedItem] = useState(null);
   
  //   const getRandomItem = () => {
  //     const randomIndex = Math.floor(Math.random() * items.length);
  //     const selectedRandomItem = items[randomIndex];
  //     setRandomItem(selectedRandomItem);
  // };

  useEffect(() => { 
    let items = [
        {img: partir, quote: 'Es momento de partir'},
        {img: '', quote: 'No vale la pena'},
        {img: calma, quote: 'Tomalo con calma'},
        {img: confia, quote: 'Confiá en vos'},
        {img: '', quote: 'Falta algo'},
        {img: '', quote: 'Tomá acción'},
        {img: paciencia, quote: 'Paciencia'},
        {img: '', quote: 'Está cerca'},
        {img: tiempo, quote: 'En un tiempo'},
        {img: '', quote: 'Claramente, SI'},
    ]
    const timeoutId = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * items.length);
      setSelectedItem(items[randomIndex]);
    }, 2000); // Seleccionar después de 2000 milisegundos (2 segundos)

    // Limpieza del temporizador al desmontar el componente
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
    <div className="card">
        {selectedItem ? (
        <div>
          <img src={selectedItem.img} alt="" className='img-card'/>
          <h2 className='h2-card'>{selectedItem.quote}</h2>
        </div>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="#f1ab1e"  strokeLinejoin="round" width="30" height="30" x="85" y="85" rx="0" ry="0"><animate attributeName="rx" calcMode="spline" dur="0.7" values="15;15;5;15;15" keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1" repeatCount="indefinite"></animate><animate attributeName="ry" calcMode="spline" dur="0.7" values="15;15;10;15;15" keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1" repeatCount="indefinite"></animate><animate attributeName="height" calcMode="spline" dur="0.7" values="30;30;1;30;30" keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1" repeatCount="indefinite"></animate><animate attributeName="y" calcMode="spline" dur="0.7" values="40;170;40;" keySplines=".6 0 1 .4;0 .8 .2 1" repeatCount="indefinite"></animate></rect></svg>
      )}
    </div>
   
    </>
  )
}
