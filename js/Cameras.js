class Cameras extends THREE.Object3D{
    
    createCamera1() {
        'use strict';
        camera1 = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight,1,500);
        camera1.position.x = 120;
        camera1.position.y = 120;
        camera1.position.z = 120;
    }

    createCamera2() {
        'use strict';
        camera2 = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight,1,500);
        camera2.position.x = 80;
        camera2.position.y = 80;
        camera2.position.z = 80;
    }

    
    constructor(){
        'use strict';
        
        super();

        this.createCamera1();
        this.createCamera2();
        
        camera1.isPerspectiveCamera = true;
        camera2.isPerspectiveCamera = true;

        controls = new THREE.OrbitControls(camera1);
        controls.rotateSpeed =0.7;
        controls.update();

        cc2c = new THREE.OrbitControls(camera2);
        cc2c.rotateSpeed = 0.7;
        cc2c.update();
        cc2c.enableRotate = false;
        cc2c.enableZoom = false;
        cc2c.enableKeys = false;
    }
}