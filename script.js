//background color
function changeBackgroundColor() {
    document.body.style.background = "linear-gradient(to right, purple, black, purple)";
} 
changeBackgroundColor();



//time
function showTxtClock() {
    var showDate = new Date();

    var daysOfWeek = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
    var dayOfWeek = showDate.getDay();
    var formattedDay = daysOfWeek[dayOfWeek];

    var formattedTime = showDate.toLocaleTimeString([], {
        hour: '2-digit',
        minute:'2-digit',  
        second: '2-digit', 
        hour12: true
    });

    document.getElementById("txtClock").innerHTML = formattedTime + " " + formattedDay + "day ";
    
    setTimeout(showTxtClock, 1000);
}  

window.onload = showTxtClock;



//move & style time
function styleClock() {
    var txtClock = document.getElementById("txtClock");
    txtClock.style.backgroundImage= "radial-gradient(circle at 80% 70%, red 1%, transparent 10%), " + "radial-gradient(circle at 90% 20%, yellow 1%, transparent 10%), " + "radial-gradient(circle at 20% 20%, green 1%, transparent 20%), " + "radial-gradient(circle at 50% 70%, blue 1%, transparent 30%), " + "radial-gradient(circle at 10% 80%, pink 0.1%, transparent 15%)";
    txtClock.style.right = "0";
    txtClock.style.left = "0";
    txtClock.style.margin = "0 auto";
    txtClock.style.top = "13%";
    txtClock.style.width = "60%";
    txtClock.style.height = "60%";
    txtClock.style.borderRadius = "30px";
    txtClock.style.fontSize = "10vw";
    txtClock.style.fontFamily = "Arial, sans-serif";
    txtClock.style.textAlign = "center";
    txtClock.style.backgroundColor = "purple";
    txtClock.style.color = "white";
    txtClock.style.paddingTop = "3%";
}
styleClock();




    


















    

    






    





    






