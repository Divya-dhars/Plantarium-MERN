import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Indoor from './components/indoor.js';
import Outdoor from './components/outdoor.js';
import Office from './components/office.js';
import Hanging from './components/hanging.js';
import Plastic from './components/plastic.js';
import Ceramic from './components/ceramic.js';
function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/indoor' element={<Indoor/>}></Route>
        <Route path='/outdoor' element={<Outdoor/>}></Route>
        <Route path='/office' element={<Office/>}></Route>
        <Route path='/hanging' element={<Hanging/>}></Route>
        <Route path='/ceramic' element={<Ceramic/>}></Route>
      </Routes>
  )
}

export default App