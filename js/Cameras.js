class Cameras extends THREE.Object3D{
    
    createCamera1() {
        'use strict';
        camera1 = new THREE.PerspectiveCamera(90,window.innerWidth / window.innerHeight,1,500);
        camera1.position.x = 60;
        camera1.position.y = 60;
        camera1.position.z = 60;
    }

    
    constructor(){
        super();
    
        'use strict';

        this.createCamera1();
        camera1.isPerspectiveCamera = true;
        controls = new THREE.OrbitControls(camera1);
        controls.update();
    }
}