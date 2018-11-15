/*Cena Interativa com Luz Pontual, Mensagens e Texturas*/


function createScene() {
    'use strict';

    scene = new THREE.Scene();

    scene.add(new THREE.AxisHelper(40));

    board   = new Board(0,0,0);
    ball    = new Ball(-20,-20,10,0xffffff);
    cube    = new Cube(0,0,10);
    cameras = new Cameras();
    lights   = new Lights(); 
    camera  = camera1

    scene.add(camera);
    scene.add(board);
    scene.add(ball);
    scene.add(cube);
}


function onKeyDown(e) {
    'use strict';
    switch (e.keyCode) {
    case 87: // W
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
    case 68: // D
        if( directionalLight.intensity == 1){
            directionalLight.intensity = 0;
        }else{
            directionalLight.intensity = 1;
        }
        break;
    case 80: // P
        if( pointLight.intensity == 1){
            pointLight.intensity = 0;
        }else{
            pointLight.intensity = 1;
        }
        break;
    case 76: // L
        lKey = 1;
        break;
    }
}


function update() {

    if(lKey == 1){
        if(lightCalculation === 1){
            lightCalculation = 0;
            ball.changeToBasic();
            cube.changeToBasic();
            board.changeToBasic();
        }else{
            lightCalculation = 1;
            ball.changeToPhong();
            cube.changeToPhong();
            board.changeToPhong();
        }
        lKey = 0;
    }

    camera.lookAt(scene.position);

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

    update();

    render();

    requestAnimationFrame(animate);
}