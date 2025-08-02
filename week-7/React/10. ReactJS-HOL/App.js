import React from 'react';

function App() {
  const item = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  const imgURL ="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80";


  const rentStyle = {
    color: item.Rent <= 60000 ? 'red' : 'green'
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Office Space , at Affordable Range</h1>
      <img src={imgURL} width="25%" height="25%" alt="Office Space" />
      <h2>Name: {item.Name}</h2>
      <h3 style={rentStyle}>Rent: Rs. {item.Rent}</h3>
      <h3>Address: {item.Address}</h3>
    </div>
  );
}

export default App;
