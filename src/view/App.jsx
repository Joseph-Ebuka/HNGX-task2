import React from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';



import Home from '../pages/Home'
import {MoviesDashboard} from '../pages/MoviesDashboard'
import { SelectedMovie } from './SelectedMovie';
import { UpcomingMovies } from './UpcomingMovies';
import { TvSeries } from './TvSeries';
import { Loader } from '../components';



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='dashboard' element={<MoviesDashboard/>}>
          
          <Route index element={<SelectedMovie/>}/>
          <Route path='/dashboard/movies' index element={<SelectedMovie/>}/>
          <Route path='/dashboard/movies/:id' element={<SelectedMovie/>}/>
          <Route path='/dashboard/upcoming' element={<UpcomingMovies/>}/>
          <Route path='/dashboard/tv-series' element={<TvSeries/>}/>
         </Route>
        <Route path="*" element={<Loader/>}/>
      </Routes>
    </div>
  )
}

export default App