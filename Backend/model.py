import torch
import torch.nn as nn
import torch.nn.functional as F


# Evitar importar `CLASSES` aquí para no crear un import circular con `predict.py`.

class SatelliteCNNReg(nn.Module):

    def __init__(self, num_classes=6):
        super(SatelliteCNNReg, self).__init__()
        
        # --- BLOQUE EXTRACTOR 1 ---
        # Entrada: 3 canales (RGB). Salida: 32 canales.
        self.conv1 = nn.Conv2d(in_channels=3, out_channels=32, kernel_size=3, padding=1)
        self.bn1 = nn.BatchNorm2d(32)
        self.pool1 = nn.MaxPool2d(kernel_size=2, stride=2)
        
        # --- BLOQUE EXTRACTOR 2 ---
        self.conv2 = nn.Conv2d(in_channels=32, out_channels=64, kernel_size=3, padding=1)
        self.bn2 = nn.BatchNorm2d(64)
        self.pool2 = nn.MaxPool2d(kernel_size=2, stride=2)
        
        # --- BLOQUE EXTRACTOR 3 ---
        self.conv3 = nn.Conv2d(in_channels=64, out_channels=128, kernel_size=3, padding=1)
        self.bn3 = nn.BatchNorm2d(128)
        self.pool3 = nn.MaxPool2d(kernel_size=2, stride=2)
        
        # --- BLOQUE EXTRACTOR 4 (Profundidad adicional para topografía) ---
        self.conv4 = nn.Conv2d(in_channels=128, out_channels=256, kernel_size=3, padding=1)
        self.bn4 = nn.BatchNorm2d(256)
        
        # AdaptiveAvgPool2d asegura que, sin importar el tamaño de la imagen original (IMG_SIZE),
        # la salida hacia la capa lineal siempre será de 4x4. Evita errores de dimensionalidad.
        self.global_pool = nn.AdaptiveAvgPool2d((4, 4))
        
        # --- CLASIFICADOR (Fully Connected) ---
        self.flatten = nn.Flatten()
        
        # 256 canales * 4 * 4 (salida del pooling adaptativo)
        self.fc1 = nn.Linear(256 * 4 * 4, 512)
        self.bn_fc = nn.BatchNorm1d(512) # Normalización en la capa densa
        self.dropout = nn.Dropout(p=0.5) # Regularización fuerte (Punto 5)
        self.fc2 = nn.Linear(512, num_classes)

    def forward(self, x):
        # Bloques de convolución + Batch Norm + ReLU + Pooling
        x = self.pool1(F.relu(self.bn1(self.conv1(x))))
        x = self.pool2(F.relu(self.bn2(self.conv2(x))))
        x = self.pool3(F.relu(self.bn3(self.conv3(x))))
        
        # Último bloque sin pooling agresivo para no perder detalle espacial
        x = F.relu(self.bn4(self.conv4(x)))
        x = self.global_pool(x)
        
        # Aplanar para las capas lineales
        x = self.flatten(x)
        
        # Capas Densas + Dropout
        x = F.relu(self.bn_fc(self.fc1(x)))
        x = self.dropout(x)
        x = self.fc2(x) # Salida cruda (logits) para el CrossEntropyLoss
        
        return x