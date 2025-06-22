let scene, camera, renderer, cube;
// Three.jsの初期化

function init() {
    /* シーン */
  scene = new THREE.Scene(); 

  /* カメラ */
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

  /* レンダラー */
  renderer = new THREE.WebGLRenderer({antialius: true});

  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  /* ボックスサイズの決定　メッシュ、追加 */
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  // const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

  const texture = new THREE.TextureLoader().load("./texture/vket2023summer-pcVrChat.png");
  const material = new THREE.MeshBasicMaterial({ map: texture });

  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  /* カメラ位置の設定 */
  camera.position.z = 5;

}


/* アニメーション制御 */
function animate() {
    requestAnimationFrame(animate);

    // キューブの回転
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // レンダリング
    renderer.render(scene, camera);
}

/* ウィンドウ変更時のサイズ調整 */
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  window.addEventListener('resize', onWindowResize, false)


init();
animate();



