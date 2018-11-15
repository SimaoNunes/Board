/*Cena Interativa com Luz Pontual, Mensagens e Texturas*/

var scene, renderer; // variaveis gerais relativas a animacao

var cameras, camera, camera1, camera2, camera3, camera4, camera5, camera6, camera7, camera8;  // diferentes tipos de cameras

var geometry, material, mesh;

var board; // diferentes objetos a desenhar

function createScene() {
    'use strict';

    scene = new THREE.Scene();

    scene.add(new THREE.AxisHelper(40));

    board = new Board(0,0,0);
    cameras = new Cameras();

    camera = camera1
    
    scene.add(camera);
    scene.add(board);
}

function onKeyDown(e) {
    'use strict';
    switch (e.keyCode) {
    case 65: //A
    case 97: //a
        scene.traverse(function (node) {
            if (node instanceof THREE.Mesh) {
                node.material.wireframe = !node.material.wireframe;
            }
        });
        break;
    case 49: // 1
        camera = camera1; 
        break;
    case 50: // 2
        camera = camera2; 
        break;
    case 51: // 3
        camera = camera3; 
        break;
    case 52: // 4
        camera = camera4; 
        break;
    case 53: // 5
        camera = camera5; 
        break;
    case 54: // 6
        camera = camera6; 
        break;
    case 55: // 7
        camera = camera7; 
        break;
    case 56: // 8
        camera = camera8; 
        break;
    }
}

function render() {
    'use strict';
    renderer.render(scene, camera);
}

function onResize() {
    'use strict';
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (window.innerHeight > 0 && window.innerWidth > 0) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }
}

function init() {
    'use strict';

    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    createScene();

    render();

    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);
}

function animate() {
    'use strict';

    render();

    camera.lookAt( scene.position );

    requestAnimationFrame(animate);
}