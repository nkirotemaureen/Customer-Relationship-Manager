from pydantic import BaseModel

class ClientBase(BaseModel):
    name: str
    email: str

class ClientCreate(ClientBase):
    pass

class Client(ClientBase):
    id: int
class TicketOut(BaseModel):
    client_id: int
    description: str
    id: int
    class Config:
        orm_mode = True