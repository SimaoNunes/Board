class Cameras extends THREE.Object3D{
    
    createCamera1() {
        'use strict';
        camera1 = new THREE.OrthographicCamera(
            window.innerWidth / - 10,
            window.innerWidth/ 10,
            (window.innerHeight / 10) + 30,
            (window.innerHeight / - 10) + 30,
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
            (window.innerHeight / 10) + 30,
            (window.innerHeight / - 10) + 30,
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
            (window.innerHeight / 10) + 40,
            (window.innerHeight / - 10) + 40,
            -1000,
            1000
        );
        
        camera3.position.x = 40;
        camera3.position.y = 0;
        camera3.position.z = 0;
    }
    
    
    createCamera4() {
        'use strict';
        camera4 = new THREE.OrthographicCamera(
            window.innerWidth / - 10,
            window.innerWidth/ 10,
            (window.innerHeight / 10) + 20,
            (window.innerHeight / - 10) + 20,
            -1000,
            1000
        );
        
        camera4.position.x = 0;
        camera4.position.y = 40;
        camera4.position.z = 40;
    }
    
    
    createCamera5() {
        'use strict';
        camera5 = new THREE.OrthographicCamera(
            window.innerWidth / - 10,
            window.innerWidth/ 10,
            (window.innerHeight / 10),
            (window.innerHeight / - 10),
            -1000,
            1000
        );
        
        camera5.position.x = 0;
        camera5.position.y = 20;
        camera5.position.z = 0;
    }
    
    
    createCamera6() {
        'use strict';
        camera6 = new THREE.OrthographicCamera(
            window.innerWidth / - 10,
            window.innerWidth/ 10,
            (window.innerHeight / 10),
            (window.innerHeight / - 10),
            -1000,
            1000
        );
        
        camera6.position.x = -20;
        camera6.position.y = 0;
        camera6.position.z = 0;
    }
    
    createCamera7() {
        'use strict';
        camera7 = new THREE.OrthographicCamera(
            window.innerWidth / - 10,
            window.innerWidth/ 10,
            (window.innerHeight / 10) + 40,
            (window.innerHeight / - 10) + 40,
            -1000,
            1000
        );
        
        camera7.position.x = 60;
        camera7.position.y = 20;
        camera7.position.z = 40;
    }
    
    
    createCamera8() {
        'use strict';
        camera8 = new THREE.PerspectiveCamera(90,window.innerWidth / window.innerHeight,1,500);
        camera8.position.x = 60;
        camera8.position.y = 65;
        camera8.position.z = 60;
    }


    constructor(){
        super();
    
        'use strict';

        this.createCamera1();
        this.createCamera2();
        this.createCamera3();
        this.createCamera4();
        this.createCamera5();
        this.createCamera6();
        this.createCamera7();
        this.createCamera8();

    }
}