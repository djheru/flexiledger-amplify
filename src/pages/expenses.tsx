export async function expensesAction() {
  console.log('expensesAction');
  return null;
}

export async function expensesLoader() {
  console.log('expensesLoader');
  return null;
}

export function ExpensesPage() {
  return (
    <div>
      <h1>Expenses</h1>
      <p>Welcome to your expenses!</p>
    </div>
  );
}
