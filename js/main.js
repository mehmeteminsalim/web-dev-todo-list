/* Create Html Elements */

/* Dark Mode Switch Button */
var modeSwitchButton = document.createElement("button");
modeSwitchButton.classList.add("d-mode-switch-l");
modeSwitchButton.id = "d-mode-switch";
modeSwitchButton.textContent = "🌑";
document.body.appendChild(modeSwitchButton);
/* Todo Container */
var todoContainer = document.createElement("div");
todoContainer.classList.add("container", "todo-container", "row");
document.body.appendChild(todoContainer);
/* */
var todoContainerFirstChild = document.createElement("div");
todoContainerFirstChild.classList.add("col-lg-12", "mt-5", "mb-5");
todoContainer.appendChild(todoContainerFirstChild);
/* */
var todoInputGroup = document.createElement("div");
todoInputGroup.classList.add("input-group", "mb-3");
todoContainerFirstChild.appendChild(todoInputGroup);
/* */
var inputGroupInput = document.createElement("input");
inputGroupInput.setAttribute("type", "text");
inputGroupInput.setAttribute("placeholder", "Todo Ekle");
inputGroupInput.setAttribute("aria-describedby", "button-addon2");
inputGroupInput.classList.add("form-control");
todoInputGroup.appendChild(inputGroupInput);
/* */
var inputGroupAppend = document.createElement("div");
inputGroupAppend.classList.add("input-group-append");
todoInputGroup.appendChild(inputGroupAppend);
/* */
var inputGroupAppendButton = document.createElement("button");
inputGroupAppendButton.classList.add("btn", "btn-outline-secondary");
inputGroupAppendButton.setAttribute("type", "button");
inputGroupAppendButton.setAttribute("id", "button-addon2");
inputGroupAppendButton.textContent = "Ekle";
inputGroupAppend.appendChild(inputGroupAppendButton);
/* */
var todoContainerSecondChild = document.createElement("div");
todoContainerSecondChild.classList.add("col-lg-6", "row", "mx-auto");
todoContainer.appendChild(todoContainerSecondChild);
/* */
var todoContainerThirdChild = document.createElement("div");
todoContainerThirdChild.classList.add("col-lg-6", "row", "mx-auto");
todoContainer.appendChild(todoContainerThirdChild);
/* */
var todoListDiv1 = document.createElement("div");
todoListDiv1.classList.add("col-lg-12");
todoContainerSecondChild.appendChild(todoListDiv1);
/* */
var todoListDiv2 = document.createElement("div");
todoListDiv2.classList.add("col-lg-12");
todoContainerThirdChild.appendChild(todoListDiv2);
/* */
var todoHeader1 = document.createElement("h2");
todoHeader1.classList.add("text-center");
todoHeader1.textContent = "Yapılacaklar ";
todoListDiv1.appendChild(todoHeader1);
/* */
var todoHeaderCount1 = document.createElement("span");
todoHeaderCount1.classList.add("badge", "badge-secondary");
todoHeaderCount1.textContent = "0";
todoHeader1.appendChild(todoHeaderCount1);
/* */
var todoHeader2 = document.createElement("h2");
todoHeader2.classList.add("text-center");
todoHeader2.textContent = "Yapılanlar ";
todoListDiv2.appendChild(todoHeader2);
/* */
var todoHeaderCount2 = document.createElement("span");
todoHeaderCount2.classList.add("badge", "badge-secondary");
todoHeaderCount2.textContent = "0";
todoHeader2.appendChild(todoHeaderCount2);
/* */
var todoLists1 = document.createElement("ul");
todoLists1.classList.add("list-group");
todoListDiv1.appendChild(todoLists1);
/* */
var todoLists2 = document.createElement("ul");
todoLists2.classList.add("list-group");
todoListDiv2.appendChild(todoLists2);
/* -----*/
var listItem1 = document.createElement("li");
listItem1.classList.add("list-group-item");
/* */
var listCardDiv1 = document.createElement("div");
listCardDiv1.classList.add("card", "w-100");
listItem1.appendChild(listCardDiv1);
/* */
var listCardBody1 = document.createElement("div");
listCardBody1.classList.add("card-body");
listCardDiv1.appendChild(listCardBody1);
/* */
var listCardBodyHeader1 = document.createElement("div");
listCardBodyHeader1.classList.add("d-flex", "align-items-center");
listCardBody1.appendChild(listCardBodyHeader1);
/* */
var listCardH51 = document.createElement("h5");
listCardH51.classList.add("card-title", "mr-auto");
listCardBodyHeader1.appendChild(listCardH51);
/* */
var listCardH61 = document.createElement("h6");
listCardH61.classList.add("card-title");
listCardBodyHeader1.appendChild(listCardH61);
/* */
var listCardP1 = document.createElement("p");
listCardP1.classList.add("card-text");
listCardBody1.appendChild(listCardP1);
/* */
var dmodeHeader = document.createElement("h4");
dmodeHeader.textContent = "Koyu Mod 👇👇";
dmodeHeader.classList.add("dmode-header");
document.body.appendChild(dmodeHeader);
// var listCardA11 = document.createElement("a");
// listCardA11.classList.add("btn", "btn-primary", "btn-duzenle");
// listCardA11.setAttribute("type","button");
// listCardA11.setAttribute("data-toggle","modal");
// listCardA11.setAttribute("data-target","#staticBackdrop");
// listCardA11.textContent = "Düzenle";
// listCardBody1.appendChild(listCardA11);
// /* */
// var modal = document.createElement("div");
// modal.classList.add("modal","fade");
// modal.setAttribute("id","staticBackdrop");
// modal.setAttribute("data-backdrop","static");
// modal.setAttribute("data-keyboard","false");
// modal.setAttribute("tabindex","-1");
// modal.setAttribute("aria-labelledby","staticBackdropLabel");
// modal.setAttribute("aria-hidden","true");
// modal.innerHTML = `<div class="modal-dialog">
// <div class="modal-content">
//   <div class="modal-header">
//     <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
//     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//       <span aria-hidden="true">&times;</span>
//     </button>
//   </div>
//   <div class="modal-body">
//     ...
//   </div>
//   <div class="modal-footer">
//     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//     <button type="button" class="btn btn-primary">Understood</button>
//   </div>
// </div>
// </div>`;
/* */
var listCardA21 = document.createElement("a");
listCardA21.classList.add("btn", "btn-primary", "ml-2", "btn-tamamla");
listCardA21.textContent = "Tamamla";
listCardBody1.appendChild(listCardA21);
/* -----*/
var listItem2 = document.createElement("li");
listItem2.classList.add("list-group-item");
/* */
var listCardDiv2 = document.createElement("div");
listCardDiv2.classList.add("card", "w-100");
listItem2.appendChild(listCardDiv2);
/* */
var listCardBody2 = document.createElement("div");
listCardBody2.classList.add("card-body");
listCardDiv2.appendChild(listCardBody2);
/* */
var listCardBodyHeader2 = document.createElement("div");
listCardBodyHeader2.classList.add("d-flex", "align-items-center");
listCardBody2.appendChild(listCardBodyHeader2);
/* */
var listCardH52 = document.createElement("h5");
listCardH52.classList.add("card-title", "mr-auto");
listCardBodyHeader2.appendChild(listCardH52);
/* */
var listCardH62 = document.createElement("h6");
listCardH62.classList.add("card-title");
listCardBodyHeader2.appendChild(listCardH62);
/* */
var listCardP2 = document.createElement("p");
listCardP2.classList.add("card-text");
listCardBody2.appendChild(listCardP2);
/* */
// var listCardA12 = document.createElement("a");
// listCardA12.classList.add("btn", "btn-primary");
// listCardA12.textContent = "Düzenle";
// listCardBody2.appendChild(listCardA12);
// /* */
// var listCardA22 = document.createElement("a");
// listCardA22.classList.add("btn", "btn-primary");
// listCardA22.textContent = "Tamamla";
// listCardBody2.appendChild(listCardA22);

