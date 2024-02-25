function greeting(greetingHandler, name) {
  greetingHandler(name);
}
// const name ="Halim and kalim";
// greeting(name)

// const number =43;
// greeting(number)

// const numberas =[43, 43,22,56,43,21]
// greeting(numberas)

// const laptop ={price : 45333 , brand : "core i5 intel" , memory : "8gb"}
// greeting(laptop)

function greetingHandler(name) {
  console.log(" Good Morning", name);
}

greeting(greetingHandler, "tom pinky");

function greetEvining(name) {
  console.log("Good evening", name);
}
greeting(greetEvining, " kala miya");
