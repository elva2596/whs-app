/**
 * Created by 路路 on 2017/6/15.
 */
import * as WHS from 'whs'
import {Vector3} from 'three'
import * as PHYSICS from 'physics-module-ammonext'
const app = new WHS.App([
  new WHS.ElementModule(),
  new WHS.SceneModule(),
  new WHS.CameraModule({
    position: new Vector3(0, 10, 50)
  }),
  new WHS.RenderingModule({bgColor: 0x162129}),
  new WHS.ResizeModule(),
  new PHYSICS.WorldModule({
    gravity: new Vector3(0, -10, 0),
      ammo: 'path/to/ammo.js'
  }),
  new WHS.OrbitControlsModule()
]);
export {app}
