
import './App.css'
import Navbar from './Component/Navbar'
import Contact from './Page/Contact'
import Aboutus from './Page/Aboutus'
import Home from './Page/Home'
import Footer from './Component/Footer'
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom'
import Detailspage from './Component/Detailspage'
import Allnews from './Component/Allnews'
import Notfound from './Page/Notfound'
import Postcard from './Component/Postcard'
import Categorypage from './Page/Categorypage'
import Grouppage from './Page/Grouppage'
import Formpage from './Page/Formpage'
import Loginpage from './Page/Loginpage'
import Signuppage from './Page/Signuppage'
function App() {
 

  return (
      <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutus" element={<Aboutus/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/news/:id" element={<Detailspage/>} />
          <Route path="/:categoryid" element={<Categorypage/>} />
          <Route path="/form" element={<Formpage/>} />
          <Route path="/login" element={<Loginpage/>} />
          <Route path="/signup" element={<Signuppage/>} />
          <Route path="/group/:groupid" element={<Grouppage/>} />
          <Route path="/allnews" element={<Allnews/>}/>
          <Route path="/404" element={<Notfound/>}/>
      </Routes>
      </BrowserRouter>  
      <Postcard/>
      <Footer/>   
      </div>
    
  )
}


export default App
