/**
 * Created by 路路 on 2017/6/15.
 */
const box = new WHS.Box({
  geometry: {
    width: 2,
    height: 2,
    depth: 4
  },
  position:[0,20,0],
  modules: [
    new PHYSICS.BoxModule({
      mass: 10
    })
  ],

  material: new THREE.MeshBasicMaterial({color: 0xff0000})
});
export {box}
