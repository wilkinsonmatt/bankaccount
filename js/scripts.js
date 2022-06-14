function BankAccount(name, deposit) {
  this.name = name;
  this.currentBalance = deposit;
}

BankAccount.prototype.AddToInit = function(depoAmount, withAmount) {
  user.currentBalance += depoAmount - withAmount;
};

let user = new BankAccount();
// UI logic
$(document).ready(function() {
  $("form#register").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const initdepot = parseInt($("#deposit").val());
    user.name = name;
    user.currentBalance = initdepot;
    $("#balance").html(user.currentBalance);
  });

  
  $("form#depositwithdrawal").submit(function(event) {
    event.preventDefault();
    const depoAmount = parseInt($("#deposit_amount").val());
    const withAmount = parseInt($("#withdrawal_amount").val());
    user.AddToInit(depoAmount, withAmount);
    $("#balance").html(user.currentBalance);
  });
});

 

