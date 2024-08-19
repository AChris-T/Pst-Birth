
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NewHome from './NewHome'
import Success from './components/Success'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<NewHome/>}/>
        <Route path='/success' element={<Success/>}/>
    

      </Routes>
    </>
  )
}

export default App
