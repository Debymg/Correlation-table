import React, { useEffect } from "react";
import "./table.css";

const Table = () => {
    const variables = [
        "Ciclos",
        "Temperatura",
        "Fuerza Positiva",
        "Fuerza Negativa",
        "Esfuerzo",
        "Energía"
      ];  
  const handleRegistroClick = () => {
    window.location.href = "/Registro";
  };

  return (
    <table className="correlation-grid">
    <thead>
      <tr>
        {variables.map((variable, index) => (
          <th key={index}>{variable}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {variables.map((_, rowIndex) => (
        <tr key={rowIndex}>
          {variables.map((_, columnIndex) => (
            <td key={columnIndex}>Value</td> // Puedes reemplazar "Value" con los valores reales de correlación.
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
};

export default Table;