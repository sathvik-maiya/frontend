import { Routes, Route } from "react-router-dom";
import './App.css'
import Layout from './Layout';
import Home from './components/home/Home'
import Nopage from './pages/Nopage/Nopage'
import Abha from './pages/Abha/Abha'
import About from "./pages/about/About";
import Contact from './pages/Contact/Contact'



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
           <Route path='/abha' element={<Abha />} />
           <Route path='/about' element={<About />} />
           <Route path='/contact' element={<Contact />} />
           <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
