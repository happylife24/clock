//배경색
function changeBackgroundColor() {
    document.body.style.backgroundColor = "green";
} 
changeBackgroundColor();


//사이즈 변경
function resizeImage() {
    var image = document.getElementById("myImage");
    image.width = 600;
    image.height = 400;
}
//변경된 이미지 불러오기
window.onload = resizeImage;


//이미지 위치 변경
    var currentPosition = 0;
    var image = document.getElementById("myImage");

    function moveImageRight() {
        currentPosition += 50;
        image.style.left = currentPosition + 'px';
    }




    






