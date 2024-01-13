import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [btcData, setBtcData] = useState({});
  useEffect(() => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`) 
    .then((response) => response.json())
    .then((jsonData) => setBtcData(jsonData.bpi.USD))
    

  }, []);



  return (
    <div>
      <h1>Current BTC DATA</h1>
      <p>Code: {btcData.code}</p>
      <p>Symbol: {btcData.symbol}</p>
      <p>Rate: {btcData.rate}</p>
      <p>Description: {btcData.discription}</p>
      <p>Rate Float: {btcData.rate_float}</p> 

    </div>
  );
}

export default App;
