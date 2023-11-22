//background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = "#90EE90";
} 
changeBackgroundColor();


//time
function startTime() {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("txtImg").innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}


//time move right
    document.getElementById("txtImg").style.right = "100px";
    document.getElementById("txtImg").style.top = "100px";


//backImg of time
    document.getElementById("txtImg").style.backgroundImage = "url('clock.jpg')";


//resize backImg
var txtImgElement = document.getElementById("txtImg");

txtImgElement.style.backgroundSize = "200%";
    






    





    