/* Get Elements */


/* Todos Object */

// function TodoBase(todoNumber,todoContent,todoDate){
// this.todoNumber = todoNumber;
// this.todoContent = todoContent;
// this.todoDate = todoDate;
// }
var todoBase = [];

eventListeners();
/* Event Listeners */
function eventListeners() {
    inputGroupAppendButton.addEventListener("click", addTodo);
    //todoListDiv1.addEventListener("click", todoUpdateFunc);
    todoListDiv1.addEventListener("click", doneTodoFunc);
    modeSwitchButton.addEventListener("click",modeSwitch);

}


/* Variables */
var doneCounter = 0;
var proccessCounter = 0;
/* Functions */
// function todoUpdateFunc(e) {
//     console.log(e.target);
//     if (e.target.className === "btn btn-primary btn-duzenle") {
        
//     }
// }


function doneTodoFunc(e) {
    if (e.target.className === "btn btn-primary ml-2 btn-tamamla") {
        //console.log(e.target.parentElement.childNodes[0].childNodes[0].textContent)
        listCardH52.textContent = e.target.parentElement.childNodes[0].childNodes[0].textContent;
        listCardH62.textContent = e.target.parentElement.childNodes[0].childNodes[1].textContent;
        listCardP2.textContent = e.target.parentElement.childNodes[1].textContent;
        var clone = listItem2.cloneNode(true);
        todoLists2.appendChild(clone);
        e.target.parentElement.parentElement.parentElement.remove();
        //todoBase.splice(e.target.getAttribute("todoValue"),1);
        delete todoBase[e.target.getAttribute("todoValue")];
        doneCounter ++;
        proccessCounter--;
        todoHeaderCount1.textContent = proccessCounter;
        todoHeaderCount2.textContent = doneCounter;
        console.log(e.target.getAttribute("todoValue"));
    }
    

}

