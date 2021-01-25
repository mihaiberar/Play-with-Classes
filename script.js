import { Queue } from "./classes/Queue.js";
import { Stack } from "./classes/Stack.js";
import { Utils } from "./classes/DOMUtils.js";

let myParty = ["Dan", "Oana", "Vlad", "Tudor", "Roxi", "Dana", "Mihai", "Anca"];

console.log(myParty);

let myQueue1 = new Queue(myParty);

let addButton = Utils.createAddButton();

let subButton = Utils.createSubButton();

addButton.addEventListener("click", () => {
  myQueue1.addQueue();
});

subButton.addEventListener("click", () => {
  myQueue1.removeQueue();
});

let addStack = Utils.createAddStack();

let subStack = Utils.createSubStack();

let myStack1 = new Stack();

addStack.addEventListener("click", () => {
  myStack1.addStack();
});
subStack.addEventListener("click", () => {
  myStack1.removeStack();
});
