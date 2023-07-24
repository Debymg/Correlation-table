from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app)

data = {
    "Ciclo": {"values": list(range(1, 21)), "info": "Esta variable es el conteo incremental de las secuencias repetitivas de carga y descarga durante el ensayo. Se cumplieron 20 ciclos reversibles a una amplitud controlada de 55 mm."},
    "Fuerza_max_pos (kN)": {"values": [532, 528.6, 525.2, 521.4, 517.9, 514.7, 511.8, 509.5, 506.7, 504.3, 502.2, 500.1, 498, 496.1, 494.2, 492.3, 490.6, 489, 487.5, 485.8], "info": "Esta variable representa la fuerza máxima positiva de corte aplicada a la muestra durante cada ciclo."},
    "Fuerza_max_neg (kN)": {"values": [-532, -529.5, -526.6, -523.5, -520.5, -517.5, -514.7, -512.1, -509.7, -507.3, -505.3, -503, -500.9, -498.9, -496.9, -495.2, -493.3, -491.5, -489.9, -488.1], "info": "Esta variable representan la fuerza máxima negativa de corte aplicada a la muestra durante cada ciclo."},
    "Rigidez Efectiva (kN/cm)": {"values": [96.4, 95.9, 95.3, 94.7, 94.1, 93.5, 93, 92.6, 92.1, 91.7, 91.3, 90.9, 90.5, 90.1, 89.8, 89.5, 89.1, 88.8, 88.5, 88.2], "info": "La rigidez efectiva es un parámetro clave en el análisis de respuesta sísmica y se utiliza para describir la capacidad de la muestra para resistir los cambios de forma sin deformarse permanentemente. Esencialmente, mide la resistencia de la muestra al estrés aplicado."},
    "Trabajo (kN*cm)": {"values": [8376, 8294.4, 8249.6, 8178.8, 8128.5, 8081.5, 8053.1, 7995.2, 7957.7, 7921.5, 7886.3, 7869.2, 7821.5, 7791.6, 7760.3, 7747.5, 7703.3, 7676.4, 7650.3, 7637.8], "info": "Esta variable representa el trabajo hecho durante el ciclo de carga y descarga, que es el producto de la fuerza aplicada y el desplazamiento correspondiente."},
    "Temperatura (°C)": {"values": [20.0, 20.4, 20.9, 21.3, 21.9, 22.6, 23.1, 23.6, 24.1, 24.6, 25.1, 25.7, 26.2, 26.8, 27.4, 27.9, 28.6, 29.4, 30.1, 30.6], "info": "Está es la temperatura del especimén de prueba para cada ciclo. La temperatura puede tener un impacto significativo en la resistencia de los materiales y, por lo tanto, en los resultados de los ensayos."},
    "Desplazamiento (mm)": {"values": [5.5587741, 5.54202946, 5.58825283, 5.51802321, 5.5031429, 5.61150068, 5.61138184, 5.55858455, 5.53441211, 5.59947255, 5.4287859, 5.54775914, 5.614263, 5.51814536, 5.46419372, 5.49479256, 5.47338568, 5.58602326, 5.70144846, 5.55005647], "info": "Esta variable representa la deformación que sufre la muestra en respuesta a la fuerza aplicada durante cada ciclo."}
}

@app.route('/data')
def serve_data():
    df = pd.DataFrame({key: val["values"] for key, val in data.items()})
    correlation_matrix = df.corr()

    # Crear una lista de variables en el mismo orden que en el código de React.
    ordered_variables = ["Ciclo", "Desplazamiento (mm)", "Temperatura (°C)", "Fuerza_max_pos (kN)", "Fuerza_max_neg (kN)", "Rigidez Efectiva (kN/cm)", "Trabajo (kN*cm)"]

    # Reorganizar las columnas y filas de la matriz de correlación para que coincidan con el orden en React.
    ordered_corr_matrix = correlation_matrix.loc[ordered_variables, ordered_variables]

    return jsonify({
        "columns": ordered_corr_matrix.columns.tolist(),
        "index": ordered_corr_matrix.index.tolist(),
        "data": ordered_corr_matrix.values.tolist(),
        "info": {key: val["info"] for key, val in data.items()}
    })

if __name__ == "__main__":
    app.run()
    
