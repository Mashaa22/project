let myImage = document.getElementById('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === "images/release2.webp")
    {
        myImage.setAttribute('src', "images/release3.jpg")
    } else {
        myImage.setAttribute('src', "images/release2.webp")
    } 
}