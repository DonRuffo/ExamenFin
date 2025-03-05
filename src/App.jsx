import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Materias from './pages/Materias'
import Matriculas from './pages/Matriculas'
import Bienvenido from './pages/Bienvenida'
import Estudiantes from './pages/Estudiantes'
import { AuthProvider } from './context/AuthContext'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' >
            <Route index element={<LandingPage />} />
            <Route path='login' element={<Login />} />
          </Route>
          <Route path='dashboard/*' element={
            <Routes>
              <Route element={<Dashboard />}>
                <Route index element={<Bienvenido />} />
                <Route path='matriculas' element={<Matriculas />} />
                <Route path='materias' element={<Materias />} />
                <Route path='estudiantes' element={<Estudiantes />} />
              </Route>
            </Routes>
          }>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
