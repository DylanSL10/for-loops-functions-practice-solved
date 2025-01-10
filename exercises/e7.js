// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastPositiveBalance(array) {

    const positiveBalanceAccounts = array.filter(account => account.balance > 0);
  
    // If no accounts have a positive balance, return an empty array
    if (positiveBalanceAccounts.length === 0) {
      return [];
    }
  
    // Find the account with the smallest positive balance
    const accountWithLeastBalance = positiveBalanceAccounts.reduce((minAccount, currentAccount) => {
      return currentAccount.balance < minAccount.balance ? currentAccount : minAccount;
    });
  
    // Return the result as an array
    return [accountWithLeastBalance];
  
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function