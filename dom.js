document.getElementById(" ")

// // نحطه في متغير افضل نفس المثال التالي

// let fahad = document.getElementById("v")
// fahad.innerHTML ="hello"

// // console.log(fahad);

// /////////// claas
// // let z = document.getElementsByClassName("")




// let pecture = document.getElementsByTagName("github-logo.png")
// // console.log(pecture);


// let List = document.querySelector("ul")

// List.innerHTML =`<li>name</li>
// <li>city</li>
// <li>location</li>
// `
// console.log(List);





//////////////////Q1


let text = document.getElementsByClassName("text")[0]
    text.style.color ="blue"
    text.style.backgroundcolor ="green"
console.log(text);

/////////////////Q2


let phar = document.getElementById("item")
console.log(phar);
phar.setAttribute("class","item");

/////////////////Q3

let img = document.getElementsByTagName("img")[0]
img.src = "github-logo.png"


////////////////Q4

let list = document.querySelector("ul")
console.log(list);
list.innerHTML =`<li>name</li>
<li>city</li>
<li>location</li>
`
console.log(list); 


// list.insertAdjacentHTML("afterbegin", list)
list.style.border =" 1px solid black ";
list.style.color ="yellow"



/////////////////Q5
