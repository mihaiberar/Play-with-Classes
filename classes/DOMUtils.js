export class Utils {
  static createInput() {
    let input = document.createElement("input");
    input.setAttribute("placeholder", "Enter new person");
    input.setAttribute("onfocus", "this.value=null");
    input.setAttribute("id", "firstInput");
    document.body.appendChild(input);
    input.focus();
    return input;
  }
  static getInput() {
    const input = document.querySelector("#firstInput");
    return input;
  }
  static createAddButton() {
    const addButton = document.createElement("button");
    addButton.innerHTML = "+";
    document.body.appendChild(addButton);
    const myQueueLabel = document.createElement("label");
    document.body.appendChild(myQueueLabel);
    myQueueLabel.innerText = "Queue: ";
    myQueueLabel.appendChild(addButton);
    return addButton;
  }
  static createSubButton() {
    const subButton = document.createElement("button");
    subButton.innerHTML = "-";
    document.body.appendChild(subButton);
    subButton.classList.add("sub");
    return subButton;
  }
  static createMyPar() {
    let myPar = document.createElement("p");
    document.body.appendChild(myPar);
    return myPar;
  }
  static createAddStack() {
    const addStack = document.createElement("button");
    addStack.innerHTML = "+";
    document.body.appendChild(addStack);
    const myStackLabel = document.createElement("label");
    document.body.appendChild(myStackLabel);
    myStackLabel.innerText = "Stack: ";
    myStackLabel.appendChild(addStack);
    return addStack;
  }
  static createSubStack() {
    const subStack = document.createElement("button");
    subStack.innerHTML = "-";
    document.body.appendChild(subStack);
    subStack.classList.add("sub");
    return subStack;
  }
  static createMyList() {
    let myList = document.createElement("ol");
    document.body.appendChild(myList);
    return myList;
  }
  static createListItem() {
    const listItem = document.createElement("li");
    return listItem;
  }
}
