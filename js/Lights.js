class Lights extends THREE.Object3D{
    
    addSpotLight(){
        spotLight = new THREE.SpotLight(0xffffff, 1); // soft white light
        spotLight.castShadow = true;
        spotLight.position.x = 50;
        spotLight.position.y = 100;
        spotLight.position.z = 50;
        mainScene.add(spotLight);
    }

    addPointLight(){
        pointLight = new THREE.PointLight(0xffffff, 0, 100, 2); // soft white light
        pointLight.castShadow = true;
        pointLight.position.x = 0;
        pointLight.position.y = 50;
        pointLight.position.z = 0;
        mainScene.add(pointLight);
    }

    constructor(x,y,z){
        'use strict';

        super();
    
        this.addSpotLight();
        this.addPointLight();

        currentLight = spotLight;
    }
}