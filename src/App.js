import React, { useEffect, useState } from 'react';
import './App.css';
import {useMoralis,useNativeBalance} from 'react-moralis'

function App() {
  const {authenticate,isAuthenticated,user} = useMoralis();
  const {data, getBalances} = useNativeBalance();
  const [balance, setBalance] = useState();

  useEffect(() => {
    authenticate();
  }, [])
  

  // to fetch balance in yout conected account 
  const getBalance = async()=>{
    let a = await getBalances();
    console.log(a);
  }
  console.log(isAuthenticated);
  return (
    <div className="App">
{!isAuthenticated ? <button onClick={()=>authenticate()} >Connect wallet</button> : "Account= 0xiwdjjwd...."}
    <button onClick={getBalance} >Get My Account Balance</button>
    <p>You have {balance} Matic in your acount </p>
    <div>
    <input type={"text"} placeholder="recipient-account" />
    <button>Send</button>
    </div>
    </div>
  );
}

export default App;
