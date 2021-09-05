import axios from 'axios';
import React from 'react';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      lat:'',
      lon:'',
      displayName:'',
      mapFlag:false,
      displayErr:false
    }
  }
  
  getLocationData = async (event) => {
    event.preventDefault();
    const cityName = event.target.cityName.value;
    const myKey = 'pk.43fed3791d35ddb76aa14f749c6d3080';
    const URL = `https://eu1.locationiq.com/v1/search.php?key=${myKey}&q=${cityName}&format=json`;
    try 
    {
      let resResult = await axios.get(URL);
      this.setState({
      lat:resResult.data[0].lat,
        lon:resResult.data[0].lon,
        displayName:resResult.data[0].display_name,
        mapFlag:true
      })
    }
    catch 
    {
      console.log('err');
      this.setState({
        displayErr:true
      })
    }

  }
  
  render(){
    return(
      <>
      <h1>Location App</h1>
      <form onSubmit={this.getLocationData}>
        <input type='text' name='cityName' placeholder='Enter city name'/>
        <button type='submit'>Explore</button>
      </form>

      {/* render the data */}
      <p>Display name : {this.state.displayName}</p>
      <p>Lat : {this.state.lat}</p>
      <p>Lon : {this.state.lon}</p>

      {this.state.mapFlag && 
      <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.43fed3791d35ddb76aa14f749c6d3080&center=${this.state.lat},${this.state.lon}`} alt='map' />}

      {this.state.displayErr && <p>Sorry Error</p>}
      

      </>
    )
  }
}
