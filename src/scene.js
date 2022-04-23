const scene = new THREE.Scene();


// camera
const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 ); // fix scaled cube
camera.position.z = 5;


// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
window.onload = () => {
    document.body.appendChild(renderer.domElement);
}

// geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);


// material
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });


// mesh
const mesh = new THREE.Mesh(geometry, material);


// add mesh to scene
scene.add(mesh);


// rendering
function render() {
    requestAnimationFrame(render);
    window.onload = () => {
        document.body.appendChild(renderer.domElement);
    }
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}
render()
