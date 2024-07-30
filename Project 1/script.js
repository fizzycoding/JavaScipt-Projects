const input = document.getElementById("ip")
const addBtn = document.getElementById("addBTN")
const container = document.getElementById("listContainer")


function addList() {
    let li = document.createElement("li")
    let cross = document.createElement("span")
    cross.className = "material-symbols-outlined"
    cross.innerHTML = "close";
    li.innerHTML = input.value.trim();
    li.className = "unselected"
    li.appendChild(cross)
    container.appendChild(li)
    saveData()
}

input.addEventListener("keypress", (e) => {
    
    if(e.key == "Enter"){
        addList()
        input.value = ''
        saveData()
    }
})
addBtn.addEventListener("click", () =>{
    if(input.value.trim() === '') {
        console.log("Noob");
    }else{
        addList()
    }
    input.value = ''
    saveData()
})

container.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("selected");
        saveData()
    }else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }
    saveData()
})


function saveData() {
    localStorage.setItem("data", container.innerHTML)
}

function fetchData() {
    container.innerHTML = localStorage.getItem("data");
}

fetchData()