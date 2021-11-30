import MovieCard from'./components/MovieCard'
import Search from'./components/search.js'
import './App.css';
import React from 'react'
import Nav from'./components/NavBar.js'
import Add from './components/add';
import {useState}from 'react'
import see from './images/see.jpg'
import Home from './images/home.jpg'
import Green from './images/green.png'
import Me from './images/Me.jpg'
import To from './images/To.jpg'
import hard from './images/hard.jpg'
import Gone from './images/Gone.jpg'
import Rating from './components/rating'
import HomePage from './components/HomePage.js'
import {Route} from 'react-router-dom';
import Trailer from './components/Trailer.js'

function App() {
  const [Movies, setMovies]=useState([ { id : 1,title:'Hard love', description :'chrismats movie ,love and drama', posterURL:hard,rating:'2',
  trailerlink:'https://www.youtube.com//embed/3boMRfx6cjE'},
    { id:2,title:'Now yousee ', description :'action , adventeur, drama', posterURL:see,rating:'2', 
    trailerlink:"https://www.youtube.com/embed/u_diRgwPCS8" } ,
    {id:3,title:'Gone Girl', description :'drama , crime', posterURL:Gone,rating:'5', trailerlink:''},
    {id:4,title:'Green Book', description :'drama', posterURL:Green,rating:'3', trailerlink:''},
    {id:5,title:'Me befor u', description :'drama , romance', posterURL:Me,rating:'4', trailerlink:''},
    {id:6,title:'Home Alone', description :'fun , comedie', posterURL:Home,rating:'5', trailerlink:''},
    {id:7,title:'to all boys ', description :'romance', posterURL:To,rating:'4', trailerlink:''} ,
    {id:8,title:'Gone Girl', description :'drama , crime', posterURL:Gone,rating:'5', trailerlink:''},
]);
const [search,setSearch]=useState('');
const [rating,setRating]=useState('');
  return (
    <div className="App">
      <Route   exact path='/' component ={HomePage} /> 
       <Nav/>
       <Search  setSearch={setSearch}/>
    <Route path='/film' render ={()=>( <MovieCard Movies={Movies} search={search} rating={rating}></MovieCard>)} />
    <Route path='/trailer/:id' render ={(props)=><Trailer Movies={Movies}{...props}/>}/>
    <Add Movies={Movies} setMovies={setMovies} />
    <Rating   setRating={setRating} />
    </div>
  );
}

export default App;
