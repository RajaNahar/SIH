import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/auth/Signin';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';
import Cereals from './components/Cereals';
import Vegetables from './components/Vegetables';
import About from './components/About'
import Contact from './components/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
      <Router>
        
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Signin />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/authDetails" element={<AuthDetails />} />
          <Route path="/cereals" element={<Cereals />} />
          <Route path="/vegetables" element={<Vegetables />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
  )
}

export default App
