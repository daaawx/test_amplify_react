import React, {useEffect, useState} from 'react';
import './App.css';
import {API} from '@aws-amplify/api/lib/API';

function App() {
  const [coins, updateCoins] = useState([]);

  // Function to call API
  async function fetchCoins() {
    const data = await API.get('cryptoapi', '/coins');
    updateCoins(data.coins);
  }

  // Call fetchCoins when component loads
  useEffect(() => {
    fetchCoins();
  }, []);

  return (
      <div className="App">
        {
          coins.map((coin, index) =>
              <div key={index}>
                <h2>{coin.name} - {coin.symbol}</h2>
                <h5>{coin.price_usd}</h5>
              </div>,
          )
        }
      </div>
  );
}

export default App;
