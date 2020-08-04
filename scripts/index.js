let animationId
const root = document.querySelector('#root');
const renderer = new THREE.WebGLRenderer({ canvas: root, antialias: true });

renderer.setClearColor(0x00ff00);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(35, aspect, 0.1, 3000);
const scene = new THREE.Scene();

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 0.5);
scene.add(pointLight);

const geometry = new THREE.CubeGeometry(100, 100, 100);
const material = new THREE.MeshLambertMaterial({ color: 0xf3ffe2 });
const mesh = new THREE.Mesh(geometry, material);

mesh.position.set(0, 0, -1000);

scene.add(mesh);

animationId = requestAnimationFrame(render);

function render() {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
    animationId = requestAnimationFrame(render);
}