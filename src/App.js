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
    const url_movie =`http://localhost:3015/movies?name=${cityName}`

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

      const url_weather = `http://localhost:3015/weather?name=${cityName}`
  
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

// // This is done in date 2021-9-11 updated 
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       lat: '',
//       lon: '',
//       displayname: '',
//       mapF: false,
//       displayErroe: false,
//       weather: false,
//       weatherArr: [],
//       displayWeatherError: false,
//       timezone: '',
//       countrycode: '',
//       latWeather: '',
//       lonWeather: '',

//       statecode: ''

//     }

//   }
//   // https://weather-app-lab-siven.herokuapp.com/cityname
 
//   getweatherData = async (cityName) => {
//     console.log("Inside ", cityName)
//     let weatherUrl = `http://localhost:3014/weather?cityName=${cityName}`;
//     try {
//       if (cityName === 'Amman' || cityName === 'Paris' || cityName === 'Seattle') {
//         let WeatherData = await axios.get(weatherUrl)
//         this.setState({
//           weatherArr: WeatherData.data,
//           weather: true 
         

//       })
//       // console.log("Inside 2 ", weatherArr)
//     }

//       else {

//         this.setState({
//           displayWeatherError: true
//         })

//       }
//     }

//     catch {
//       this.setState({
//         displayWeatherError: true
//       })

//     }
//   }
 




//   // async in order use await 
//   getLoc = async (event) => {
//     event.preventDefault();
//     // console.log('Hi')

//     const cityName = event.target.cityName.value;
//     // console.log(cityName)
//     this.getweatherData(cityName);
//     // this.geatMovieDat(cityName);
//     const key = 'pk.ddfda21a6b66752b544d6177b64d789d';
//     const URL = `https://eu1.locationiq.com/v1/search.php?key=pk.ddfda21a6b66752b544d6177b64d789d&q=${cityName}&format=json`;
//     // const maprepresent = 





//     try {

//       let responceData = await axios.get(URL); // give information get from API
//       console.log(responceData.data);
//       this.setState({
//         lat: responceData.data[0].lat,
//         lon: responceData.data[0].lon,
//         displayname: responceData.data[0].display_name,
//         // mapSrc:`https://maps.locationiq.com/v3/staticmap?key=pk.ddfda21a6b66752b544d6177b64d789d&center=${this.state.lat},${this.state.lon}`
//         mapF: true




//       })
//       this.getweatherData(cityName)

//     }



//     catch {

//       console.log('Error');
//       console.log('error , Unable to geocode ')
//       //  this.state({ displayErroe: true });

//     }

//   }
//   //   the render 
//   render() {
//     return (
//       <>
   



//         <h1>--Search  on Location in React -- </h1>
//         <form onSubmit={this.getLoc}>




//           <input type='text' name='cityName' placeholder='Enter city Name please'></input>
//           <button type='submit'>Explore!</button>
//         </form>
//         { this.state.weather &&  this.state.weatherArr.map(item => {

// return (
//   <>
//     <p>Date: {item.date}</p>
//     <p>Description: {item.desc}</p>
//   </>
// )
// })}



//         <p> Name : {this.state.displayname}</p>

// <p>Latitude : {this.state.lat}</p>

// <p>Longitude : {this.state.lon}</p>


// {this.state.mapF &&
//   <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.ddfda21a6b66752b544d6177b64d789d&center=${this.state.lat},${this.state.lon}`} alt='Map' />
// }

       



       
//         {/* {this.state.displayErroe && <p>error , Unable to geocode </p>}

//         {this.state.displayWeatherError && <p>Sorry Error</p>} */}
//       </>

//     );

//   }

// }


// export default App;
