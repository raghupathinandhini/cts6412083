import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import GuestPage from './Components/GuestPage';
import UserPage from './Components/UserPage';

function LoginButton({ onLogin }) {
  return <button onClick={onLogin}>Login</button>;
}

function LogoutButton({ onLogout }) {
  return <button onClick={onLogout}>Logout</button>;
}

function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/user');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Ticket Booking App</h1>
      {isLoggedIn ? (
        <LogoutButton onLogout={handleLogout} />
      ) : (
        <LoginButton onLogin={handleLogin} />
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Home /><GuestPage /></>} />
        <Route path="/user" element={<><Home /><UserPage /></>} />
      </Routes>
    </Router>
  );
}

export default App;
