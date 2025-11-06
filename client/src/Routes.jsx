import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import NumStats from './components/NumStats/NumStats'
import Faculty from './pages/Faculties/Faculty'
import Gallery from './pages/Gallery/Gallery'
import Placements from './pages/Placements/Placements'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/faculties" element={<Faculty />} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/placement" element={<Placements/>}/>
    </Routes>
  )
}

export default AllRoutes