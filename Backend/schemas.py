from pydantic import BaseModel
from typing import List,Optional
from datetime import datetime

class InteractionBase(BaseModel):
    type: str
notes: Optional[str] = None

class InteractionCreate(InteractionBase):
    client_id: int

class Interaction(InteractionBase):
    id: int
date: datetime

class Config:
    orm_mode = True

class ClientBase(BaseModel):
    name: str
email: Optional[str]
phone: Optional[str]
company: Optional[str]

class ClientCreate(ClientBase):
    pass

class Client(ClientBase):
    id: int
interactions: List[Interaction] = []

class Config:
    orm_mode = True
