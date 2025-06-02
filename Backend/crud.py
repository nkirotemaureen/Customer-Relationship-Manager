from sqlalchemy.orm import Session
from . import models, schemas

def get_clients(db: Session):
    return db.query(models.Client).all()

def create_client(db: Session, client: schemas.ClientCreate):
    db_client = models.Client(**client.dict())
    db.add(db_client)
    db.commit()
    db.refresh(db_client)
    return db_client

def get_interactions(db: Session, client_id: int):
    return db.query(models.Interaction).filter(models.Interaction.client_id == client_id).all()

def create_interaction(db: Session, interaction: schemas.InteractionCreate):
    db_interaction = models.Interaction(**interaction.dict())
    db.add(db_interaction)
    db.commit()
    db.refresh(db_interaction)
    return db_interaction