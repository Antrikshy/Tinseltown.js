function initAnimation(animationName) {
    var fe = document.getElementsByClassName("tnsl-" + animationName);
    for (var i = 0; i < fe.length; i++) {
        fe[i].style.webkitAnimationDelay = (Math.random() * 1 + 0) + "s";
        fe[i].style.animationName = animationName;
    }
}

function tnslPlayFlicker() {
    initAnimation("flicker");
    initAnimation("flickerQuick");
}

function tnslPlaySlideFromLeft() {
    initAnimation("slideFromLeft");
}

function tnslPlaySlideFromRight() {
    initAnimation("slideFromRight");
}

function tnslPlaySlide() {
    tnslPlaySlideFromLeft();
    tnslPlaySlideFromRight();
}

function tnslPlayAll() {
    tnslPlayFlicker();
    tnslPlaySlide();
}

function tnslReplaceRandom(animations) {
    if (animations === undefined) animations = ["flicker", "flickerQuick", "slideFromLeft", "slideFromRight"];
    var re = document.getElementsByClassName("tnsl-random");
    
    for (var i = 0; i < re.length; i++) {
        var element = re[i];
        var randomClass = "tnsl-" + animations[Math.floor((Math.random() * animations.length + 0))];
        
        element.classList.remove("tnsl-random");
        element.classList.add(randomClass);
    }
}

function tnslInit() {
    tnslReplaceRandom();
    tnslPlayAll();
}