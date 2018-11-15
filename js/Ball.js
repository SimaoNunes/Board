class Ball extends THREE.Object3D{

    constructor(x,z,diameter){
        'use strict'
        super();

        this.position.x = x;
        this.position.y = diameter/2;
        this.position.z = z;
    
        material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("textures/ball_one.jpg"), side: THREE.FrontSide });
        geometry = new THREE.SphereGeometry(diameter/2, 30, 30);
        mesh = new THREE.Mesh(geometry, material);

        this.add(mesh);
        // this.add(new THREE.AxisHelper(8));

    }
}
