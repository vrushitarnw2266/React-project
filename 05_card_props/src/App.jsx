// App.js
import React from 'react';
import Card from './component/card';
import './index.css';

const products = [
  {
    title: "Nature View",
    description: "Relax in the beauty of nature.",
    image: "https://images.unsplash.com/photo-1696855082224-eefd738c5817?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwdmlld3xlbnwwfHwwfHx8MA%3D%3D",
    price: "12.7k",
    rating: 4.5
  },
  {
    title: "City Lights",
    description: "Experience the night life.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZTrkyJ1krrCL1Z9sxSeSHzDAtRBTcK4hhzg&s",
    price: "34.7k",
    rating: 4.2
  },
  {
    title: "Beach Vibes",
    description: "Sun, sea, and sand all in one place.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdCS-lQBMXemiv_CR-IlrObEI30GSQHIwd-g&s",
    price: "25.5k",
    rating: 4.7
  },
  {
    title: "Mountain Adventure",
    description: "A perfect getaway for hikers.",
    image: "https://images.unsplash.com/photo-1456139333202-745e9029f0ef?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBhZHZlbnR1cmV8ZW58MHx8MHx8fDA%3D",
    price: "50.6k",
    rating: 4.8
  },
  {
    title:"Train View",
    description: "A train window is nature's artwork.",
    image : "https://static.euronews.com/articles/stories/08/27/80/68/1200x675_cmsv2_2cc83ee7-b33f-5beb-bfa9-3996a71d8d87-8278068.jpg",
    price : "5k",
    rating: 4.7
  },
  {
    title : "Land-View",
    description : "A change scenery can help everything",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLX4Jr-ptdNZHZtN56Fl5WEJRe4WEUbSjSwQ&s",
    price : "23.k",
    rating : 4.8
  }
  
];

function App() {
  return (
    <div className="app">
      {products.map((item, index) => (
        <Card key={index} {...item}/>
      ))}
    </div>
  );
}

export default App;
