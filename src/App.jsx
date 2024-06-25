import { useState } from 'react'
import '../css/style.css'
import './App.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
    </>
  )
}

export default App
