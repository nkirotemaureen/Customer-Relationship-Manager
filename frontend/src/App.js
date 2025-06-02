import React from 'react';
import ClientForm from './components/ClientForm';
import ClientList from './components/ClientList';

function App() {
return (
<div className="App">
<h1>Simple CRM App</h1>
<ClientForm onClientAdded={() => window.location.reload()} />
<ClientList />
</div>
);
}

export default App;