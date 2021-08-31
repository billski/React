import ExpenseItem from './ExpenseItem';
import './ExpensesItemList.css';

function ExpensesItemList(props){


    return (
      <div className="expenses"> 
        <h2>Expense Tracker</h2>
        <ExpenseItem
          title={props.ExpenseItem[0].title}
          amount={props.ExpenseItem[0].amount}
          date={props.ExpenseItem[0].date}
        />

        <ExpenseItem
          title={props.ExpenseItem[1].title}
          amount={props.ExpenseItem[1].amount}
          date={props.ExpenseItem[1].date}
        />

        <ExpenseItem
          title={props.ExpenseItem[2].title}
          amount={props.ExpenseItem[2].amount}
          date={props.ExpenseItem[2].date}
        />
      </div>
    );
}

export default ExpensesItemList;