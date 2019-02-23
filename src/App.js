import React, { Component } from 'react';
import './App.css';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather'

const API_KEY = "eefaf10c9102d3879e42754b766070d2"

class App extends Component {
  getWeather = async (e) =>{
    // prevent the default page refresh on button click in form.js
    e.preventDefault();
    // e will come from form.js
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
