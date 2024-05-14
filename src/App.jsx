import Report from './components/Report'
import FormReport from './components/FormReport'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


//import './App.css'

function App() {
  //const {exercise, period}= report
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Report />}/>
        <Route path="form" element={<FormReport />}/> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
