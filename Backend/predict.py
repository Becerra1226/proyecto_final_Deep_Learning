import torch
from torchvision import transforms
from PIL import Image

from model import SatelliteCNNReg


# Clases del modelo
CLASSES = [
    "airstrips",
    "deforestation",
    "forest",
    "illegal_mining",
    "illicit_crops_PCCA",
    "water"
]


# Device
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")


# Cargar modelo
model = SatelliteCNNReg(num_classes=6)

model.load_state_dict(
    torch.load("../Model/best_reg_cnn.pt", map_location=device)
)

model.to(device)

model.eval()


# Transformaciones
transform = transforms.Compose([

    transforms.Resize((224, 224)),

    transforms.ToTensor(),

    transforms.Normalize(
        mean=[0.485, 0.456, 0.406],
        std=[0.229, 0.224, 0.225]
    )

])


def predict_image(image_path):

    # Abrir imagen
    image = Image.open(image_path).convert("RGB")

    # Aplicar transformaciones
    image = transform(image)

    # Agregar dimensión batch
    image = image.unsqueeze(0).to(device)

    # Inferencia
    with torch.no_grad():

        outputs = model(image)

        probabilities = torch.softmax(outputs, dim=1)

        confidence, predicted = torch.max(probabilities, 1)

    predicted_class = CLASSES[predicted.item()]

    return {
        "class": predicted_class,
        "confidence": round(confidence.item() * 100, 2)
    }