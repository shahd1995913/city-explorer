// import axios from "axios";
// import React from "react";
// import style from "../src/style.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Image from 'react-bootstrap/Image';
// import Row from 'react-bootstrap/Row';
import axios from "axios";
import React from "react";
import Weather from "./Weather";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      lon: "",
      displayName: "",
      mapFlag: false,
      displayErr: false,
      
    };
  }



  getWeatherData = async(lat,lon)=>{
    try {
      let result2 = await axios.get(
        `https://https://weather-app-lab-siven.herokuapp.com?lat=${lat}&lon=${lon}`
      );
  
      this.setState({ weatherData: result2.data });
  
      console.log(JSON.stringify(result2.data));
    } catch {
      console.log("err22");
      this.setState({
        displayErr: true,
      });
    }
  }
    getData = async (event) => {
      event.preventDefault();
      let cityName = event.target.cityName.value;
      let myKey = process.env.REACT_APP_LOCATION;
      let url = `https://us1.locationiq.com/v1/search.php?key=${myKey}&q=${cityName}&format=json`;
      try {
        let result = await axios.get(url);
        console.log(result.data);
        this.setState({
          lat: result.data[0].lat,
          lon: result.data[0].lon,
          displayName: result.data[0].display_name,
          mapFlag: true,
        });
        this.getWeatherData(this.state.lat,this.state.lon);
        
      } catch {
        console.log("err");
        this.setState({
          displayErr: true,
        });
      }
    };
    render() {
      return (
        <>
          <h1>Location App</h1>
          <form onSubmit={this.getData}>
            <input type="text" name="cityName" placeholder="Enter city name" />
            <button type="submit">Get Location</button>
          </form>
          <p>Display Name: {this.state.displayName} </p>
          <p>Lat: {this.state.lat} </p>
          <p>Lon: {this.state.lon} </p>
          {this.state.mapFlag && (
            <img
              src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION}&center=${this.state.lat},${this.state.lon}`}
              alt="map"
            />
          )}
          <h1>Weather</h1>
          {this.state.weatherData &&
            this.state.weatherData.map(function (w, i) {
              return <Weather date={w.date} description={w.description} />;
            })}
          {this.state.displayErr && <p>Sorry Error</p>}
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
