
function changeText(event) {
    console.log(event);
    // event is an object with properties like type, target, etc.
    // event.target is the element that triggered the event
    let fpara = document.getElementById("fpara");
    fpara.textContent = "This is a paragraph element.";
}
let fpara = document.getElementById("fpara");
fpara.addEventListener('click', changeText);
// can remove event listener
// fpara.removeEventListener('click', changeText);