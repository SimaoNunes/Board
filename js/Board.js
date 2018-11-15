class Board extends THREE.Object3D{

    addBoard(x, y, z,materials) {
        'use strict';
        geometry = new THREE.BoxGeometry(80,8,80, 30, 3, 30);
        material = new THREE.MeshFaceMaterial(materials);
        mesh = new THREE.Mesh(geometry, material);
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

    constructor(x, y, z){
        super();

        this.position.x = x;
        this.position.y = y-4;
        this.position.z = z;
    
        'use strict';
        
        var boardMaterials =
        [
            new THREE.MeshBasicMaterial({color: 0x5b5a58}),
            new THREE.MeshBasicMaterial({color: 0x5b5a58}),
            new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load("textures/casas.png"), side: THREE.FrontSide}),
            new THREE.MeshBasicMaterial({color: 0x5b5a58}),
            new THREE.MeshBasicMaterial({color: 0x5b5a58}),
            new THREE.MeshBasicMaterial({color: 0x5b5a58})
        ];

        this.addBoard(0,0,0,boardMaterials);
        this.addFrame(-42.5,0,0,5,90);
        this.addFrame(42.5,0,0,5,90);
        this.addFrame(0,0,-42.5,80,5);
        this.addFrame(0,0,42.5,80,5);
        }
}