import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


export const ProfitExpenses = () => {
const { transactions } = useContext(GlobalContext);
const amounts = transactions.map(transaction => transaction.amount);
const profit = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
).toFixed(2);
    
    
    
    
    
    return (
        <div className="pro-exp-container">
        <div>
          <h4 className="pro-title">Profit</h4>
                <p className="money plus">{profit}</p>
        </div>
        <div>
          <h4 className="ex-title">Expense</h4>
                <p className="money minus">{expense}</p>
        </div>
      </div>
    )
}
