import React from 'react';
// import './Card.css';

function ClientCard({ id, name, email, phone, onDelete }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <button className="button" onClick={onDelete}>Delete</button>
    </div>
  );
}

export default ClientCard;