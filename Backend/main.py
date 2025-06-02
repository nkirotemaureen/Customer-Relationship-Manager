from fastapi import FastAPI
from Backend.api import clients, interactions

app = FastAPI()

app.include_router(clients.router, prefix="/clients", tags=["clients"])
app.include_router(interactions.router, prefix="/interactions", tags=["interactions"])