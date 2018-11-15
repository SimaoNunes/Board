class Cube extends THREE.Object3D{

    changeToBasic(){
        this.children[0].material  = this.userData.basicMaterial;
    }
    changeToPhong(){
        this.children[0].material  = this.userData.phongMaterial;       
    }

    constructor(x,z,size){
        'use strict'
        super();

        var basic = new THREE.MeshBasicMaterial({ map: cubeTexture, bumpMap: cubeBumpMap, side: THREE.FrontSide});
        var phong = new THREE.MeshPhongMaterial({ map: cubeTexture, bumpMap: cubeBumpMap, side: THREE.FrontSide});

        this.userData = {
            basicMaterial: basic,
            phongMaterial: phong  
        }

        this.position.x = x;
        this.position.y = size/2;
        this.position.z = z;
    
        geometry = new THREE.BoxGeometry(size, size, size);
        mesh = new THREE.Mesh(geometry, this.userData.phongMaterial);

        this.add(mesh);
    }
}
