canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
mouseEvent = "";
lastposX=0;
lastposY=0;
color = "black";
width = 5
canvas.addEventListener("mousedown", mymousedown)
function mymousedown(e) {
    color = document.getElementById("text_input_color").value
    width = document.getElementById("text_input_width").value
    mouseEvent = "mousedown"
}


canvas.addEventListener("mousemove", mymousemove)
function mymousemove(e) {
    currentposX = e.clientX-canvas.offsetLeft
    currentposY = e.clientY-canvas.offsetTop
    if (mouseEvent == "mousedown") {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = width
        ctx.moveTo(lastposX,lastposY)
        ctx.lineTo(currentposX, currentposY)
        ctx.stroke()
    }
    lastposX=currentposX
    lastposY=currentposY
}

function cleararea(){
    ctx.clearRect(0,0,800,600)
}