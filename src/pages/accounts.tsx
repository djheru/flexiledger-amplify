export async function accountsAction() {
  console.log('accountsAction');
  return null;
}

export async function accountsLoader() {
  console.log('accountsLoader');
  return null;
}

export function AccountsPage() {
  return (
    <div>
      <h1>Accounts</h1>
      <p>Welcome to your accounts!</p>
    </div>
  );
}
