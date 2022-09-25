import { Routes, Route } from 'react-router-dom'

import Cataloguer from './pages/Cataloguer'
import Login from './pages/Login'
import RegistrateCard from './pages/RegistrateCard'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Cataloguer />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/new-card" element={<RegistrateCard />}></Route>
    </Routes>
  )
}

export default App
