class Board extends THREE.Object3D{

    addBoard(x, y, z) {
        'use strict';
        geometry = new THREE.BoxGeometry(80,8,80, 30, 3, 30);
        mesh = new THREE.Mesh(geometry, this.userData.phongMaterial);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }

    addFrame(x, y, z) {
        'use strict';
        var geometryTop = new THREE.BoxGeometry(80, 8, 5, 8, 3, 10);
        var meshTop = new THREE.Mesh(geometryTop);
        meshTop.position.set(x, y, z-42.5);
        var geometryBottom = new THREE.BoxGeometry(5, 8, 90, 8, 3, 10);
        var meshBottom = new THREE.Mesh(geometryTop);
        meshBottom.position.set(x, y, z+42.5);
        var geometryLeft = new THREE.BoxGeometry(5, 8, 90, 8, 3, 10);
        var meshLeft = new THREE.Mesh(geometryLeft);
        meshLeft.position.set(x-42.5, y, z);
        var geometryRight = new THREE.BoxGeometry(5, 8, 90, 8, 3, 10);
        var meshRight = new THREE.Mesh(geometryRight);
        meshRight.position.set(x+42.5, y, z);
        geometry = new THREE.Geometry();
        meshTop.updateMatrix();
        geometry.merge(meshTop.geometry, meshTop.matrix);
        meshBottom.updateMatrix();
        geometry.merge(meshBottom.geometry, meshBottom.matrix);
        meshLeft.updateMatrix();
        geometry.merge(meshLeft.geometry, meshLeft.matrix);
        meshRight.updateMatrix();
        geometry.merge(meshRight.geometry, meshRight.matrix);
        mesh = new THREE.Mesh(geometry, material);
        this.add(mesh);
    }


    changeToBasic(){
        this.children[0].material  = this.userData.basicMaterialBoard;
        this.children[1].material  = this.userData.basicMaterialFrame;
    }
    changeToPhong(){
        this.children[0].material  = this.userData.phongMaterialBoard;    
        this.children[1].material  = this.userData.phongMaterialFrame;
    }

    constructor(x, y, z){
        super();

        var chessBoard = new texture.load("textures/casas.png");
        var basicBoard = new THREE.MeshFaceMaterial([
            new THREE.MeshBasicMaterial({color: 0x5b5a58}),
            new THREE.MeshBasicMaterial({color: 0x5b5a58}),
            new THREE.MeshBasicMaterial({map: chessBoard, side: THREE.FrontSide}),
            new THREE.MeshBasicMaterial({color: 0x5b5a58}),
            new THREE.MeshBasicMaterial({color: 0x5b5a58}),
            new THREE.MeshBasicMaterial({color: 0x5b5a58})
        ]);
        var phongBoard = new THREE.MeshFaceMaterial([
            new THREE.MeshPhongMaterial({color: 0x5b5a58}),
            new THREE.MeshPhongMaterial({color: 0x5b5a58}),
            new THREE.MeshPhongMaterial({map: chessBoard, side: THREE.FrontSide}),
            new THREE.MeshPhongMaterial({color: 0x5b5a58}),
            new THREE.MeshPhongMaterial({color: 0x5b5a58}),
            new THREE.MeshPhongMaterial({color: 0x5b5a58})
        ]);
        var basicFrame = new THREE.MeshBasicMaterial({color: 0x5b5a58});
        var phongFrame = new THREE.MeshPhongMaterial({color: 0x5b5a58});

        this.userData = {
            basicMaterialBoard: basicBoard,
            phongMaterialBoard: phongBoard,
            basicMaterialFrame: basicFrame,
            phongMaterialFrame: phongFrame          
        }

        this.position.x = x;
        this.position.y = y-4;
        this.position.z = z;
        
        'use strict';

        this.addBoard(0,0,0);
        this.addFrame(0,0,0);
        }
}