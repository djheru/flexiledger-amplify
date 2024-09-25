export async function accountAction() {
  console.log('accountAction');
  return null;
}

export async function accountRemoveAction() {
  console.log('accountRemoveAction');
  return null;
}

export async function accountLoader() {
  console.log('accountLoader');
  return null;
}

export function Account() {
  return (
    <div>
      <h1>Account</h1>
      <p>Welcome to your account!</p>
    </div>
  );
}
