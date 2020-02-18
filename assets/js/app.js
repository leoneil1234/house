let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );

clock = new THREE.Clock();
// //BOX GEOMETRY
const width = 600;
const height = 100;
const depth = 20;
const geometry = new THREE.BoxBufferGeometry(width, height, depth);

const widthCeiling = 600;
const heightCeiling = 600;
const depthCeiling = 20;
const geometryCeiling = new THREE.BoxBufferGeometry(widthCeiling, heightCeiling, depthCeiling);

const widthwindow = 480;
const heightwindow = 80;
const depthwindow = 20;
const geometryWindow = new THREE.BoxBufferGeometry(widthwindow, heightwindow, depthwindow);

const widthwindow2 = 210;
const heightwindow2 = 80;
const depthwindow2 = 15;
const geometryWindow2 = new THREE.BoxBufferGeometry(widthwindow2, heightwindow2, depthwindow2);

const widthwindow3 = 170;
const heightwindow3 = 80;
const depthwindow3 = 15;
const geometryWindow3 = new THREE.BoxBufferGeometry(widthwindow3, heightwindow3, depthwindow3);



const width11 = 50;
const height11 = 50;
const depth11 = 20;
const geometry11 = new THREE.BoxBufferGeometry(width11, height11, depth11);

const widthbed = 220;
const heightbed = 50;
const depthbed = 130;
const geometryBed = new THREE.BoxBufferGeometry(widthbed, heightbed, depthbed);

const widthbedhead = 150;
const heightbedhead = 20;
const depthbedhead = 80;
const geometryBedhead = new THREE.BoxBufferGeometry(widthbedhead, heightbedhead, depthbedhead);

const widthDoor = 10;
const heightDoor = 190;
const depthDoor = 90;
const geometryDoor = new THREE.BoxBufferGeometry(widthDoor, heightDoor, depthDoor);


const width1111 = 100;
const height1111 = 50;
const depth1111 = 80;
const geometryBo1 = new THREE.BoxBufferGeometry(width1111, height1111, depth1111);

const width11111 = 445;
const height11111 = 11;
const depth11111 = 80;
const geometryBo11 = new THREE.BoxBufferGeometry(width11111, height11111, depth11111);

//circle
const radius222 = 35;
const segments222 = 100;
const geometryCi = new THREE.CircleBufferGeometry(radius222, segments222);

//Lathe
const points = [];
for (let i = 0; i < 10; ++i) {
  points.push(new THREE.Vector2(Math.sin(i * 0.5) * 30 + 30, (i - 5) * 10));
}
const geometryLa = new THREE.LatheBufferGeometry(points);

//torus
const radius22 = 50;
const tubeRadius22 = 20;
const radialSegments22 = 80;
const tubularSegments22 = 240;
const geometryTo = new THREE.TorusBufferGeometry(radius22, tubeRadius22, radialSegments22, tubularSegments22);

const radius2222 = 320;
const tubeRadius2222 = 50;
const radialSegments2222 = 80;
const tubularSegments2222 = 240;
const geometryTo1 = new THREE.TorusBufferGeometry(radius2222, tubeRadius2222, radialSegments2222, tubularSegments2222);

//cone
const radius2 = 50;
const height2 = 50;
const segments2 = 60;
const geometryCo = new THREE.ConeBufferGeometry(radius2, height2, segments2);


//cylinder wall
const radiusTop1 = 30;
const radiusBottom1 = 30;
const height1 = 80;
const radialSegments1 = 30;
const geometryCy = new THREE.CylinderBufferGeometry(radiusTop1, radiusBottom1, height1, radialSegments1);
 
const radiusTop10 = 50;
const radiusBottom10 = 50;
const height10 = 200;
const radialSegments10 = 30;
const geometryCy1 = new THREE.CylinderBufferGeometry(radiusTop10, radiusBottom10, height10, radialSegments10);
 




//texture used

let textureFloor = new THREE.TextureLoader().load( 'assets/textures/floor.png' );
let mainBackground = new THREE.TextureLoader().load('assets/textures/sky.jpg')
let dresser = new THREE.TextureLoader().load('assets/textures/dresser.png')
let wall_2 = new THREE.TextureLoader().load( 'assets/textures/wall3.png' );
let bedd = new THREE.TextureLoader().load('assets/textures/bed2.png')
let bedHead = new THREE.TextureLoader().load('assets/textures/bedhead.png');
let doorLoad = new THREE.TextureLoader().load('assets/textures/door.png');


let floorMain = new THREE.MeshLambertMaterial( { map: textureFloor } );
let wall2 = new THREE.MeshPhongMaterial( { map: wall_2, shininess: 100 } );
let dresser2 = new THREE.MeshPhongMaterial( { map: dresser } );
let beddd = new THREE.MeshStandardMaterial({map: bedd});
let bedHeadmat = new THREE.MeshPhongMaterial ({map : bedHead});
let doorMat = new THREE.MeshPhongMaterial ({map : doorLoad});




//LAND 
let plane = new THREE.PlaneBufferGeometry(1000, 1600, 2, 2);
let floor = new THREE.Mesh( plane, floorMain);
let wallMain1 = new THREE.Mesh(geometry, wall2);


let wallMain2 = new THREE.Mesh(geometry, wall2);

let wallMain3 = new THREE.Mesh(geometry, wall2);


let wallWindow = new THREE.Mesh(geometryWindow, wall2);

let wallWindow2 = new THREE.Mesh(geometryWindow, wall2);

let wallWindow3 = new THREE.Mesh (geometryWindow2, wall2);

