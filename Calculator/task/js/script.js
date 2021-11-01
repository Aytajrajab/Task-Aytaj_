let screen = document.getElementById("screen");
let clear = document.getElementById("clear");
let nums = document.getElementsByClassName("num");
let equal = document.getElementById("equal")


for (const f of nums) {
    f.addEventListener('click', () => {
        screen.innerText += f.innerText;
    })
}

equal.addEventListener('click', ()=> {
    screen.innerText=eval(screen.innerText);
})

clear.addEventListener('click', ()=>{
    screen.innerText = "";
})

