class Board extends THREE.Object3D{

    addBoard(x, y, z) {
        'use strict';
        geometry = new THREE.BoxGeometry(80,8,80, 30, 3, 30);
        mesh = new THREE.Mesh(geometry, this.userData.phongMaterial);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }

    addFrame(x, y, z, width, depth) {
        'use strict';
        geometry = new THREE.BoxGeometry(width,8,depth, 8, 3, 10);
        material = new THREE.MeshBasicMaterial({color: 0x5b5a58});
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }

    changeToBasic(){
        this.children[0].material  = this.userData.basicMaterial;
    }
    changeToPhong(){
        this.children[0].material  = this.userData.phongMaterial;       
    }

    constructor(x, y, z){
        super();

        var basic = new THREE.MeshFaceMaterial([
            new THREE.MeshBasicMaterial({color: 0x5b5a58}),
            new THREE.MeshBasicMaterial({color: 0x5b5a58}),
            new THREE.MeshBasicMaterial({map: boardTexture, side: THREE.FrontSide}),
            new THREE.MeshBasicMaterial({color: 0x5b5a58}),
            new THREE.MeshBasicMaterial({color: 0x5b5a58}),
            new THREE.MeshBasicMaterial({color: 0x5b5a58})
        ]);
        var phong = new THREE.MeshFaceMaterial([
            new THREE.MeshPhongMaterial({color: 0x5b5a58}),
            new THREE.MeshPhongMaterial({color: 0x5b5a58}),
            new THREE.MeshPhongMaterial({map: boardTexture, side: THREE.FrontSide}),
            new THREE.MeshPhongMaterial({color: 0x5b5a58}),
            new THREE.MeshPhongMaterial({color: 0x5b5a58}),
            new THREE.MeshPhongMaterial({color: 0x5b5a58})
        ]);

        this.userData = {
            basicMaterial: basic,
            phongMaterial: phong  
        }

        this.position.x = x;
        this.position.y = y-4;
        this.position.z = z;
        
        'use strict';

        this.addBoard(0,0,0);
        this.addFrame(-42.5,0,0,5,90);
        this.addFrame(42.5,0,0,5,90);
        this.addFrame(0,0,-42.5,80,5);
        this.addFrame(0,0,42.5,80,5);
        }
}