let wallWindow4 = new THREE.Mesh(geometryWindow2, wall2);
let wallWindow5 = new THREE.Mesh(geometryWindow2, wall2);
let wallWindow6 = new THREE.Mesh (geometryWindow3, wall2);




let ceiling = new THREE.Mesh(geometryCeiling, wall2);

let dresserOne = new THREE.Mesh(geometry11, dresser2);


let door = new THREE.Mesh(geometryDoor, doorMat);


let bed = new THREE.Mesh(geometryBed, beddd);

let beadHeadmain = new THREE.Mesh(geometryBedhead, bedHeadmat);

let beadHeadbot = new THREE.Mesh(geometryBedhead, bedHeadmat);
wallMain1.castShadow = true;
wallMain1.recieveShadow = true;
wallMain2.castShadow = true;
wallMain2.recieveShadow = true;
wallMain3.castShadow = true;
wallMain3.recieveShadow = true;
wallWindow.castShadow = true;
wallWindow.recieveShadow = true;
wallWindow2.castShadow = true;
wallWindow2.recieveShadow = true;
wallWindow3.castShadow = true;
wallWindow3.recieveShadow = true;
wallWindow4.castShadow = true;
wallWindow4.recieveShadow = true;
wallWindow5.castShadow = true;
wallWindow5.recieveShadow = true;
wallWindow6.castShadow = true;
wallWindow6.recieveShadow = true;
ceiling.castShadow = true;
ceiling.recieveShadow = true;
dresserOne.castShadow = true;
dresserOne.recieveShadow = true;
door.castShadow = true;
door.recieveShadow = true;
bed.castShadow = true;
bed.recieveShadow = true;
beadHeadbot.castShadow = true;
beadHeadmain.castShadow = true;

let spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set(500, 200, 400);

spotLight.castShadow = true;
spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;
scene.add( spotLight );

let spotLightHelper = new THREE.SpotLightHelper( spotLight );
scene.add( spotLightHelper );



let ambientLight = new THREE.AmbientLight( 0x404040, .5 );
scene.add(ambientLight);

let light = new THREE.PointLight(0xffffff, 1.0, 600);
scene.add (light);



scene.add( floor );
scene.add(wallMain1);
scene.add(wallMain2);
scene.add(dresserOne);
scene.add(ceiling);
scene.add(bed);
scene.add(beadHeadmain);
scene.add(beadHeadbot);

scene.add(wallWindow);
scene.add(wallWindow2);
scene.add(wallWindow3);
scene.add(wallWindow4);
scene.add (wallWindow5);
scene.add(wallWindow6);
scene.add(door);




//scene.add(wallMain3);

//Set up shadow properties for the spotLight



scene.background=(mainBackground);

camera.position.set( 500, 100, 500 );
// camera.position.x = 100;
// camera.position.y = 0;
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild( renderer.domElement );

function animate() {
   requestAnimationFrame( animate );


   //controls
   controls = new THREE.OrbitControls(camera, renderer.domElement );

  
   //FLOOR
   floor.rotation.x = 300;
   floor.position.y = 0;

   ceiling.rotation.x= 300;
   ceiling.position.y = 250;
   ceiling.position.x = -20;
   ceiling.position.z = 40;
   //wall
   wallMain1.position.x=-100;
   wallMain1.position.y=45;
   wallMain1.position.z= -150;

   wallMain2.position.x=-300;
   wallMain2.position.y=45;
   wallMain2.rotation.y=1.5;

   wallWindow.position.y = 200;
   wallWindow.position.z = -150;
   wallWindow.position.x = -40;

   wallWindow2.position.y = 200;
   wallWindow2.position.z = 60;
   wallWindow2.position.x = -300;
   wallWindow2.rotation.y = 1.5;

   wallWindow3.position.y = 130;
   wallWindow3.position.z = -150;
   wallWindow3.position.x = 95;
   wallWindow4.position.y = 130;
   wallWindow4.position.z = -150;
   wallWindow4.position.x = -190;

   wallWindow5.position.y = 130;
   wallWindow5.position.z = -40;
   wallWindow5.position.x = -295;
   wallWindow5.rotation.y = 1.5;

   wallWindow6.position.y = 130;
   wallWindow6.position.z = 213;
   wallWindow6.position.x = -315;
   wallWindow6.rotation.y = 1.5;

  




//spotLight.position.x = -300;
//spotLight.position.z = -500;



//    wallMain3.position.x=300;
//    wallMain3.position.y=45;
//    wallMain3.rotation.y=80;

   //dresser
   dresserOne.position.x = -250;
   dresserOne.position.y = 30;
   dresserOne.position.z = -50;
   dresserOne.rotation.y = 60;

   bed.position.x = -50;
   bed.position.y = 30;
   bed.position.z = -20;
   bed.rotation.y = -1.58;
   beadHeadmain.rotation.x = 1.6;
   beadHeadmain.position.y = 30;
   beadHeadmain.position.x = -50;
   beadHeadmain.position.z = -120;
   beadHeadbot.rotation.x = 1.6;
   beadHeadbot.position.y = 30;
   beadHeadbot.position.x = -50;
   beadHeadbot.position.z = 85;

   door.position.y = 90;
   door.position.x = 200;
   door.rotation.z = 0;
   

   spotLight.position.x = -1000;
   spotLight.rotation.y = 500;
   spotLight.position.y = 600;
   spotLight.rotation.x = 100;



   
   controls.update();

   renderer.render( scene, camera );
}
animate();