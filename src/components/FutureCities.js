import React from 'react';
import './FutureCities.css';

const FutureCities = () => {
  const cities = [
    {
      id: 1,
      name: "Neo Tokyo",
      description: "La ciudad que nunca duerme, iluminada por neones y hologramas",
      image: "https://images.unsplash.com/photo-1533050487297-09b450131914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      name: "Sky Haven",
      description: "Rascacielos flotantes conectados por puentes de luz",
      image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      name: "Eco Genesis",
      description: "Donde la naturaleza y la tecnología coexisten en perfecta armonía",
      image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 4,
      name: "Quantum Valley",
      description: "El centro de la innovación cuántica y la realidad aumentada",
      image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
    }
  ];

  return (
    <div className="future-cities">
      <h2>Ciudades del Futuro</h2>
      <div className="cities-grid">
        {cities.map(city => (
          <div key={city.id} className="city-card hover-effect">
            <div className="city-image">
              <img 
                src={city.image} 
                alt={city.name}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
            <div className="city-info">
              <h3>{city.name}</h3>
              <p>{city.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FutureCities;
