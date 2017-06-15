/**
 * Created by 路路 on 2017/6/15.
 */
import * as WHS from "whs"
import {Vector3} from "three"
// Lights
const pointLight= new WHS.PointLight({
  light: {
    intensity: 0.5,
    distance: 100
  },

  shadow: {
    fov: 90
  },

  position: new Vector3(0, 10, 10)
})

const ambientLight = new WHS.AmbientLight({
  light: {
    intensity: 0.4
  }
})

export {
  ambientLight,
  pointLight
}
