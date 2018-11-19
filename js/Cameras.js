class Cameras extends THREE.Object3D{
    
    createCamera1() {
        'use strict';
        camera1 = new THREE.PerspectiveCamera(90,window.innerWidth / window.innerHeight,1,500);
        camera1.position.x = 60;
        camera1.position.y = 60;
        camera1.position.z = 60;
    }

    createCamera2() {
        'use strict';
        camera2 = new THREE.OrthographicCamera(
            window.innerWidth / - 10,
            window.innerWidth/ 10,
            (window.innerHeight / 10),
            (window.innerHeight / - 10),
            -1000,
            1000
        );
        camera2.position.x = 0;
        camera2.position.y = 0;
        camera2.position.z = 60;
    }

    
    constructor(){
        
        super();
    
        'use strict';

        this.createCamera1();
        this.createCamera2();
        
        camera1.isPerspectiveCamera = true;
        controls = new THREE.OrbitControls(camera1);
        controls.rotateSpeed = 0.7;
        controls.update();
    }
}