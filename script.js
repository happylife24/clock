//background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = "#90EE90";
} 
changeBackgroundColor();


//resize image
function resizeImage() {
    var image = document.getElementById("myImage");
    image.width = 900;
    image.height = 600;
}
//call modified image 
window.onload = resizeImage;


//style image
var myFunction =
    document.getElementById("myImage").style.left = "170px";
    document.getElementById("myImage").style.top = "15px";
    document.getElementById("myImage").style.borderRadius = "50px";


//time
function beginTime() {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    setTimeout(beginTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}






    





    






