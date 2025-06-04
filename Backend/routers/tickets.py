from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from models import Ticket
from database import get_db
from schemas import TicketOut  # This should define how tickets are returned

router = APIRouter()

@router.get("/", response_model=list[TicketOut])
def get_all_tickets(db: Session = Depends(get_db)):
    return db.query(Ticket).all()