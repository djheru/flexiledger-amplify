export async function profileAction() {
  console.log('profileAction');
  return null;
}

export async function profileCategoryRemoveAction() {
  console.log('profileCategoryRemoveAction');
  return null;
}

export async function profileLoader() {
  console.log('profileLoader');
  return null;
}

export function ProfilePage() {
  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome to your profile!</p>
    </div>
  );
}
