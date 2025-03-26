let x = 5;
let y = 7;
let z = x + y;
console.log(z);
let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C);

function SumNPrint(x1, x2)
{
    let x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B);

if(C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(L) {
    L.forEach(function(item) {
        if (item == "Banana") {
            console.log("Banana found!");
            //alert("Banana found!");
        }
    });
}

findTheBanana(L1);
findTheBanana(L2);

function addYear() {
    let d = new Date();
    let year = d.getFullYear();
    let yearElement = document.getElementById("copyYear");
    yearElement.innerHTML = year;
}

function toggleNav() {
    let style = document.getElementById("navlinks").style;
    if (style.display == "none") {
        style.display = "";
    } else {
        style.display = "none";
    }
}

function highlightActiveLinks() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll("nav a");
  
    navLinks.forEach(link => {
        const linkPath = new URL(link.href, window.location.origin).pathname;
  
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
}