var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openfullImg(picture){
    fullImgBox.style.display = "flex"
    fullImg.src = picture;
}

function closefullImg(){
    fullImgBox.style.display = "none"
}