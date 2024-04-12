import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllproductPage from './allproduct'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SingleProductPage from './singleproduct'

function App() {
 
  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={<AllproductPage />} />
                {/* <Route path="/singleproduct" element={<SingleProductPage />}/> */}
               <Route path="/product/:productId" element={<SingleProductPage />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
