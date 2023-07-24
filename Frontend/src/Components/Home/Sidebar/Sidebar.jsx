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
  width: '210px',
  height: '100%',
  position: 'fixed',
  top: '0',
  left: '0',
  padding: '10px',
  flex: '1'
};

  const leftAlignStyle = {
    textAlign: 'center',
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
      <p style={centerAlignStyle}> TABLA DE CORRELACIÓN <br /> Datos sacados del ensayo de control de calidad de disipadores metálicos TADA</p>
      <h3 style={rightAlignStyle}>Deborah Murati</h3>
    </div>
  );
};

export default Sidebar;