from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column ,Integer, String, DateTime
from sqlalchemy import relationship
from datetime import datetime

Base = declarative_base()
# crete a base model


class Client(Base):
    __tablename__ ="clients"

    id = Column(Integer(), primary_key = True, index = True )
    name = Column(String, nullable = False)
    email = Column(String)
    company =Column(String)
    interactions = relationship("Interaction", back_populates = "client")

    class Interaction(Base):
        __tablename__ ="interactions"
        id = Column(Integer, primary_key = True, index = True)
        #client_id =Column(Integer, ForeignKey("clients.id"))
        type = Column (String)
        notes = Column(String)
        date = Column(DateTime, default = datetime.gmtnow)
        client = relationship("Client",back_populates = "interactions")