/**
 * Created by 路路 on 2017/6/15.
 */
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

  material: new THREE.MeshPhongMaterial({
    color: 0xF2F2F2
  }),

  position: new THREE.Vector3(0, 15, 0)
});

export {sphere}
