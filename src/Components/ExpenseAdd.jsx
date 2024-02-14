import { useState } from "react"
  

const ExepenseAdd = (props) => {
    const {addExpenses} = props

    const [title, setTitle] =useState('')
    const[amount, setAmount] =useState(0)
    const [error, setError] = useState({})

const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(title, amount)
    let err = {}

    if(title === '' && amount === 0){
        alert("Please enter valid title and amount..")
        return
      }if(title.length< 3){
        setError({...error, title:  "The title should be alteasr 3 characters long.."})
        return
      }if(!amount){
        err.amount= "Enter a valid amount"
        return
      }
      if(Object.keys(err).length > 0){
        setError({...err})
        return
      }
    addExpenses(title,amount)
    setTitle('')
    setAmount(0)
}
const handleTitleChange = (e) => {
    setTitle(e.target.value)
    setError({...error,title: ''})
}
const handleAmountChange = (e) => {
    setAmount(parseInt(e.target.value))
    setError({...error,amount: ''})
}

    return (
        <>
        <form onSubmit={handleSubmit}>
        <div className="frame">
        <div className="fid">
            <div><label for="title">TITLE</label><br/>   
            <input type="text" id="title" value={title} onChange={handleTitleChange}></input>
            {error.title ?<div className="error">{error.title}</div>: null}
            </div>
        </div>
        <div className="fit">
            <div><label for="amount">SPENT AMOUNT</label><br/>
            <input type="number " id="amount" value={amount} onChange={handleAmountChange}></input>
            {error.amount ?<div className="error">{error.amount}</div>: null}
            </div>
        </div>
        <button type="submit" className="sub">ADD TRANSACTION</button>
    </div>
    </form>

        </>
    )
}
export default ExepenseAdd