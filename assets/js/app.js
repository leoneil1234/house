let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );


// //BOX GEOMETRY
const width = 600;
const height = 400;
const depth = 20;
const geometry = new THREE.BoxBufferGeometry(width, height, depth);

const width11 = 50;
const height11 = 50;
const depth11 = 20;
const geometry11 = new THREE.BoxBufferGeometry(width11, height11, depth11);

const widthbed = 220;
const heightbed = 50;
const depthbed = 130;
const geometryBed = new THREE.BoxBufferGeometry(widthbed, heightbed, depthbed);

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


let floorMain = new THREE.MeshLambertMaterial( { map: textureFloor } );
let wall2 = new THREE.MeshPhongMaterial( { map: wall_2, shininess: 100 } );
let dresser2 = new THREE.MeshBasicMaterial( { map: dresser } );
let beddd = new THREE.MeshStandardMaterial({map: bedd});



//LAND 
let plane = new THREE.PlaneBufferGeometry(1000, 1600, 2, 2);
let floor = new THREE.Mesh( plane, floorMain);
let wallMain1 = new THREE.Mesh(geometry, wall2);
let wallMain2 = new THREE.Mesh(geometry, wall2);
let wallMain3 = new THREE.Mesh(geometry, wall2);

let ceiling = new THREE.Mesh(geometry, wall2);
let dresserOne = new THREE.Mesh(geometry11, dresser2);


let bed = new THREE.Mesh(geometryBed, beddd);


let ambientLight = new THREE.AmbientLight( 0x404040, 1.5 );
scene.add(ambientLight);

let light = new THREE.PointLight(0xffffff, 1.0, 600);
scene.add (light);

scene.add( floor );
scene.add(wallMain1);
scene.add(wallMain2);
scene.add(dresserOne);
scene.add(ceiling);
scene.add(bed);


//scene.add(wallMain3);

//Set up shadow properties for the spotLight



scene.background=(mainBackground);

camera.position.set( 500, 100, 500 );
// camera.position.x = 100;
// camera.position.y = 0;
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
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
    
    ceiling.position.z = 100;
   //wall
   wallMain1.position.x=-100;
   wallMain1.position.y=45;
   wallMain1.position.z= -150;

   wallMain2.position.x=-300;
   wallMain2.position.y=45;
   wallMain2.rotation.y=80;

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



   
   controls.update();

   renderer.render( scene, camera );
}
animate();