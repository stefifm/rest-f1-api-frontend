import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home'
import PilotosPages from './Pages/PilotosPages'
import EquiposPages from './Pages/EquiposPages'
import ModalDialog from './components/ModalDialog/ModalDialog'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ModalDialog />
      <Header />
      <div className='divBody'>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/equipos'
            element={<EquiposPages />}
          />
          <Route
            path='/pilotos'
            element={<PilotosPages />}
          />
          <Route
            path='*'
            element={
              <Navigate
                to='/'
                replace
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
