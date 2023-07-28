from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
from constants import MEASUREMENTS

app = Flask(__name__)
CORS(app)


@app.route("/data")
def serve_data():
    df = pd.DataFrame({key: val["values"] for key, val in MEASUREMENTS.items()})
    correlation_matrix = df.corr()

    # Crear una lista de variables en el mismo orden que en el código de React.
    ordered_variables = [
        "Ciclo",
        "Desplazamiento (mm)",
        "Temperatura (°C)",
        "Fuerza_max_pos (kN)",
        "Fuerza_max_neg (kN)",
        "Rigidez Efectiva (kN/cm)",
        "Trabajo (kN*cm)",
    ]

    # Reorganizar las columnas y filas de la matriz de correlación para que coincidan con el orden en React.
    ordered_corr_matrix = correlation_matrix.loc[ordered_variables, ordered_variables]

    return jsonify(
        {
            "columns": ordered_corr_matrix.columns.tolist(),
            "index": ordered_corr_matrix.index.tolist(),
            "data": ordered_corr_matrix.values.tolist(),
            "info": {key: val["info"] for key, val in MEASUREMENTS.items()},
        }
    )


@app.route("/raw-data")
def serve_raw_data():
    df = pd.DataFrame(
        {key: val["values"] for key, val in MEASUREMENTS.items() if key != "Ciclo"}
    )

    return jsonify(
        {
            "columns": df.columns.tolist(),
            "index": df.index.tolist(),
            "data": df.values.tolist(),
            "info": {key: val["info"] for key, val in MEASUREMENTS.items()},
        }
    )


if __name__ == "__main__":
    app.run()
