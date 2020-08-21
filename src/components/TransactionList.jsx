import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
    // deconstruct context with transactions
    const { transactions } = useContext(GlobalContext);
    
    
    
    
    return (
        <div>
        <h3>History Transactions</h3>
            <ul className="list">
                {/* mapping transactions from Global state, and render and pass the prop */}
                {transactions.map(transaction =>
                    (<Transaction key={transaction.id} transaction={transaction} />))}
        
      </ul>
        </div>
    )
}
