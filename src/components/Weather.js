import React from "react";
import WeatherDay from './WeatherDay'

class Weather extends React.Component {
    render() {
        return (

            <div>

                {this.props.weatherData.map((element) => {
                    return (<WeatherDay description={element.description} date={element.date} />)

                })}

            </div>
        )


    }
}
export default Weather