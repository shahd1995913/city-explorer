import React from "react";
import Card from 'react-bootstrap/Card'

class MovieNested extends React.Component
{
    render()
    {
        return(
        
            <>
            <Card>
                <Card.Text>{this.props.poster_path}</Card.Text>
                <Card.Text>{this.props.title}</Card.Text>
                <Card.Text>{this.props.overview}</Card.Text>
                <Card.Text>{this.props.popularity}</Card.Text>
                <Card.Text>{this.props.vote_average}</Card.Text>
                <Card.Text>{this.props.vote_count}</Card.Text>
                <Card.Text>{this.props.release_date}</Card.Text>
            </Card>
            </>
        )
    }
}
export default MovieNested