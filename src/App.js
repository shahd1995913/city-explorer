// import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import axios from "axios";
import React from "react";

import MovieMain from './components/MovieMain';
import Weather from './components/Weather';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      lon: "",
      displayName: "",
      display:false,
      displayErr: false,
      description:'',
      date:'', 
    
  
      weatherData: [],
      movieData:[]
    };
  }
  getMoviesData = async (event) => 
  {   
    event.preventDefault();
    const cityName=event.target.cityName.value
    const url_movie =`https://lab-city.herokuapp.com/movies?name=${cityName}`

    try {

      let moviesresult = await axios.get(url_movie);
     
      this.setState({
        movieData: moviesresult.data,
        display:true});

let data_json=await axios.get(url_movie)
this.setState({
  movieData:data_json.data,

})

    }
    
    catch {
      this.setState({
     displayErr:true
      });
    }
  };

  getWeatherData = async (event) => {
    {   
      event.preventDefault();
      const cityName=event.target.cityName.value

      const URL = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION}&q=${cityName}&format=json`

      const url_weather = `https://lab-city.herokuapp.com/weather?name=${cityName}`
  
      try {
  
        let weatherresult = await axios.get(URL);
       
        this.setState({
          lat:weatherresult.data[0].lat,
          lon:weatherresult.data[0].lon,
          displayName:weatherresult.data[0].displayName,
          
          display:true});
  
  let data_json=await axios.get(url_weather)
  this.setState({
    weatherData:data_json.data,
  
  })
  
      }
      
      catch {
        this.setState({
       displayErr:true
        });
      }
      this.getMoviesData(event)
    };

   
  };
 
  render() {
    return (
      <>
        <h1>Location App</h1>

        <form onSubmit={this.getWeatherData}>

          <input type="text" name="cityName" placeholder="Enter city name" />

          <Button type="submit">Get Location</Button>
        </form>

       
       
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION}&center=${this.state.lat},${this.state.lon}&zoom=18&size=500x500&format=png&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`}/>




        <Weather display={this.state.display} weatherData={this.state.weatherData}/>
        <MovieMain display={this.state.display} movieData={this.state.movieData}/>
        )

      </>
    );
  }
}

export default App;

