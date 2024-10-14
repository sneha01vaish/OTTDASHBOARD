import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './Component/Dashboard/Dashboard'
import Allseries from './Component/Dashboard/Allseries/Allseries'
import Trendingseries from './Component/Dashboard/Trendingseries/Trendingseries'
import MainContent from './Component/Dashboard/MainContent/MainContent'
import FileUpload from './Component/Dashboard/FileUpload/FileUpload'
import NavBar from './Component/NavBar/NavBar'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path='' element={<MainContent />}/>
          <Route path='all-series' element={<Allseries />}/>
          <Route path='upload-file' element={<FileUpload />}/>
          <Route path='trending-series' element={<Trendingseries />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App