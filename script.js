//background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = "pink";
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


//clock move & style
    document.getElementById("txtClock").style.backgroundColor = "black";
    document.getElementById("txtClock").style.right = "250px";
    document.getElementById("txtClock").style.top = "30px";
    document.getElementById("txtClock").style.borderRadius = "200px";
    document.getElementById("txtClock").style.border = "80px double yellow";
    document.getElementById("txtClock").style.fontSize = "100px";
    document.getElementById("txtClock").style.color = "white";
    document.getElementById("txtClock").style.display = "flex";
    document.getElementById("txtClock").style.justifycontent = "center";
    document.getElementById("txtClock").style.alignItems = "center";











    

    






    





    






