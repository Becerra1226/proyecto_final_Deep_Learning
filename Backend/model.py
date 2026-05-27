import torch
import torch.nn as nn


class SatelliteCNNReg(nn.Module):

    def __init__(self, num_classes=6):

        super(SatelliteCNNReg, self).__init__()

        # Bloque 1
        self.conv1 = nn.Conv2d(3, 16, kernel_size=3, padding=1)
        self.bn1 = nn.BatchNorm2d(16)
        self.pool1 = nn.MaxPool2d(2, 2)

        # Bloque 2
        self.conv2 = nn.Conv2d(16, 32, kernel_size=3, padding=1)
        self.bn2 = nn.BatchNorm2d(32)
        self.pool2 = nn.MaxPool2d(2, 2)

        # Bloque 3
        self.conv3 = nn.Conv2d(32, 64, kernel_size=3, padding=1)
        self.bn3 = nn.BatchNorm2d(64)
        self.pool3 = nn.MaxPool2d(2, 2)

        # Bloque 4
        self.conv4 = nn.Conv2d(64, 128, kernel_size=3, padding=1)
        self.bn4 = nn.BatchNorm2d(128)
        self.pool4 = nn.MaxPool2d(2, 2)

        # Bloque 5
        self.conv5 = nn.Conv2d(128, 256, kernel_size=3, padding=1)
        self.bn5 = nn.BatchNorm2d(256)
        self.pool5 = nn.MaxPool2d(2, 2)

        self.relu = nn.ReLU()

        # Flatten
        self.flatten_dim = 256 * 7 * 7

        # Fully Connected
        self.fc1 = nn.Linear(self.flatten_dim, 512)

        self.dropout = nn.Dropout(p=0.3)

        self.fc2 = nn.Linear(512, num_classes)

    def forward(self, x):

        # Bloque 1
        x = self.pool1(
            self.relu(
                self.bn1(
                    self.conv1(x)
                )
            )
        )

        # Bloque 2
        x = self.pool2(
            self.relu(
                self.bn2(
                    self.conv2(x)
                )
            )
        )

        # Bloque 3
        x = self.pool3(
            self.relu(
                self.bn3(
                    self.conv3(x)
                )
            )
        )

        # Bloque 4
        x = self.pool4(
            self.relu(
                self.bn4(
                    self.conv4(x)
                )
            )
        )

        # Bloque 5
        x = self.pool5(
            self.relu(
                self.bn5(
                    self.conv5(x)
                )
            )
        )

        # Flatten
        x = x.view(x.size(0), -1)

        # Fully Connected
        x = self.fc1(x)

        x = self.relu(x)

        x = self.dropout(x)

        x = self.fc2(x)

        return x