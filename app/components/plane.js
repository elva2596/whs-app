/**
 * Created by 路路 on 2017/6/15.
 */
import * as WHS from "whs"
import * as PHYSICS from 'physics-module-ammonext'
import {MeshPhongMaterial} from "three"
// Plane
const plane = new WHS.Plane({
  geometry: {
    width: 100,
    height: 100
  },

  modules: [
    new PHYSICS.PlaneModule({
      mass: 0
    })
  ],

  material: new MeshPhongMaterial({color: 0x447F8B}),

  rotation: {
    x: -Math.PI / 2
  }
})
export {plane}
