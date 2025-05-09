import Navbar from './NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Profile from './pages/Profile';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </div>
    </>
  )
}

export default App;