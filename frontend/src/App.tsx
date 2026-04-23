import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Signup from './Pages/signup'
import Login from './Pages/login'
import Dashboard from './Pages/Dashboard'

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
   </Router>
  )
}

export default App
