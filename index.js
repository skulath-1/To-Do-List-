const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");

const ulEl = document.querySelector(".list");
let list = JSON.parse(localStorage.getItem("list"));

if (list) {
  list.forEach((task) => {
    toDoList(task);
  });
}
formEl.addEventListener("submit", (event) => {
  //console.log(event.preventDefault())
  event.preventDefault();
  toDoList()
});

function toDoList(myTask) {
  let myTask = inputEl.value;
  if (myTask) {
    newTask = myTask.name;
  }
  console.log(newTask);
  const liEl = document.createElement("li");
  if (myTask && myTask.checked) {
    liEl.classList.add("checked");
  }
  liEl.innerText = newTask;
  ulEl.appendChild(liEl);
  inputEl.value = "";

  const checkButtonEl = document.createElement("div");
  checkButtonEl.innerHTML = `<i class="fas fa-check-square"></i>`;
  liEl.appendChild(checkButtonEl);

  const trashButton = document.createElement("div");
  trashButton.innerHTML = `<i class= fas fa-trash></i>`;
  liEl.appendChild(trashButton);

  checkButtonEl.addEventListener("click",()=>{
    liEl.classList.toggle("checked")
    updateLocalStorage()
  })
  trashButton.addEventListener("click",()=>{
    liEl.remove()
    updateLocalStorage()
  })
  updateLocalStorage()
}

function updateLocalStorage(){
    const liEls = document.querySelectorAll("li")
    list = []
    liEls.forEach((liEl)=>{
        list.push({
            name:liEl.innerText,
            checked:liEl.classList.contains("checked")
        })
    })
    localStorage.setItem("list",JSON.stringify(list))
    // alert("Task added successfully")
}
