var up = 0
var left = 0
var height = 300

function expandMenu(){
    controls.style.bottom ="0px";
}
function changeColor(){
    document.getElementById("background").style.color = document.getElementById("colorInput").value;
}
function changeDescription(){
    document.getElementById("description").innerHTML = document.getElementById("descInput").value;
}
function changeTitle(){
    document.getElementById("title").innerHTML = "<font size='5'>" + 
    document.getElementById("titleInput").value + "</font>";
}
function changeBG(){
    var str = document.getElementById("bgNameInput").value
    if(document.getElementById("bgNameInput").value == "horse"){
        document.getElementById("bgImg").src = "img/bg1.jpg";
    }else if(document.getElementById("bgNameInput").value == "night"){
        document.getElementById("bgImg").src = "img/bg2.jpg";
    }else if(document.getElementById("bgNameInput").value == "mountain"){
        document.getElementById("bgImg").src = "img/bg3.jpg";
    }else if(str.indexOf("epic") >= 0){
        document.getElementById("bgImg").src = "img/bg4.jpg";
    }else {
        document.getElementById("bgImg").src = document.getElementById("bgNameInput").value
    }
}
function moveBG(keyCode){
    if(keyCode == 40){
        up = up + 10
        document.getElementById("background").style.top = up+"px"
    }else if(keyCode == 38){
        up = up - 10
        document.getElementById("background").style.top = up+"px"
    }else if(keyCode == 39){
        left = left + 10
        document.getElementById("background").style.left = left+"px"
    }else if(keyCode == 37){
        left = left - 10
        document.getElementById("background").style.left = left+"px"
    }else if(keyCode == 107){
        height = height + 10
        document.getElementById("background").style.height = height+"px"
    }else if(keyCode == 109){
        height = height - 10
        document.getElementById("background").style.height = height+"px"
    }
}

document.getElementById("menuBut").addEventListener("click", function(){
    expandMenu();
});

document.getElementById("bgNameInput").addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        changeBG();
    }
});

document.getElementById("titleInput").addEventListener("keyup", function(ev){
    changeTitle();
});

document.getElementById("descInput").addEventListener("keyup", function(ev){
    changeDescription();
});

document.getElementById("colorInput").addEventListener("change", function(){
    changeColor();
});

document.addEventListener("keydown", function(ev){
    moveBG(ev.keyCode);
});
