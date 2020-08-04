var root = document.querySelector('#root');
var renderer = new THREE.WebGLRenderer({ canvas: root, antialias: true });

renderer.setClearColor(0x00ff00);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);