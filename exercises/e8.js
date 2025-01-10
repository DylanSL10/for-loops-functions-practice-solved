
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  if (array.length === 0) {
    return [];
  }

  // Find the account with the greatest balance
  const accountWithGreatestBalance = array.reduce((maxAccount, currentAccount) => {
    return currentAccount.balance > maxAccount.balance ? currentAccount : maxAccount;
  });

  // Return the result as an array
  return [accountWithGreatestBalance];

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
