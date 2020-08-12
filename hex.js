const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btnEvent = document.getElementById('btn');
const color = document.querySelector(".color");
// #f15025
btnEvent.addEventListener('click', function(){
    
    let hexColor ='#';
    for (let i=0; i<6; i++){
        hexColor += hex[getRandomHex()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomHex(){
    return Math.floor(Math.random() * hex.length);
}