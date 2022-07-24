let character = document.getElementById("character")
let block = document.getElementById("block")
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate")
    }
    
    setTimeout(()=>{
        character.classList.remove("animate")
    },700)
    
    
}
let checkLost = setInterval(()=>{
    var charTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    if (blockLft<50 && blockLft>0 && charTop>=280) {
        block.style.animation = 'none';
        block.style.display = 'none';
        alert("Try again");
    }

},10);

