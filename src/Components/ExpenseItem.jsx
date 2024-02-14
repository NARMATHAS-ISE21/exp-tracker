const ExpenseItem = (props) => {
    const {id,title, amount, deleteExpense} = props

    const handleDelete =() => {
        deleteExpense(id)
    }

    return (
    <div className="exp-tracker">
        <div className= {`item ${amount > 0 ? "positive" : "negative"}`}>
            <div className="title">{title}</div>
            <div className="amount">{amount}</div>
        </div>
        <button className="delete-btn" onClick={handleDelete}>X</button>
    </div>
    )
}

export default ExpenseItem