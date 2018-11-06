particlesJS("particles-js", { "particles": { "number": { "value": 289, "density": { "enable": true, "value_area": 10000 } }, "color": { "value": ["#1c40e3", "#b61924"] }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 8 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 72.15354273894853, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 1.5, "direction": "bottom", "random": true, "straight": false, "out_mode": "bounce", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });




let promisifiedRAF = () => new Promise(res => requestAnimationFrame(res));

// function promisifiedRAF() {
//     return new Promise(function(resolve){
//         requestAnimationFrame(resolve)
//     });
// }

update = function() {
    
};

function keepDrawing() {
    return promisifiedRAF()
    .then(update)
    .then(changeColor)
    .then(keepDrawing)
}

// keepDrawing()





//Resume Button
document.getElementById("resumeButton").addEventListener("click", ()=>{
    location.href="PeterMacDonnell_Resume.pdf"
})