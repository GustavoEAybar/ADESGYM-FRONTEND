import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation'
import Home from './components/views/Home/Home'
import ServicesTable from './components/views/Servicestable/ServicesTable';

function App() {
  

  return (
    <Router>
      <Navigation/>
      <main>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/services/table' element={<ServicesTable/>}/>
        </Routes>
      </main>
    </Router>
  )
}

export default App
