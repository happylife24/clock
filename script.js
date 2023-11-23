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
function moveTime() {
    document.getElementById("txtImg").style.right = "500px";
    document.getElementById("txtImg").style.top = "100px";
}
moveTime();


//backImg of time
function backImg() {
    var backgroundColor = "pink";
    
}
backImg();
    

    






    





    