function todoNumberGenerator() {
    return todoBase.length;
}


function addTodo(e) {
    var todoValue = inputGroupInput.value.trim();
    var getMonth = new Date().getMonth()+1;
    var getYear = new Date().getFullYear();
    todoBase.push({
        todoNumber: todoNumberGenerator(),
        todoContent: todoValue,
        todoDate: getMonth + "-" + getYear
    });
    todoHeaderCount1.textContent = todoBase.length;
    var lastTodo = todoBase[todoBase.length - 1];
    listCardH51.textContent = `Todo No : ${lastTodo.todoNumber}`;
    listCardH61.textContent = `Tarih : ${lastTodo.todoDate}`;
    listCardP1.textContent = lastTodo.todoContent;
    //listCardA11.setAttribute("todoValue", todoBase.length - 1);
    listCardA21.setAttribute("todoValue", todoNumberGenerator() - 1);
    var clone = listItem1.cloneNode(true);
    todoLists1.appendChild(clone);
    proccessCounter++;
    console.log(e.target);
};

function modeSwitch() {
    if (modeSwitchButton.classList.contains('d-mode-switch-l')) {
        document.body.classList.toggle("dark");
        todoHeader1.style.color = "white";
        todoHeader2.style.color = "white";
        dmodeHeader.style.color = "white"
        modeSwitchButton.classList.toggle("d-mode-switch-l");
        modeSwitchButton.classList.toggle("d-mode-switch-d");
        modeSwitchButton.textContent = "🌕";
        
    }
    else if(modeSwitchButton.classList.contains('d-mode-switch-d')){
        document.body.classList.toggle("dark");
        todoHeader1.style.color = "#000";
        todoHeader2.style.color = "#000";
        dmodeHeader.style.color = "#000";
        modeSwitchButton.classList.toggle("d-mode-switch-l");
        modeSwitchButton.classList.toggle("d-mode-switch-d");
        modeSwitchButton.textContent = "🌑";
    }
    
}



