const root = document.querySelector('#root');
const renderer = new THREE.WebGLRenderer({ canvas: root, antialias: true });

renderer.setClearColor(0x00ff00);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(35, aspect, 0.1, 3000);
const scene = new THREE.Scene();

const ambientLight = THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const geometry = new THREE.CubeGeometry(100, 100, 100);
const material = new THREE.MeshBasicMaterial();
const mesh = new THREE.Mesh(geometry, material);

mesh.position.set(0, 0, -1000);

scene.add(mesh);

requestAnimationFrame(render);

function render() {
    mesh.rotation.x += 0.1;
    mesh.rotation.y += 0.1;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}