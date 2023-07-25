import React from 'react';
import review2 from "./IESA.png";
import './sidebar.css'



const Sidebar = () => {
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center', // Agrega esta línea para centrar horizontalmente los elementos
  backgroundColor: '#811937',
  width: '1260px',
  height: '90px',
  top: '0',
  left: '0',
  padding: '10px',
  flexwrap: 'wrap', 
  flexbasis:  '20rem',
  flexgrow: '1',
  
  
  
};

  const leftAlignStyle = {
    textAlign: 'right',
  };

  const centerAlignStyle = {
    textAlign: 'center',


  };

  const rightAlignStyle = {
    textAlign: 'right',
  };

  return (  
    <div style={containerStyle}>
      <img src={review2} alt="" className='logo'/>
      <h2 style={centerAlignStyle}> TABLA DE CORRELACIÓN <br />Datos sacados del ensayo de control de calidad de disipadores metálicos TADA</h2>
      <h3 style={rightAlignStyle}>Deborah Murati</h3>
    </div>
  );
};

export default Sidebar;