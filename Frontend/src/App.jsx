import { useState } from 'react'
import './App.css'
import Table from "./Components/Table/Table";
import review2 from "../src/Components/Home/Sidebar/IESA.png";
import Sidebar from './Components/Home/Sidebar/Sidebar';
import Home from './Components/Home/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
    <h2>TABLA DE CORRELACIÓN </h2>
    <img src={review2} alt="" className='logo'/>

    <Table/>  
    </main>

    


    </>
  )
}

export default App
