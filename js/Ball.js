class Ball extends THREE.Object3D{

    changeToBasic(){
        this.children[0].material  = this.userData.basicMaterial;
    }
    changeToPhong(){
        this.children[0].material  = this.userData.phongMaterial;       
    }

    constructor(x,z,diameter){
        'use strict'
        super();

        var basic = new THREE.MeshBasicMaterial({ map: ballTexture, side: THREE.FrontSide});
        var phong = new THREE.MeshPhongMaterial({ map: ballTexture, side: THREE.FrontSide});

        this.userData = {
            basicMaterial: basic,
            phongMaterial: phong  
        }

        this.position.x = x;
        this.position.y = diameter/2;
        this.position.z = z;
    
        geometry = new THREE.SphereGeometry(diameter/2, 30, 30);
        mesh = new THREE.Mesh(geometry, this.userData.phongMaterial);

        this.add(mesh);
    }
}
