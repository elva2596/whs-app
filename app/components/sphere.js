/**
 * Created by 路路 on 2017/6/15.
 */
import * as WHS from "whs"
import * as PHYSICS from 'physics-module-ammonext'
import {Vector3,MeshPhongMaterial} from "three"
// Sphere

const sphere = new WHS.Sphere({ // Create sphere comonent.
  geometry: {
    radius: 5,
    widthSegments: 32,
    heightSegments: 32
  },

  modules: [
    new PHYSICS.SphereModule({
      mass: 10
    })
  ],

  material: new MeshPhongMaterial({
    color: 0xF2F2F2
  }),

  position: new Vector3(0, 15, 0)
});

export {sphere}
