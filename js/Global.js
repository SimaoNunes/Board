// ------------------
//  GLOBAL VARIABLES
// ------------------
var scene, renderer; // variaveis gerais relativas a animacao
var cameras, camera, camera1, camera2, camera3, camera4, camera5, camera6;  // diferentes tipos de cameras
var geometry, material, mesh;
var board, ball, cube; // diferentes objetos a desenhar
var lights, currentLight, directionalLight, pointLight;  // diferentes tipos de luz
var lKey = 0;   // variaveis que serao ativadas quando pressionadas as teclas respetivas
var wKey = 0;
var dKey = 0;
var pKey = 0;

var lightCalculation = 1;

// --------------------
//  TEXTURES VARIABLES
// --------------------
var texture      = new THREE.TextureLoader();



