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
        hour12: true
    });

    document.getElementById("txtClock").innerHTML = formattedTime;
    
    setTimeout(showTxtClock, 1000);

}  
window.onload = showTxtClock;


//move & style time
function styleClock() {
    var txtClock = document.getElementById("txtClock");
    txtClock.style.backgroundColor = "black";
    txtClock.style.right = "5%";
    txtClock.style.top = "5%";
    txtClock.style.width = "90%";
    txtClock.style.height = "30%";
    txtClock.style.borderRadius = "20px";
    txtClock.style.border = "10px double yellow";
    txtClock.style.fontSize = "5vw";
    txtClock.style.color = "white";
}
styleClock();
    

//move & style only text
var txtClock = document.getElementById("txtClock");
    txtClock.style.paddingTop = "5%";
    txtClock.style.fontFamily = "cursive";
















    

    






    





    






