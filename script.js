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
    document.getElementById("txtClock").style.right = "300px";
    document.getElementById("txtClock").style.top = "80px";
    document.getElementById("txtClock").style.borderRadius = "70px";
    document.getElementById("txtClock").style.display = "flex";
    document.getElementById("txtClock").style.justifycontent = "center";
    document.getElementById("txtClock").style.alignItems = "center";

//clock-img  &  img-position









    

    






    





    






