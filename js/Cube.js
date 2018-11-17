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

        var yellow = new texture.load("textures/yellow.png");
        var green = new texture.load("textures/green.png");
        var blue = new texture.load("textures/blue.png");
        var white = new texture.load("textures/white.png");
        var red = new texture.load("textures/red.png");
        var orange = new texture.load("textures/orange.png");
        var bump = new texture.load("textures/bump.png");
        var basic = new THREE.MeshFaceMaterial([
            new THREE.MeshBasicMaterial({map: yellow, side: THREE.FrontSide}),
            new THREE.MeshBasicMaterial({map: green, side: THREE.FrontSide}),
            new THREE.MeshBasicMaterial({map: blue, side: THREE.FrontSide}),
            new THREE.MeshBasicMaterial({map: white, side: THREE.FrontSide}),
            new THREE.MeshBasicMaterial({map: red, side: THREE.FrontSide}),
            new THREE.MeshBasicMaterial({map: orange, side: THREE.FrontSide})
        ]);
        var phong = new THREE.MeshFaceMaterial([
            new THREE.MeshPhongMaterial({map: yellow, bumpMap: bump, side: THREE.FrontSide}),
            new THREE.MeshPhongMaterial({map: green, bumpMap: bump, side: THREE.FrontSide}),
            new THREE.MeshPhongMaterial({map: blue, bumpMap: bump, side: THREE.FrontSide}),
            new THREE.MeshPhongMaterial({map: white, bumpMap: bump, side: THREE.FrontSide}),
            new THREE.MeshPhongMaterial({map: red, bumpMap: bump, side: THREE.FrontSide}),
            new THREE.MeshPhongMaterial({map: orange, bumpMap: bump, side: THREE.FrontSide})
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
