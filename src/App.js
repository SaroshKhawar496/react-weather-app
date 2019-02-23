import React, { Component } from 'react';
import './App.css';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather'

const API_KEY = "eefaf10c9102d3879e42754b766070d2"

class App extends Component {
  getWeather = async () =>{
    const api_call = await fetch(`https://samples.openweathermap.org/data/2.5/weather
    ?q=London,uk&appid=${API_KEY}&units=metric`);
    
  }
  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
