function initAnimation(animationName, maxDelay) {
    var elements = document.getElementsByClassName("tnsl-" + animationName);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.webkitAnimationDelay = (Math.random() * maxDelay + 0) + "s";
        elements[i].style.animationName = animationName;
    }
}

function tnslPlayFlicker(maxDelay) {
    initAnimation("flicker", maxDelay);
    initAnimation("flickerQuick", maxDelay);
}

function tnslPlaySlideFromLeft(maxDelay) {
    initAnimation("slideFromLeft", maxDelay);
}

function tnslPlaySlideFromRight(maxDelay) {
    initAnimation("slideFromRight", maxDelay);
}

function tnslPlaySlide(maxDelay) {
    tnslPlaySlideFromLeft(maxDelay);
    tnslPlaySlideFromRight(maxDelay);
}

function tnslPlayAll(maxDelay) {
    tnslPlayFlicker(maxDelay);
    tnslPlaySlide(maxDelay);
}

function tnslReplaceRandom(animations) {
    if (animations === undefined) animations = ["flicker", "flickerQuick", "slideFromLeft", "slideFromRight"];
    var elements = document.getElementsByClassName("tnsl-random");
    
    while (elements.length) {
        var element = elements[0];
        var randomClass = "tnsl-" + animations[Math.floor((Math.random() * animations.length + 0))];
        
        element.classList.remove("tnsl-random");
        element.classList.add(randomClass);
    }
}

function tnslInit(maxDelay) {
    if (maxDelay === undefined) maxDelay = 1;

    tnslReplaceRandom();
    tnslPlayAll(maxDelay);
}