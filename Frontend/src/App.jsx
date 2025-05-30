import React from 'react';
import ClientList from './components/ClientList';
import ClientForm from './components/ClientForm';

function App() {
  return (
    <div className="App">
      <h1>CRM App</h1>
      <ClientForm onClientAdded={() => window.location.reload()} />
      <ClientList />
    </div>
  );
}

export default App;