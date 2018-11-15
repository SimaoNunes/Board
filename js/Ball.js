class Ball extends THREE.Object3D{

    constructor(x,y,z,diameter,paint){
        'use strict'
        super();

        this.position.x = x;
        this.position.y = diameter/2;
        this.position.z = z;
    
        material = new THREE.MeshBasicMaterial({color: paint, wireframe: false});
        geometry = new THREE.SphereGeometry(diameter/2, 30, 30);
        mesh = new THREE.Mesh(geometry, material);

        this.add(mesh);
        // this.add(new THREE.AxisHelper(8));

    }
}
