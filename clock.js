// 배경색
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
var image = document.getElementById("myImage");
var currentPosition = 0; //현재위치
//오른쪽으로 이동 함수
function moveImageRight() {
    currentPosition += 10; //이동거리조절
    image.style.left = currentPosition + px;
}
//호출시 1초마다 오른쪽 이동
setInterval(moveImageright, 1000);







