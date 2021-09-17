import React from "react";
import Card from 'react-bootstrap/Card'

class WeatherDay extends React.Component
{
    render()
    {
        return(
        
            <>
            <Card>
                <Card.Text>{this.props.date}</Card.Text>
                <Card.Text>{this.props.description}</Card.Text>
            </Card>
            </>
        )
    }
}
export default WeatherDay