import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Recommended from './components/Recommended';
import Sidebar from './sidebar/Sidebar';
import Products from './components/Products';
import { useState } from 'react';
import data from './Data/Data'

function App() {
  const[selectedCategory, setSelectedCategory] = useState('null');
  const [query, setQuery] = useState('');

  const handleInputChange = (event) =>{
    setQuery(event.target.value);
  }

  const filteredItems = data.filter((data) =>
  data.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!== -1)
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredDataa(data, selected, query) {
    let filteredData = data;

  if(query) {
    filteredData = filteredItems
  }

  if(selected) {
    filteredData = filteredData.filter(
      ({ category, color, company, newPrice, title }) =>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected
    );
  }
  return filteredData.map(
    ({ img, title, star, reviews, prevPrice, newPrice }) => (
      <Products
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    )
  );
  }



  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <Recommended />
      <Products />
    </div>
  );
}

export default App;
