// Function to update user information
function updateUserInfo(name, accountNumber, email) {
    document.getElementById('username').textContent = name;
    document.getElementById('account-number').textContent = accountNumber;
    document.getElementById('email-address').textContent = email;
  }
  
  // Event listeners for user actions
  document.getElementById('deposit-action').addEventListener('click', function() {
    alert('Deposit action triggered');
  });
  
  document.getElementById('withdraw-action').addEventListener('click', function() {
    alert('Withdraw action triggered');
  });
  
  document.getElementById('loan-action').addEventListener('click', function() {
    alert('Loan action triggered');
  });
  
  document.getElementById('logout-action').addEventListener('click', function() {
    alert('Logout action triggered');
  })