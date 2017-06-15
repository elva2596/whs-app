/**
 * Created by 路路 on 2017/6/15.
 */
const app = new WHS.App([
  new WHS.ElementModule(),
  new WHS.SceneModule(),
  new WHS.CameraModule({
    position: new THREE.Vector3(0, 10, 50)
  }),
  new WHS.RenderingModule({bgColor: 0x162129}),
  new WHS.ResizeModule(),
  new PHYSICS.WorldModule({
    gravity: new THREE.Vector3(0, -10, 0),
    ammo: 'https://cdn.rawgit.com/WhitestormJS/physics-module-ammonext/75634e80/vendor/ammo.js'
  }),
  new WHS.OrbitControlsModule()
]);
export {app}
