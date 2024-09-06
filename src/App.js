
import './App.css';
import Header from './components/header.js';
import Balance from './components/balance.js';
import IncomeAndExpense from './components/incomeandexpense.js'
import TransactionList from './components/transactionlist.js'
import AddTransaction from './components/addtransaction.js'
import Darkmode from './components/darkmode.js'
function App() {
  return (
    <div className="flex border items-center  min-h-screen">
    <div className="md:container mx-auto border-0 lg:border-4 lg:border-green-500 rounded-2xl">
     <div className="flex justify-between ">
    <Header/>
    <Darkmode/>
    </div> 
    <Balance/>
    <IncomeAndExpense/>
    <TransactionList/>
    <AddTransaction/>
    </div>
    </div>
  );
}

export default App;
