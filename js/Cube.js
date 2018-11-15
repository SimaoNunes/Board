class Cube extends THREE.Object3D{

    constructor(x,z,size){
        'use strict'
        super();

        this.position.x = x;
        this.position.y = size/2;
        this.position.z = z;
    
        material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/magic_cube.png"), side: THREE.FrontSide });
        geometry = new THREE.BoxGeometry(size, size, size);
        mesh = new THREE.Mesh(geometry, material);

        this.add(mesh);
        // this.add(new THREE.AxisHelper(8));

    }
}
