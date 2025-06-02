from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import crud, schemas
from ..database import SessionLocal
from typing import List

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/{client_id}", response_model=List[schemas.Interaction])
def read_interactions(client_id: int, db: Session = Depends(get_db)):
    return crud.get_interactions(db, client_id)

@router.post("/", response_model=schemas.Interaction)
def create_interaction(interaction: schemas.InteractionCreate, db: Session = Depends(get_db)):
    return crud.create_interaction(db, interaction)