import { useEffect, useState } from "react"
import ExepenseAdd from "./Components/ExpenseAdd"
import ExpenseItem from "./Components/ExpenseItem"
import axios from "axios";


function App(){
  const [expenses, setExpenses] = useState([]);
  useEffect(()=>{
    axios.get('https://expense-trackerapi.onrender.com/get-entries')
      .then(res=> {
          console.log(res.data)
          setExpenses(res.data)
        })
      .catch(err => console.log(err))
  }, [])

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id))
  }

  const addExpenses= (title,amount) => {
    const nextId = expense[expense.length - 1].id +1
      setExpenses([...expenses, {title: title, amount: amount}])
  }
 


let income = 0
let expense = 0
expenses.forEach((exp) => {
  if(exp.amount > 0){
    income  += exp.amount
  }else{
    expense += exp.amount
  }
})


  return(

    <>
   
    <div>
      <div className="head">Expense Tracker</div>
      <div className="balance">Balance: {income + expense}</div> 
      <div className="income-expense">
        <div className="income">
          <span className="tit">Income Amount</span>
          <span>{income}</span>
        </div>
        <div className="block"></div>
        <div className="expense">
          <span className="tit">Expense Amount</span>
          <span>{expense}</span>
        </div>
      </div>
      <ExepenseAdd addExpenses={addExpenses} />
    {expenses.map((expense) => (
      <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount}  id={expense.id} deleteExpense={deleteExpense} />
    ))}
        </div>
    </>
  )
}

export default App
