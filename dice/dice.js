const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.height = 400;
canvas.width = 400;

const rollTheNumber = (event) =>{
    if(event.key === ' '){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        const number = Math.floor(Math.random()*6)+1
        ctx.font = "100px arial"
        ctx.fillText(number, 170, 230)
    }
}


document.addEventListener("keyup",rollTheNumber)