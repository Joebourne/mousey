document.addEventListener('click', function(e) {
    mousePoint.x = e.clientX;
    mousePoint.y = resolution.y - e.clientY;
    var angle = findAngle(resolutionMidpoint, mousePoint);
    console.log('angle: ' + angle);
    var xOnCircle = getXOnCircle(angle, 150);
    console.log('xOnCircle: ' + xOnCircle);
    var yOnCircle = getYOnCircle(angle, 150);
    console.log('yOnCircle: ' + yOnCircle);
});

window.addEventListener('resize', function() {
    getResolutionMidpoint();
});

var resolution = {};
var resolutionMidpoint = {};
var mousePoint = {};

function getResolutionAndMidpoint() {
    resolution.x = window.innerWidth;
    resolution.y = window.innerHeight;
    resolutionMidpoint.x = resolution.x / 2;
    resolutionMidpoint.y = resolution.y / 2;
    console.log(resolutionMidpoint);
}

getResolutionAndMidpoint();

// wrongly assuming mousepoint from bottom up, when it's actually top down
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