import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ReactPlayer from "react-player";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Row = (props) => {
  const { row, name, info, colorTable, isRawData } = props;
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {name}
        </TableCell>
        {row.map((cell, cellIndex) => (
          <TableCell
            key={cellIndex}
            align="right"
            style={{
              backgroundColor:
                colorTable && !isRawData
                  ? cell > 0
                    ? `rgba( 166,212,236, ${Math.abs(cell)})`
                    : `rgba(227,227,227, ${Math.abs(cell)})`
                  : "white",
            }}
          >
            {cell.toFixed(2)}
          </TableCell>
        ))}
      </TableRow>
      {isRawData ? null : (
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                ></Typography>
                <Typography variant="body1">{info}</Typography>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </React.Fragment>
  );
};

const TextBlock = () => {
  return (
    <div
      style={{
        width: "600px",
        padding: "5px",
        margin: "20px",
        color: "white  ",
        justifyItems: "center",
        textAlign: "right",
        fontSize: "18px",
      }}
    >
      <p>
        Los ensayos de corte a un elemento TADAS, o dispositivo amortiguador de
        desplazamiento adicional, son procedimientos esenciales para evaluar su
        resistencia y capacidad de rendimiento ante condiciones de estrés. Estos
        elementos, comúnmente utilizados en campos como la ingeniería civil, de
        construcción y mecánica, cumplen un papel crucial al mitigar los efectos
        de las cargas de desplazamiento. En el ensayo de corte, se aplica una
        fuerza en una dirección perpendicular a la sección transversal del
        dispositivo, permitiendo determinar propiedades vitales como su
        resistencia al corte, su ductilidad y su capacidad para soportar cargas
        sin deformación permanente.
      </p>
    </div>
  );
};

const ConclusionBlock = () => {
  return (
    <div
      style={{
        width: "1250px",
        padding: "5px",
        margin: "10px",
        color: "white",
        justifyContent: "lefth",
        textAlign: "lefth",
        fontSize: "16px",
      }}
    >
      <li>
        Ciclo y Desplazamiento: El desplazamiento no cambia con los ciclos en
        pruebas cíclicas controladas. Por eso no existe variabilidad en está
        variable.
      </li>
      <li>
        Ciclo y Fuerza/Rigidez/Trabajo: El deterioro del material debido a la
        fatiga puede llevar a disminuciones en estas propiedades mecánicas.
      </li>
      <li>
        Fuerza, Rigidez, Trabajo: Estas propiedades están interrelacionadas
        debido a las leyes fundamentales de la física.
      </li>
      <li>
        Ciclo y Temperatura: La correlación entre el ciclo y la temperatura es
        debido a que aumenta el número de ciclos el material se calienta debido
        a la fricción interna.
      </li>
      <li>
        Temperatura y Fuerza/Rigidez/Trabajo: El comportamiento del material
        cambia con la temperatura, posiblemente disminuyendo su resistencia y
        rigidez.
      </li>
    </div>
  );
};

const Table = () => {
  const [tableData, setTableData] = useState(null);
  const [colorTable, setColorTable] = useState(false);
  const [viewRawData, setViewRawData] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showConclusion, setShowConclusion] = useState(false);

  const handleToggleVideoClick = () => {
    setShowVideo(!showVideo);
  };

  const handleToggleConclusionClick = () => {
    setShowConclusion(!showConclusion);
    setShowVideo(false);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/data`);
      const data = await response.json();
      setTableData(data);
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchRawData = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/raw-data`);
      const data = await response.json();
      setTableData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleToggleColorClick = () => {
    setColorTable(!colorTable);
  };

  const handleToggleDataClick = () => {
    setViewRawData(!viewRawData);
    if (viewRawData) {
      fetchData();
    } else {
      fetchRawData();
    }
    setViewRawData(!viewRawData);
  };

  return (
    <Box className="main-content">
      <button style={{ margin: "3px" }} onClick={handleToggleDataClick}>
        Mostrar Datos Brutos
      </button>
      <button style={{ margin: "3px" }} onClick={handleToggleColorClick}>
        Mapa de color
      </button>
      <button style={{ margin: "3px" }} onClick={handleToggleVideoClick}>
        Ver Ensayo
      </button>
      <button style={{ margin: "3px" }} onClick={handleToggleConclusionClick}>
        Conclusiones
      </button>
      <p
        style={{
          float: "right",
          paddingRight: "20px",
          color: "white",
          fontSize: "18px",
          fontWeight: "italic",
        }}
      >
        Estadística para Gerentes - Deborah Murati Gil
      </p>
      <TableContainer component={Paper} style={{ width: "1300px" }}>
        <MuiTable aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell />
              {tableData &&
                tableData.columns &&
                tableData.columns.map((column, columnIndex) => (
                  <TableCell key={columnIndex} align="right">
                    {column}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData &&
              tableData.data &&
              tableData.data.map((row, rowIndex) =>
                viewRawData ? (
                  <Row
                    key={rowIndex}
                    row={row}
                    name={`Ciclo ${rowIndex + 1}`}
                    isRawData={true}
                  />
                ) : (
                  <Row
                    key={rowIndex}
                    row={row}
                    name={tableData.index[rowIndex]}
                    info={tableData.info[tableData.index[rowIndex]]}
                    colorTable={colorTable}
                  />
                )
              )}
          </TableBody>
        </MuiTable>
      </TableContainer>
      {colorTable && (
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <div
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              backgroundColor: "rgba( 166,212,236,255)",
            }}
          ></div>{" "}
          <span style={{ color: "white" }}> Correlación positiva</span>
          <div
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              backgroundColor: "rgba(227,227,227 ,255)",
              marginLeft: "10px",
            }}
          ></div>
          <span style={{ color: "white" }}> Correlación negativa</span>
        </div>
      )}
      {showVideo && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=PLJNp9FK3dQ"
            playing
          />
          <TextBlock />
        </div>
      )}

      {showConclusion && <ConclusionBlock />}
    </Box>
  );
};

export default Table;
