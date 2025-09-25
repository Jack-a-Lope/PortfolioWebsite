function filterUnityContent() {
    var contentA = document.querySelectorAll("[id=Unity]")
    var contentB = document.querySelectorAll("[id=WebDev]")
    var contentC = document.querySelectorAll("[id=Misc]")

    for(var i = 0; i < contentA.length; i++) 
        contentA[i].style.display="block";
    for(var i = 0; i < contentA.length; i++) 
        contentB[i].style.display="none";
    for(var i = 0; i < contentA.length; i++) 
        contentC[i].style.display="none";
}

function filterWebDevContent() {
    var contentA = document.querySelectorAll("[id=Unity]")
    var contentB = document.querySelectorAll("[id=WebDev]")
    var contentC = document.querySelectorAll("[id=Misc]")

    for(var i = 0; i < contentA.length; i++) 
        contentA[i].style.display="none";
    for(var i = 0; i < contentA.length; i++) 
        contentB[i].style.display="block";
    for(var i = 0; i < contentA.length; i++) 
        contentC[i].style.display="none";
}

function filterAllContent() {
    var contentA = document.querySelectorAll("[id=Unity]")
    var contentB = document.querySelectorAll("[id=WebDev]")
    var contentC = document.querySelectorAll("[id=Misc]")

    for(var i = 0; i < contentA.length; i++) 
        contentA[i].style.display="block";
    for(var i = 0; i < contentA.length; i++) 
        contentB[i].style.display="block";
    for(var i = 0; i < contentA.length; i++) 
        contentC[i].style.display="block";
}
