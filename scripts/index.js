const root = document.querySelector('#root');
const renderer = new THREE.WebGLRenderer({ canvas: root, antialias: true });

renderer.setClearColor(0x00ff00);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(35, aspect, 0.1, 3000);
const scene = new THREE.Scene();

renderer.render(scene, camera);