import React from "react";
import MovieNested from './MovieNested'

class MovieMain extends React.Component
{
    render()
    {
        return(
        
            <>
           

{this.props.movieData.map((element)=>{ 
    return(<MovieNested title={element.title} overview={element.overview} release_date={element.release_date} 
        popularity={element.popularity} vote_average={element.vote_average} vote_count={element.vote_count} poster_path={element.poster_path}/>)
})
           } 
            </>
        )
    }
}
export default MovieMain