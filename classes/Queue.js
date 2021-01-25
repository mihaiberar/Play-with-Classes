import { Utils } from "./DOMUtils.js";

export class Queue {
  constructor() {
    this.input = Utils.createInput();
    this.myPar = Utils.createMyPar();
    this.myParty = [
      "Dan",
      "Oana",
      "Vlad",
      "Tudor",
      "Roxi",
      "Dana",
      "Mihai",
      "Anca",
    ];
  }
  addQueue() {
    if (this.input.value) {
      this.myParty.push(this.input.value);
      this.myPar.innerHTML = this.myParty;
      console.log(this.myParty);
    }
    this.input.focus();
  }
  removeQueue() {
    this.myParty.shift();
    this.myPar.innerHTML = this.myParty;
    console.log(this.myParty);
    this.input.focus();
  }
}
