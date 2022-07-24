setInterval(setClock,1000);
const hourhand = document.querySelector("#hours");
const minutehand = document.querySelector("#minutes");
const secondhand = document.querySelector("#seconds");

function setClock() {
    const currdate = new Date();
    const secondratio  = currdate.getSeconds()/60;
    const minuteratio = (secondratio + currdate.getMinutes())/60;
    const hourratio = (minuteratio + currdate.getHours())/12;
    setRotation(hourhand,hourratio);
    setRotation(minutehand,minuteratio);
    setRotation(secondhand,secondratio);

}
function setRotation(element,rotationRatio) {
    element.style.setProperty('--rotation',rotationRatio * 360)
}
setClock();