import React from 'react';
import { Heading } from './components/Heading';
import {Balance } from './components/Balance';
import { ProfitExpenses } from './components/ProfitExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
    <div className="App">
      <Heading />
      <div className="container">
        <Balance />
        <ProfitExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
