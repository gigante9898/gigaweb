const showImageText1 = document.getElementById("victim-1") //es la id del texto al que clicas
const showImageText2 = document.getElementById("victim-2")
const victimImage_1 = document.getElementById("hellen")
const victimImage_2 = document.getElementById("meow")



showImageText1.onclick = function displayImage() {

    victimImage_1.hidden = !victimImage_1.hidden
}
function onTextClick() {
    victimImage_2.hidden = !victimImage_2.hidden
}
showImageText2.onclick = function () {
   onTextClick()
}


