const rootElement = document.body.querySelector("#root");

function main() {
  const scene = new THREE.Scene();

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  rootElement.appendChild(renderer.domElement);

  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    500
  );
  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);

  const material = new THREE.LineBasicMaterial({
    color: new THREE.Color("#0000ff"),
  });

  const points = [];
  points.push(new THREE.Vector3(-10, 0, 0));
  points.push(new THREE.Vector3(0, 10, 0));
  points.push(new THREE.Vector3(10, 0, 0));

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  const line = new THREE.Line(geometry, material);
  scene.add(line);
  renderer.render(scene, camera);
}

if (WebGL.isWebGLAvailable()) {
  main();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  rootElement.appendChild(warning);
  console.error(`WebGL is not available. see detail ${warning}`);
}
