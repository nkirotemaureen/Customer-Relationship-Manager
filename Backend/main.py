from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine
from Backend import models
from routers import clients
from routers import tickets

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(clients.router, prefix="/clients", tags=["Clients"])
app.include_router(tickets.router, prefix="/tickets", tags=["Tickets"])