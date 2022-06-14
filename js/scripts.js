function BankAccount(name, initial_deposit) {
  this.name = name;
  this.initial_deposit = initial_deposit;
}

// function Dog(name, colors, age) {
//   this.name = name;
//   this.colors = colors;
//   this.age = age;
// }

// let falcor = new Dog("Falcor", ["black"], 4);
// let nola = new Dog("Nola", ["white", "black"], 6);
// let patsy = new Dog("Patsy", ["brown"], 7);



  

// UI logic
$(document).ready(function() {
  $("form#register").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const initdepot = parseInt($("#deposit").val());
    let  = new Movie("Matrix", ["1:00pm", "3:00pm", "8:00pm"], true);
    let madagascar = new Movie("Madagascar", ["1:00pm", "8:00pm"], false);
    let incredibles = new Movie("The Incredibles", ["1:00pm", "3:00pm", "8:00pm"], true);
    $("#total-due").html(Discount(time, age));

  });
});

$(document).ready(function() {
  $("form#depositwithdrawal").submit(function(event) {
    event.preventDefault();
    const title = parseInt($("#question1").val());
    const time = parseInt($("#question2").val());
    const age = parseInt($("#question3").val());
    let matrix = new Movie("Matrix", ["1:00pm", "3:00pm", "8:00pm"], true);
    let madagascar = new Movie("Madagascar", ["1:00pm", "8:00pm"], false);
    let incredibles = new Movie("The Incredibles", ["1:00pm", "3:00pm", "8:00pm"], true);
    $("#total-due").html(Discount(time, age));

  });
});