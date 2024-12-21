from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class UserBase(BaseModel):
    username: str
    food_preferences: Optional[str] = None

class UserCreate(UserBase):
    pass

class User(UserBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True

class MessageBase(BaseModel):
    content: str
    receiver_id: Optional[int] = None

class MessageCreate(MessageBase):
    sender_id: int

class Message(MessageBase):
    id: int
    sender_id: int
    created_at: datetime

    class Config:
        orm_mode = True