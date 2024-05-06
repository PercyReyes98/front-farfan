import Report from './components/Report'
import {UseReport} from './components/hooks/useReport'
//import './App.css'

function App() {
  const {report} = UseReport()
  console.log(report)
  //const {exercise, period}= report
  return (
    <>
      <Report report={report}  ></Report>
    </>
  )
}

export default App
