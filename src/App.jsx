import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './Header'
import Home from './Home'
import './App.css'
import Card from './Card'
import restaurants from './restaurants'
import Products from './Products'
import About from './About'
import Signup from './Signup'

function App() {
  const [serachquery, setsearchquery] = useState('')

  return (
    <div className="app-shell">
      <Header setsearchquery={setsearchquery} />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/foods" element={<Card {...restaurants} />} />
          <Route path="/products" element={<Products serachquery={serachquery} />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
