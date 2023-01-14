import * as THREE from "three";
import * as ThreeControls from "three-controls"
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'

let scene, camera, renderer, controls;
let containerRender = document.getElementById("render-product")

const couch3d = 'https://raw.githubusercontent.com/mizaelalves/product-card/master/object/sofa.obj'
const couchMaterial = 'https://cdn.statically.io/gh/mizaelalves/product-card/e0aafa9b/object/Textures/sofa.mtl'

const init = () => {

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(15, 500 / 400);

  camera.position.set(5, 5, 6);

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });

  renderer.setSize(466, 260);

  containerRender.appendChild(renderer.domElement)


  //carregamento da textura 

  var mtlLoader = new MTLLoader();

  const objLoader = new OBJLoader();

  mtlLoader.load(couchMaterial, function (materials) {
    materials.preload();
    objLoader.setMaterials(materials);

    // carregamento do objeto
    objLoader
      .load(couch3d,
        function (object) {

          scene.add(object)

        },
        function (xhr) {

          console.log((xhr.loaded / xhr.total * 100) + '% loaded');

        },
        // called when loading has errors
        function (error) {

          console.log('An error happened');

        });

  });


  controls = new ThreeControls.OrbitControls(camera, renderer.domElement)

  const ambient_light = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambient_light);

  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(15, 15, 15);
  scene.add(light)
};

const animate = () => {
  requestAnimationFrame(animate);
  render();
};

const render = () => {
  renderer.render(scene, camera);
};

init()
animate()