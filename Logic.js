function Sajith() {
    let name = document.getElementById("Task").value
    let Update = document.getElementById("show")

    if (name != "") {
        
        console.log(name)
        let Create_mym = document.createElement("div")

        let Name_of_Task = document.createElement("li")
        Name_of_Task.innerHTML = name

        let Dbtn = document.createElement('i')  //<i class="fa-solid fa-trash-can"></i>
        Dbtn.classList.add("fa-solid")
        Dbtn.classList.add("fa-trash-can")

        Create_mym.appendChild(Name_of_Task)
        Create_mym.appendChild(Dbtn)

        Update.appendChild(Create_mym)
        document.getElementById("Task").value = ""
    }
}

let Remove = document.getElementById("show")
Remove.addEventListener('click',exe)

let pressing = document.getElementById("Task")
pressing.addEventListener("keydown", write)

function exe(ok) {
    const ele = ok.target
    if (ele.classList[0] == 'fa-solid'){
        ele.parentElement.remove()
    }
}

function write(ok){
    if (ok.key == "Enter"){
        Sajith()
    }
}