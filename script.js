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
    document.getElementById("txtClock").innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}


//clock moves right
    document.getElementById("txtClock").style.backgroundColor = "yellow";
    document.getElementById("txtClock").style.right = "280px";
    document.getElementById("txtClock").style.top = "80px";

//clock-img  &  img-position









    

    






    





    






