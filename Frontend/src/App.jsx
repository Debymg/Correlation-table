import { useState } from 'react'

import './App.css'
import Table from "./Components/Table/Table";
import Home from "./Components/Home/Home";
import Sidebar from './Components/Home/Sidebar/Sidebar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sidebar/>  
    <Home/> 
    <Table/>
    </>
  )
}

export default App
