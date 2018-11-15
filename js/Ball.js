class Ball extends THREE.Object3D{

    constructor(x,z,diameter){
        'use strict'
        super();

        this.position.x = x;
        this.position.y = diameter/2;
        this.position.z = z;
    
        geometry = new THREE.SphereGeometry(diameter/2, 30, 30);
        mesh = new THREE.Mesh(geometry, ballPhongMaterial);

        this.add(mesh);
        // this.add(new THREE.AxisHelper(8));

    }
}
