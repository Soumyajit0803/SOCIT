import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import NumStats from './components/NumStats/NumStats'
import Faculty from './pages/Faculties/Faculty'
import Gallery from './pages/Gallery/Gallery'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tester" element={<NumStats />} />
        <Route path="/faculties" element={<Faculty />} />
        <Route path="/gallery" element={<Gallery/>} />
    </Routes>
  )
}

export default AllRoutes