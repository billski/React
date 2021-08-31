import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';
import "../Expenses/ExpensesItemList.css";

function ExpensesItemList(props){


    return (
      <Card className="expenses">
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

        <ExpenseItem
          title={props.ExpenseItem[3].title}
          amount={props.ExpenseItem[3].amount}
          date={props.ExpenseItem[3].date}
        />
      </Card>
    );
}

export default ExpensesItemList;