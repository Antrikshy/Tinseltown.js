function initAnimation(animationName) {
    var fe = document.getElementsByClassName("tnsl-" + animationName);
    for (var i = 0; i < fe.length; i++) {
        console.log(animationName)
        fe[i].style.webkitAnimationDelay = (Math.random() * 1 + 0) + "s";
        fe[i].style.animationName = animationName;
    }
}

window.onload = function() {
    initAnimation("flicker");
    initAnimation("slideFromLeft");
    initAnimation("slideFromRight");
}