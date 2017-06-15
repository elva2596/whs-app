/**
 * Created by 路路 on 2017/6/15.
 */
import * as WHS from 'whs'
import {MeshBasicMaterial} from 'three'
import {OBJLoader} from '../../static/loaders/OBJLoader';

var Carapace = new WHS.TextureModule.load({
    url: `/static/model/ShuFu/Carapace_Diffuse.png`
});
console.log(Carapace)
const teapot = new WHS.Importer({
    url:`/static/model/ShuFu/ShuFu.obj`,
    loader:new OBJLoader(),
    parser(group){
      group.children.forEach((mesh)=>{
          console.log(mesh.name)
          switch(mesh.name){
              case "Carapace":
                  mesh.material.map = Carapace
                  break;
          }
      })
      return group
    },
    useCustomMaterial:true,
    material: new MeshBasicMaterial({
        color: 0xffffff
    }),
});

export {teapot}
