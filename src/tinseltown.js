window.onload = function() {
    var x = document.getElementsByClassName("tnsl-flicker");
    for (var i = 0; i < x.length; i++) {
        x[i].style.webkitAnimationDelay = (Math.random() * 1 + 0) + "s";
        x[i].style.animationName = "flicker";
    }
}