import pandas as pd
import numpy as np

# Define tus datos
data = {
    "Ciclo": list(range(1, 21)),
    "F+max (kN)": [532, 528.6, 525.2, 521.4, 517.9, 514.7, 511.8, 509.5, 506.7, 504.3, 502.2, 500.1, 498, 496.1, 494.2, 492.3, 490.6, 489, 487.5, 485.8],
    "F- max (kN)": [-532, -529.5, -526.6, -523.5, -520.5, -517.5, -514.7, -512.1, -509.7, -507.3, -505.3, -503, -500.9, -498.9, -496.9, -495.2, -493.3, -491.5, -489.9, -488.1],
    "Kef (kN/cm)": [96.4, 95.9, 95.3, 94.7, 94.1, 93.5, 93, 92.6, 92.1, 91.7, 91.3, 90.9, 90.5, 90.1, 89.8, 89.5, 89.1, 88.8, 88.5, 88.2],
    "WD (kN−cm)": [8376, 8294.4, 8249.6, 8178.8, 8128.5, 8081.5, 8053.1, 7995.2, 7957.7, 7921.5, 7886.3, 7869.2, 7821.5, 7791.6, 7760.3, 7747.5, 7703.3, 7676.4, 7650.3, 7637.8],
    "Temperatura (°C)": [20.0, 20.4, 20.9, 21.3, 21.9, 22.6, 23.1, 23.6, 24.1, 24.6, 25.1, 25.7, 26.2, 26.8, 27.4, 27.9, 28.6, 29.4, 30.1, 30.6]
}

# Convierte tus datos en un DataFrame
df = pd.DataFrame(data)

# Calcula la matriz de correlación
correlation_matrix = df.corr()

# Imprime la matriz de correlación
print(correlation_matrix)