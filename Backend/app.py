from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

import shutil
import os
import uuid

from predict import predict_image


app = FastAPI()


# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():

    return {
        "message": "Satellite AI API Running"
    }


@app.post("/predict")
async def predict(file: UploadFile = File(...)):

    # Crear carpeta temporal
    os.makedirs("temp", exist_ok=True)

    # Nombre único
    file_name = f"{uuid.uuid4()}.jpg"

    file_path = os.path.join("temp", file_name)

    # Guardar imagen
    with open(file_path, "wb") as buffer:

        shutil.copyfileobj(file.file, buffer)

    # Predicción
    result = predict_image(file_path)

    # Eliminar imagen temporal
    os.remove(file_path)

    return result