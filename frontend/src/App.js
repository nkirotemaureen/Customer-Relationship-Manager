import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ClientDashboard from './pages/ClientDashboard';
import TicketDashboard from './pages/TicketDashboard';
import './styles.css';

function App() {
  return (
    <Router>
      <header className="navbar">
        <h1>CRM App</h1>
        <nav>
          <Link to="/">Clients</Link>
          <Link to="/tickets">Tickets</Link>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<ClientDashboard />} />
          <Route path="/tickets" element={<TicketDashboard />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;