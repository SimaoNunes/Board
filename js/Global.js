// ------------------
//  GLOBAL VARIABLES
// ------------------
var scene, renderer; // variaveis gerais relativas a animacao
var cameras, camera, camera1, camera2, camera3, camera4, camera5, camera6;  // diferentes tipos de cameras
var geometry, material, mesh;
var board, ball, cube; // diferentes objetos a desenhar
var lights, currentLight, directionalLight, pointLight;  // diferentes tipos de luz

var lightCalculation = 1;

// --------------------
//  TEXTURES VARIABLES
// --------------------
var texture      = new THREE.TextureLoader();
var cubeTexture  = new texture.load("textures/magic_cube.png");
var cubeBumpMap  = new texture.load("textures/magic_cube.png");
var ballTexture  = new texture.load("textures/ball_one.jpg");
var boardTexture = new texture.load("textures/casas.png");

// CUBE WITH PHONG MATERIAL
var cubePhongMaterial  = new THREE.MeshPhongMaterial({ map: cubeTexture, bumpMap: cubeBumpMap, side: THREE.FrontSide});
// CUBE WITH BASIC MATERIAL
var cubeBasicMaterial  = new THREE.MeshBasicMaterial({ map: cubeTexture, bumpMap: cubeBumpMap, side: THREE.FrontSide});
// BALL WITH PHONG MATERIAL
var ballPhongMaterial  = new THREE.MeshPhongMaterial({ map: ballTexture, side: THREE.FrontSide});
// BALL WITH BASIC MATERIAL
var ballBasicMaterial  = new THREE.MeshBasicMaterial({ map: ballTexture, side: THREE.FrontSide});
// BOARD WITH PHONG MATERIAL
var boardPhongMaterial = new THREE.MeshFaceMaterial([
            new THREE.MeshPhongMaterial({color: 0x5b5a58}),
            new THREE.MeshPhongMaterial({color: 0x5b5a58}),
            new THREE.MeshPhongMaterial({map: boardTexture, side: THREE.FrontSide}),
            new THREE.MeshPhongMaterial({color: 0x5b5a58}),
            new THREE.MeshPhongMaterial({color: 0x5b5a58}),
            new THREE.MeshPhongMaterial({color: 0x5b5a58})
        ]);
// BOARD WITH BASIC MATERIAL
var boardBasicMaterial = new THREE.MeshFaceMaterial([
            new THREE.MeshBasicMaterial({color: 0x5b5a58}),
            new THREE.MeshBasicMaterial({color: 0x5b5a58}),
            new THREE.MeshBasicMaterial({map: boardTexture, side: THREE.FrontSide}),
            new THREE.MeshBasicMaterial({color: 0x5b5a58}),
            new THREE.MeshBasicMaterial({color: 0x5b5a58}),
            new THREE.MeshBasicMaterial({color: 0x5b5a58})
        ]);



