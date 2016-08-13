// Assigns a random start delay to each animated element and triggers all animations
function initAnimation(animationName, maxDelay) {
    var elements = document.getElementsByClassName("tnsl-" + animationName);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.webkitAnimationDelay = (Math.random() * maxDelay + 0) + "s";
        // CSS animation is triggered by setting name
        elements[i].style.animationName = animationName;
    }
}

// Assigns random animations to all elements with class tnsl-random
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

function tnslPlayFlicker(maxDelay) {
    if (maxDelay === undefined) maxDelay = 1;
    initAnimation("flicker", maxDelay);
}

function tnslPlayFlickerQuick(maxDelay) {
    if (maxDelay === undefined) maxDelay = 1;
    initAnimation("flickerQuick", maxDelay);
}

function tnslPlaySlideFromLeft(maxDelay) {
    if (maxDelay === undefined) maxDelay = 1;
    initAnimation("slideFromLeft", maxDelay);
}

function tnslPlaySlideFromRight(maxDelay) {
    if (maxDelay === undefined) maxDelay = 1;
    initAnimation("slideFromRight", maxDelay);
}

function tnslPlayAllFlicker(maxDelay) {
    if (maxDelay === undefined) maxDelay = 1;
    initAnimation("flicker", maxDelay);
    initAnimation("flickerQuick", maxDelay);
}

function tnslPlayAllSlide(maxDelay) {
    if (maxDelay === undefined) maxDelay = 1;
    tnslPlaySlideFromLeft(maxDelay);
    tnslPlaySlideFromRight(maxDelay);
}

function tnslPlayAll(maxDelay) {
    if (maxDelay === undefined) maxDelay = 1;
    tnslPlayFlicker(maxDelay);
    tnslPlaySlide(maxDelay);
}

// Replaces all randoms, triggers everything (main entry point in many cases)
function tnslInit(maxDelay) {
    if (maxDelay === undefined) maxDelay = 1;
    tnslReplaceRandom();
    tnslPlayAll(maxDelay);
}