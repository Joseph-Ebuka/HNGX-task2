import React from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import MovieList from './MovieList';


import Home from '../pages/Home'
import {MoviesDashboard} from '../pages/MoviesDashboard'
import { SelectedMovie } from './SelectedMovie';
import { UpcomingMovies } from './UpcomingMovies';
import { TvSeries } from './TvSeries';
import { Loader } from '../components';
import { ErrorPage } from '../pages/ErrorPage';



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/:id" element={<SelectedMovie/>} /> 
        <Route path='dashboard' element={<MoviesDashboard/>}>
          
          <Route index element={<SelectedMovie/>}/>
          <Route path='/dashboard/:id' element={<SelectedMovie/>}/>
          <Route path='/dashboard/upcoming' element={<UpcomingMovies/>}/>
          <Route path='/dashboard/tv-series' element={<TvSeries/>}/>
         </Route>
         <Route path='movielist' element={<MovieList/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  )
}

export default App