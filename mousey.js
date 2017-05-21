document.addEventListener('mousemove', function(e) {
    mousePoint.x = e.clientX;
    mousePoint.y = resolution.y - e.clientY;
    var angle = findAngle(resolutionMidpoint, mousePoint);
    var xOnCircle = getXOnCircle(angle, radius);
    var yOnCircle = getYOnCircle(angle, radius);
    moveInnerCircle(xOnCircle, yOnCircle);
});

document.addEventListener('mousedown', function() {
    document.getElementById('background').classList.add('clicked');
});

document.addEventListener('mouseup', function() {
    document.getElementById('background').classList.remove('clicked');
});

window.addEventListener('resize', function() {
    getResolutionAndMidpoint();
});

var resolution = {};
var radius;
var resolutionMidpoint = {};
var mousePoint = {};

getResolutionAndMidpoint();

function getResolutionAndMidpoint() {
    resolution.x = window.innerWidth;
    resolution.y = window.innerHeight;
    resolutionMidpoint.x = resolution.x / 2;
    resolutionMidpoint.y = resolution.y / 2;
}

function moveInnerCircle(xOnCircle, yOnCircle) {
    var innerCircle = document.getElementById('inner-circle');
    var circle = document.getElementById('circle');
    var diameterString = window.getComputedStyle(circle).width;
    radius = diameterString.slice(0, diameterString.length - 2) / 2;
    innerCircle.style.setProperty('top', (radius - yOnCircle) + 'px');
    innerCircle.style.setProperty('right', (radius - xOnCircle) + 'px');
}

function findAngle(center, mouse) {
    var x = mouse.x - center.x;
    var y = mouse.y - center.y;
    return Math.atan(y / x);
}

function getXOnCircle(angle, radius) {
    if(mousePoint.x > resolutionMidpoint.x) {
        return Math.abs(Math.cos(angle) * radius);
    } else {
        return -Math.abs(Math.cos(angle) * radius);
    }
}

function getYOnCircle(angle, radius) {
    if(mousePoint.y > resolutionMidpoint.y) {
        return Math.abs(Math.sin(angle) * radius);
    } else {
        return -Math.abs(Math.sin(angle) * radius);
    }
}