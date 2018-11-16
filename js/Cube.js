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

        var blue = new texture.load("textures/blue.png");
        var green = new texture.load("textures/green.png");
        var white = new texture.load("textures/white.png");
        var yellow = new texture.load("textures/yellow.png");
        var red = new texture.load("textures/red.png");
        var orange = new texture.load("textures/orange.png");
        var basic = new THREE.MeshFaceMaterial([
            new THREE.MeshBasicMaterial({map: blue, bumpMap: blue, side: THREE.FrontSide}),
            new THREE.MeshBasicMaterial({map: green, bumpMap: green, side: THREE.FrontSide}),
            new THREE.MeshBasicMaterial({map: white, bumpMap: white, side: THREE.FrontSide}),
            new THREE.MeshBasicMaterial({map: yellow, bumpMap: yellow, side: THREE.FrontSide}),
            new THREE.MeshBasicMaterial({map: red, bumpMap: red, side: THREE.FrontSide}),
            new THREE.MeshBasicMaterial({map: orange, bumpMap: orange, side: THREE.FrontSide})
        ]);
        var phong = new THREE.MeshFaceMaterial([
            new THREE.MeshPhongMaterial({map: blue, bumpMap: blue, side: THREE.FrontSide}),
            new THREE.MeshPhongMaterial({map: green, bumpMap: green, side: THREE.FrontSide}),
            new THREE.MeshPhongMaterial({map: white, bumpMap: white, side: THREE.FrontSide}),
            new THREE.MeshPhongMaterial({map: yellow, bumpMap: yellow, side: THREE.FrontSide}),
            new THREE.MeshPhongMaterial({map: red, bumpMap: red, side: THREE.FrontSide}),
            new THREE.MeshPhongMaterial({map: orange, bumpMap: orange, side: THREE.FrontSide})
        ]);

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
