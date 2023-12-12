import React, {useState, useEffect} from 'react'
import './assets/css/Card.css'
import confia from './assets/static/confia.png'

export default function Card() {
  const [selectedItem, setSelectedItem] = useState(null);
   
  //   const getRandomItem = () => {
  //     const randomIndex = Math.floor(Math.random() * items.length);
  //     const selectedRandomItem = items[randomIndex];
  //     setRandomItem(selectedRandomItem);
  // };

  useEffect(() => { 
    let items = [
        {img: '', quote: 'Es momento de partir'},
        {img: '', quote: 'No vale la pena'},
        {img: '', quote: 'Tomalo con calma'},
        {img: '', quote: 'Confiá en vos'},
        {img: '', quote: 'Falta algo'},
        {img: '', quote: 'Tomá acción'},
        {img: '', quote: 'Paciencia'},
        {img: '', quote: 'Está cerca'},
        {img: '', quote: 'En un tiempo'},
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
          <img src={confia} alt="" className='img-card'/>
          <h1 className='h1-card'>{selectedItem.quote}</h1>
        </div>
      ) : (
        <p>Seleccionando...</p>
      )}
    </div>
   
    </>
  )
}
