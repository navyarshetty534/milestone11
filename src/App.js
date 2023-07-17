import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Components/Home'
import Menu from './Components/Menu'
import About from './Components/About'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Navbar from './Components/Navbar'
const App = () => {
  return (
    <div>
     <BrowserRouter>
     {/* <Navbar></Navbar> */}
     <Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='/about' element={<About></About>}></Route>
<Route path='/menu' element={<Menu></Menu>}></Route>
     </Routes>
     </BrowserRouter>      
    </div>
  )
}

export default App

