import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import NumStats from './components/NumStats/NumStats'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tester" element={<NumStats />} />
    </Routes>
  )
}

export default AllRoutes