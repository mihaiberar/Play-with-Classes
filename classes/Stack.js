import { Utils } from "./DOMUtils.js";

export class Stack {
  constructor() {
    this.myList = Utils.createMyList();
    this.input = Utils.getInput();
  }
  addStack() {
    if (this.input.value) {
      let newItem = document.createElement("li");
      let textnode = document.createTextNode(this.input.value);
      newItem.appendChild(textnode);
      this.myList.insertBefore(newItem, this.myList.childNodes[0]);
      console.log(this.myList);
      this.input.focus();
    }
  }
  removeStack() {
    this.myList.removeChild(this.myList.firstChild);
    console.log(this.myList);
    this.input.focus();
  }
}
