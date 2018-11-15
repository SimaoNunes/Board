class Cameras extends THREE.Object3D{
    
    createCamera1() {
        'use strict';
        camera1 = new THREE.OrthographicCamera(
            window.innerWidth / - 10,
            window.innerWidth/ 10,
            (window.innerHeight / 10),
            (window.innerHeight / - 10),
            -1000,
            1000
        );
        
        camera1.position.x = 0;
        camera1.position.y = 0;
        camera1.position.z = 40;
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
        
        camera2.position.x = 60;
        camera2.position.y = 20;
        camera2.position.z = 40;
    }    
    
    createCamera3() {
        'use strict';
        camera3 = new THREE.OrthographicCamera(
            window.innerWidth / - 10,
            window.innerWidth/ 10,
            (window.innerHeight / 10),
            (window.innerHeight / - 10),
            -1000,
            1000
        );
        
        camera3.position.x = 0;
        camera3.position.y = 20;
        camera3.position.z = 0;
    }

    constructor(){
        super();
    
        'use strict';

        this.createCamera1();
        this.createCamera2();
        this.createCamera3();
    }
}