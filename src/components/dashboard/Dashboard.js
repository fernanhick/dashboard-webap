import React, {useState} from 'react';
import {Button, Card, Alert} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext';

export default function Dashboard() {
  const [error, setError] = useState('');
  const {currentUser, logout} = useAuth();
  const {history} = useHistory();

  const tradeWs = new WebSocket('wss://ws.coincap.io/trades/bitfinex');

  tradeWs.onmessage = function (msg) {
    console.log(msg.data);
  };
  return (
    <>
      <h1>DASHBOARD</h1>
    </>
  );
}
