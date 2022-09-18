import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Cataloguer from './pages/Cataloguer'
import Login from './pages/Login'
import RegistrateCard from './pages/RegistrateCard'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cataloguer />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/new-card" element={<RegistrateCard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
