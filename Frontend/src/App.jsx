import { useState } from 'react'

import './App.css'
import Table from "./Components/Table/Table";
import Home from "./Components/Home/Home";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/> 
    <Table/>
    </>
  )
}

export default App
