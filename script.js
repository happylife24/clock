//background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = "black";
} 
changeBackgroundColor();


//time
function showTxtClock() {
    var showDate = new Date();

    var formattedTime = showDate.toLocaleTimeString([], {
        hour: '2-digit',
        minute:'2-digit',  
        second: '2-digit', 
        hour12: true,
    });

    document.getElementById("txtClock").innerHTML = formattedTime;

    setTimeout(showTxtClock, 1000);
}  
window.onload = showTxtClock;


//clock move & style
function styleClock() {
    document.getElementById("txtClock").style.backgroundColor = "black";
    document.getElementById("txtClock").style.right = "100px";
    document.getElementById("txtClock").style.top = "30px";
    document.getElementById("txtClock").style.width = "1000px";
    document.getElementById("txtClock").style.height = "300px";
    document.getElementById("txtClock").style.borderRadius = "200px";
    document.getElementById("txtClock").style.border = "40px double yellow";
    document.getElementById("txtClock").style.fontSize = "100px";
    document.getElementById("txtClock").style.color = "white";
}
styleClock();
    

//move only text
var txtClock = document.getElementById("txtClock");
txtClock.style.paddingTop = "180px";













    

    






    





    






