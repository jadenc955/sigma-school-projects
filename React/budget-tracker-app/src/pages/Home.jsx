import { Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import DeleteModal from "../components/DeleteModal";

export default function Home() {
  const userProfile = useSelector((state) => state.user.userProfile);
  const userToken = useSelector((state) => state.user.userToken);

  const transactions = userProfile.find(
    (el) => el.token === userToken
  ).transactions;

  const transactionAmounts = transactions.map(
    (transaction) => transaction.amount
  );

  const total = transactionAmounts.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return (
    <Container>
      <h1 className="my-3">Your transactions</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Description</th>
            <th>Type</th>
            <th>Amount (RM)</th>
          </tr>
        </thead>
        <tbody>
          <TransactionGroup transactions={transactions} />
        </tbody>
      </Table>
      <h1>Total: {total} </h1>
    </Container>
  );
}

function TransactionGroup({ transactions }) {
  return transactions.map((transaction) => {
    const { id, description, amount, isExpense } = transaction;
    return (
      <tr key={id}>
        <td>{description}</td>
        <td>{isExpense ? "Expense" : "Income"}</td>
        <td style={{position: "relative"}}>
          {isExpense ? "" : "+"}
          {amount}
          <DeleteModal transaction={transaction} />
        </td>
      </tr>
    );
  });
}
