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
      <th></th> {/* Agregamos una celda vacía para alinear correctamente el encabezado con las columnas */}
        {variables.map((variable, index) => (
        <th key={index}>{variable}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {variables.map((_, rowIndex) => (
        <tr key={rowIndex}>
          <th>{variable}</th> {/* Agregamos el nombre de la variable como primera celda de cada fila */}
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