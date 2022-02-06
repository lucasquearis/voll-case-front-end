import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Message from './components/MessageError';
import Chat from './pages/Chat';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Message />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
