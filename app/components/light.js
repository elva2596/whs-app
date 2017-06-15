/**
 * Created by 路路 on 2017/6/15.
 */
import * as WHS from "whs"
import {Vector3} from "three"
// Lights
const directionLight = new WHS.DirectionalLight( {
    light: {
        color: 0xffffff,
        intensity: 0.2
    },

    position: [10, 20, 10]
})

  // shadow: {
  //   fov: 90
  // },



const ambientLight = new WHS.AmbientLight({
  light: {
    color:0xfffff,
    // intensity: 2
  }
})

export {
  ambientLight,
    directionLight
}
