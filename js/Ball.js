class Ball extends THREE.Object3D{

    changeToBasic(){
        this.children[0].material  = this.userData.basicMaterial;
    }
    
    changeToPhong(){
        this.children[0].material  = this.userData.phongMaterial;       
    }

    rotate(delta){
        var vccTest = this.userData.vcc + this.userData.acc * delta;
        if(vccTest <= this.userData.vccMax){
            this.userData.vcc = vccTest;
        }
        if(vccTest <= 0)
            this.userData.acc = 0;
        this.position.applyAxisAngle(axisY,this.userData.vcc);
        this.rotation.y += this.userData.vcc;
        this.children[0].rotation.x += this.userData.vcc;
    }

    constructor(x,z,diameter){
        'use strict'
        super();

        this.position.x = x;
        this.position.y = diameter/2;
        this.position.z = z;

        var yellow = new texture.load("textures/ball_one.jpg");

        var basic = new THREE.MeshBasicMaterial({map: yellow, side: THREE.FrontSide});
        var phong = new THREE.MeshPhongMaterial({map: yellow, side: THREE.FrontSide, specular: 0xffffff, shininess: 180});

        this.userData = {
            basicMaterial: basic,
            phongMaterial: phong,
            moving: false,
            vcc: 0,
            vccMax: 0.02,
            acc: 0
        }
    
        geometry = new THREE.SphereGeometry(diameter/2, 100, 100);
        mesh = new THREE.Mesh(geometry, this.userData.phongMaterial);

        this.add(mesh);
    }
}
