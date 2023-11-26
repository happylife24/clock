//background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = "brown";
} 
changeBackgroundColor();


//time
function showTxtClock() {
    var showDate = new Date();

    var formattedTime = showDate.toLocaleTimeString([], {hour: '2-digit',
    minute:'2-digit', second: '2-digit', hour12: true});

    document.getElementById("txtClock").innerHTML = formattedTime;
    
    setTimeout(showTxtClock, 1000);
}  
window.onload = showTxtClock;


//clock move & style
    document.getElementById("txtClock").style.backgroundColor = "white";
    document.getElementById("txtClock").style.right = "60px";
    document.getElementById("txtClock").style.top = "30px";
    document.getElementById("txtClock").style.borderRadius = "200px";
    document.getElementById("txtClock").style.border = "80px double black";
    document.getElementById("txtClock").style.fontSize = "100px";
    document.getElementById("txtClock").style.color = "black";
    document.getElementById("txtClock").style.display = "flex";
    document.getElementById("txtClock").style.justifycontent = "center";
    document.getElementById("txtClock").style.alignItems = "center";


//











    

    






    





    






