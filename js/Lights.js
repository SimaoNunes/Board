class Lights extends THREE.Object3D{
    
    addDirectionalLight(){
        directionalLight = new THREE.DirectionalLight(0xffffff, 1); // soft white light
        directionalLight.castShadow = true;
        directionalLight.position.x = 50;
        directionalLight.position.y = 50;
        directionalLight.position.z = 50;
        scene.add(directionalLight);
    }

    addPointLight(){
        pointLight = new THREE.PointLight(0xffffff, 0, 100, 2); // soft white light
        pointLight.castShadow = true;
        pointLight.position.x = 0;
        pointLight.position.y = 50;
        pointLight.position.z = 0;
        scene.add(pointLight);
    }

    constructor(x,y,z){
        super();
    
        'use strict';

        this.addDirectionalLight();
        this.addPointLight();

        currentLight = directionalLight;
    }
}