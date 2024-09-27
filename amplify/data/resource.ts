import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any unauthenticated user can "create", "read", "update",
and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  Category: a.enum(
    [
      'Books and Magazines',
      'Cable TV/Streaming Services',
      'Car Insurance',
      'Car Payment',
      'Charitable Donations',
      'Childcare',
      'Clothing',
      'Coffee/Bar',
      'Credit Cards',
      'Dining Out',
      'Electric Utilities',
      'Emergency Fund',
      'Entertainment',
      'Fuel/Transportation',
      'Gas Utilities',
      'Gifts',
      'Groceries',
      'Gym Membership',
      'Health Insurance',
      'Home/Rental Insurance',
      'Household Goods',
      'Household Maintenance',
      'Internet',
      'Investment Portfolio',
      'Life Insurance',
      'Maintenance and Repairs',
      'Medical Expenses',
      'Mortgage/Rent',
      'Office Supplies',
      'Other',
      'Personal Loan (Installment)',
      'Pet Expenses',
      'Pharmacy',
      'Professional Development',
      'Property Taxes',
      'Retirement Fund',
      'Salon Services',
      'Savings Account',
      'Software Subscriptions',
      'Student Loans',
      'Toys and Games',
      'Trash Collection',
      'Travel',
      'Tuition',
      'Vacation Savings',
      'Water/Sewer',
      'Wireless Phone',
    ] // Always good to have an 'Other' category for uncategorized expenses
  ),
  Account: a
    .model({
      accountName: a.string(),
      category: a.ref('Category'),
      nextDueDate: a.date(),
      paymentAmount: a.float(),
      isRecurring: a.boolean(),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
