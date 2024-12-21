FROM python:3.9-slim

WORKDIR /src

# Copier les requirements et installer les dépendances
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copier tout le dossier app
COPY . .

# La commande doit pointer vers le fichier main.py dans le dossier app
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]