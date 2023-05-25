const inp = document.querySelector("input");
const ul = document.getElementById("list");
const btn = document.getElementById("btn");
let txt = [];
btn.onclick = e=>{
    e.preventDefault();
    if (inp.value) {
        txt.push(inp.value);
        inp.value = "";
        fillList();
    }
    else{
        alert("Nese daxil et");
    }
}

function fillList() {
    ul.innerHTML = txt.reduce((total, val)=> total + `<li>${val}</li>`,'');
}