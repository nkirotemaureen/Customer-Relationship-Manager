from fastapi import APIRouter
from typing import List
from Backend import schemas # Adjust if your import is different

router = APIRouter()

@router.get("/", response_model=List[schemas.Client])
def get_clients():
    return []