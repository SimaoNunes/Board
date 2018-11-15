class Board extends THREE.Object3D{

    addBoard(x, y, z) {
        'use strict';
        geometry = new THREE.BoxGeometry(90,10,90, 30, 3, 30);
        material = new THREE.MeshBasicMaterial({color: 0x383531, wireframe: true});
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }

    constructor(x, y, z){
        super();

        this.position.x = x;
        this.position.y = y-5;
        this.position.z = z;
    
        'use strict';

        this.addBoard(0,0,0);
        }
}