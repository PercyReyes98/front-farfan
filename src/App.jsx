import Report from './components/Report'
import FormReport from './components/FormReport'
import Nabvar from './components/Nabvar'
import StateAcount from './components/StateAcount'
import Search from './components/Search'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


//import './App.css'

function App() {
  //const {exercise, period}= report
  return (
    
      <div>
      <Router>
        <Nabvar/>
        <Routes>
          <Route path='/' element={<Report/>}></Route>
          <Route path='/:ruc' element={<StateAcount/>}></Route>
          <Route path='/form' element={<FormReport/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
        </Routes>
      </Router>
      </div>
  
  )
}

export default App
