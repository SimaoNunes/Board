class Wall extends THREE.Object3D{

    changeToBasic(){
       this.children[0].material  = this.userData.basicMaterial;
    }

    constructor(x,z,size){
       'use strict'
        super();
        
        var face = new texture.load("textures/pause_menu.png");
       
        var basic = new THREE.MeshFaceMaterial([
           new THREE.MeshBasicMaterial({map: face, side: THREE.FrontSide}),
           new THREE.MeshBasicMaterial({map: face, side: THREE.FrontSide}),
           new THREE.MeshBasicMaterial({map: face, side: THREE.FrontSide}),
           new THREE.MeshBasicMaterial({map: face, side: THREE.FrontSide}),
           new THREE.MeshBasicMaterial({map: face, side: THREE.FrontSide}),
           new THREE.MeshBasicMaterial({map: face, side: THREE.FrontSide})
        ]);

        this.userData = {
           basicMaterial: basic,
        }    
       
       this.position.x = x;
       this.position.y = 0;
       this.position.z = z;
   
       geometry = new THREE.BoxGeometry(size, size, size);
       mesh = new THREE.Mesh(geometry, this.userData.basicMaterial);
       this.add(mesh);
   
    }
}