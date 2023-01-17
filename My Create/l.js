fun = () => {
    if (v.value === '')
        return 0
    ci(v.value)
}

Delete = (w) => {
    document.getElementById(w).remove()
}

ci = (j) => {
    count += 1
    let newly = `<div id="${count}"> <h3 style="display: inline !important;"> ${j} </h3> <i class="fa-sharp fa-solid fa-trash" onclick="Delete(${count})"> </i> </div>`
    console.log(count)
    ok.innerHTML += newly
    v.value = ''
    v.focus()
}

del = () => document.getElementById('show').innerHTML = ''

let v = document.getElementById('gt')
let ok = document.getElementById("show")
let ev = document.getElementById("hellow")
let count = 0

const keyboard = document.querySelector(".col-md-6")
keyboard.addEventListener("keydown", e => {
    if (v.value === '')
        return 0
    if (e.key === "Enter")
        ci(v.value)
})




