import React from 'react';
// import './Card.css';

function TicketCard({ title, description, clientName, status, onDelete }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Description: {description}</p>
      <p>Client: {clientName}</p>
      <p>Status: {status}</p>
      <button className="button" onClick={onDelete}>Delete</button>
    </div>
  );
}

export default TicketCard;