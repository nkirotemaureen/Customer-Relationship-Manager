from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class Client(BaseModel):
    name: str
    email: str

@router.post("/")
def create_client(client: Client):
    return {"message": "Client created", "client": client}

