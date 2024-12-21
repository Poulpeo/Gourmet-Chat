from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine
from . import models, schemas

app = FastAPI()

# Configuration CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Création des tables
models.Base.metadata.create_all(bind=engine)

@app.post("/users")
async def create_user(user: schemas.UserCreate):
    return {"msg": "User created"}

@app.get("/users")
async def get_users():
    return {"users": []}

@app.post("/messages")
async def send_message(message: schemas.MessageCreate):
    return {"msg": "Message sent"}