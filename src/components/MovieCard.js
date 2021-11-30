import React from 'react'
import ReactStars from 'react-rating-stars-component';
import  {Link} from 'react-router-dom'
function MovieCard({Movies,search , rating }) {

    return (
        <div className='movies'>
             {Movies
             .filter(
                (el) =>
                  el.title.toUpperCase().includes(search.toUpperCase()) &&
                  el.rating >= rating)
             
             .map((el )=> <div className='film'>
            <img src={el.posterURL} alt='#' />
                <h1>{el.title}</h1>
                 
               
                <ReactStars
    value={el.rating}
    
    activeColor="#ffd700"
  />
  <Link  to ={`/Trailer/${el.id}` } > 
  
  <button>trailer</button>
  </Link>
  
        
              </div>)}
    </div>
             


    )
}

export default MovieCard
