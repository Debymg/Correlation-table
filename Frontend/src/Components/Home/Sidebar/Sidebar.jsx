import React from 'react';
import review2 from "./IESA.png";
import './sidebar.css'



const Sidebar = () => {


  return (  
    <body style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      minHeight: '100vh'}}>
      <img src={review2} alt="" className='logo'/>
      <h2 > TABLA DE CORRELACIÓN <br />Datos sacados del ensayo de control de calidad de disipadores metálicos TADA</h2>
      <h3 >Deborah Murati</h3>
    </body>


  );
};

export default Sidebar;

