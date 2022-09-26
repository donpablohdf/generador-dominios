let quien = ["The dog", "My duck", "His turtle", "My bird"];
let que = ["eat", "pissed", "crushed", "broked"];
let lacosa = "my homework";
let donde = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
window.onload = function() {
  //write your code here
  let elquien = quien[Math.floor(Math.random() * 4)];
  let elque = que[Math.floor(Math.random() * 4)];
  let eldonde = donde[Math.floor(Math.random() * 5)];
  let excusa = elquien + " " + elque + " " + lacosa + " " + eldonde;
  document.getElementById("excuse").innerHTML = excusa;
};
