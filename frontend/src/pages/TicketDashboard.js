import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import TicketCard from '../components/TicketCard'
import TicketForm from '../components/TicketForm'

const TicketDashboard=() => {
  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    const res = await api.get('/tickets/');
    setTickets(res.data);
  };

  async function addTicket(ticket) {
    const res = await api.post('/tickets/', ticket);
    setTickets([...tickets, res.data]);
  }

  const deleteTicket = async (id) => {
    await api.delete(`/tickets/${id}`);
    setTickets(tickets.filter(t => t.id !== id));
  };

  


  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div>
      <h2>Ticket Dashboard</h2>
      <TicketForm onAddTicket={addTicket} />
      <div className="card-grid">
        {tickets.map(ticket => (
          <TicketCard key={ticket.id} {...ticket} onDelete={() => deleteTicket(ticket.id)} />
        ))}
      </div>
      <div>
      <h2>All Tickets</h2>
      {tickets.map(ticket => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  


    </div>
  );
};

export default TicketDashboard;