import React from "react";
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';


class MovieNested extends React.Component
{
    render()
    {
        return(
        
            // <>
            <Card style={{ width: '18rem' }}>
                {/* <Card.Text>{this.props.poster_path}</Card.Text>
                <Card.Text></Card.Text>
                <Card.Text>{this.props.overview}</Card.Text>
                <Card.Text>{this.props.popularity}</Card.Text>
                <Card.Text>{this.props.vote_average}</Card.Text>
                <Card.Text>{this.props.vote_count}</Card.Text>
                <Card.Text>{this.props.release_date}</Card.Text> */}
                
             <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${this.props.poster_path}`} alt='' />
             <Card.Body>
               <Card.Title>{this.props.title}</Card.Title>
               <Card.Text>
               overview: {this.props.overview}
               </Card.Text>
               <Card.Text>
               vote_average: {this.props.vote_average}
               </Card.Text>
                 <Card.Text>
                 vote_count: {this.props.vote_count}
               </Card.Text> 
               <Card.Text>
               popularity: {this.props.popularity}
               </Card.Text>
               <Card.Text>
               release_date: {this.props.release_date}
               </Card.Text>
             </Card.Body>
           </Card>

        )
    }
}
export default MovieNested