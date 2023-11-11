//background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = "green";
} 
changeBackgroundColor();


//resize image
function resizeImage() {
    var image = document.getElementById("myImage");
    image.width = 600;
    image.height = 400;
}
//call image after modified
window.onload = resizeImage;


//move image
var myFunction =
    document.getElementById("myImage").style.left = "225px";
    document.getElementById("myImage").style.top = "60px";


    





    






