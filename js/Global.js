// ------------------
//  GLOBAL VARIABLES
// ------------------
var scene, mainScene, pauseScene, renderer, clock, delta; // variaveis gerais relativas a animacao

var cameras, camera, camera1, camera2, controls;  // diferentes tipos de cameras

var geometry, material, mesh;

var board, ball, cube, wall; // diferentes objetos a desenhar

var lights, currentLight, directionalLight, pointLight;  // diferentes tipos de luz

var axisY = new THREE.Vector3(0,1,0);

var counter;

var lKey = false;   // variaveis que serao ativadas quando pressionadas as teclas respetivas
var wKey = 0;
var dKey = false;
var pKey = false;
var sKey = false;

var lightCalculation = 1;

// --------------------
//  TEXTURES VARIABLES
// --------------------
var texture  = new THREE.TextureLoader();



