import React, { Component } from 'react';
import './App.css';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "eefaf10c9102d3879e42754b766070d2";

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) =>{
    // prevent the default page refresh on button click in form.js
    e.preventDefault();
    // e will come from form.js
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);

    const data = await api_call.json();
    
    // preventing app breaking if city and country not given
    if(city && country){
      console.log(data);
    
      this.setState(
        {
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        }
      );
    
    } else {
      this.setState(
        {
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Please fill in the form!"
        }
      );

    }


  }
  render() {
    return (
      <div>

          <div className="wrapper">

            <div className="main">

              <div className="container">

                <div className="row">

                    <div className="col-xs-5 title-container">
                      <Titles />
                    </div>

                    <div className="col-xs-7 form-container">

                       <Form getWeather={this.getWeather}/>

                       <Weather 
                        temperature={this.state.temperature}
                        city={this.state.city}
                        country={this.state.country}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        error={this.state.error}
                        />

                    </div>

                </div>

              </div>

            </div>

        </div>

      </div>
    );
  }
}

export default App;





