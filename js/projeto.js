/*Cena Interativa com Luz Pontual, Mensagens e Texturas*/


function createScene() {
    'use strict';

    scene = new THREE.Scene();

    board   = new Board(0,0,0);
    ball    = new Ball(-25,0,14,0xffffff,ballAcc);
    cube    = new Cube(0,0,15);
    cameras = new Cameras();
    lights   = new Lights(); 
    camera  = camera1;

    scene.add(camera);
    scene.add(board);
    scene.add(ball);
    scene.add(cube);
}


function onKeyDown(e) {
    'use strict';
    switch (e.keyCode) {
    case 87: // W
        if(sKey){
        scene.traverse(function (node) {
            if (node instanceof THREE.Mesh) {
                node.material.wireframe = !node.material.wireframe;
            }
        });
        }
        break;
    case 49: // 1
        if(sKey){
            camera = camera1; 
        }
        break;
    // case 50: // 2
    //     camera = camera2; 
    //     break;
    // case 51: // 3
    //     camera = camera3; 
    //     break;
    case 68: // D (change directionalLight intensity)
        if(sKey){
            dKey = true;
        }
        break;
    case 80: // P (change pointLight intensity)
        if(sKey){
            pKey = true;
        }
        break;
    case 76: // L (toogle lightCalculation)
        if(sKey){
            lKey = true;
        }
        break;
    case 66: // B (toogle ball movement)
        if(sKey){
            if(ball.userData.acc == 0)
                ball.userData.acc = ballAcc;
            else
                ball.userData.acc = -1 * Math.sign(ball.userData.acc) * Math.abs(ball.userData.acc);
        }
        break;
    case 83: // S (pause)
        sKey = !sKey;
        break;
    }
}


function update() {

    delta = clock.getDelta();

    if(dKey){
        if( directionalLight.intensity == 1){
            directionalLight.intensity = 0;
        }else{
            directionalLight.intensity = 1;
        }
        dKey = false;
    }

    if(pKey){
        if(pointLight.intensity == 4){
            pointLight.intensity = 0;
        }else{
            pointLight.intensity = 4;
        }
        pKey = false;
    }

    if(lKey){
        if(lightCalculation == 1){
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
        lKey = false;
    }

    if(sKey){
        if(ball.userData.acc != 0)
            ball.rotate(delta);
    }

    camera.lookAt(scene.position);
    controls.update();

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
    
    clock = new THREE.Clock();

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