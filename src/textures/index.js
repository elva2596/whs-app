const loader =new THREE.TextureLoader()
// 加载鼠妇的材质(一个鼠妇model由四个Mesh组成，每个Mesh对应三种纹理贴图)
// 第一个鼠妇的Mesh的三种纹理贴图
const Carapace_D = loader.load(rootUrl+'static/model/ShuFu/Carapace_Diffuse.png');
const Carapace_S = loader.load(rootUrl+'static/model/ShuFu/Carapace_Glossiness.png');
const Carapace_N = loader.load(rootUrl+'static/model/ShuFu/Carapace_Normal.png');
const mat_Carapace = new THREE.MeshPhongMaterial({
	map: Carapace_D,
	side: THREE.DoubleSide,
	specularMap: Carapace_S,
	normalMap: Carapace_N,
});

const Abdomen_D = loader.load(rootUrl+'static/model/ShuFu/Abdomen_Diffuse.png');
const Abdomen_S = loader.load(rootUrl+'static/model/ShuFu/Abdomen_Glossiness.png');
const Abdomen_N = loader.load(rootUrl+'static/model/ShuFu/Abdomen_Normal.png');
const mat_Abdomen = new THREE.MeshPhongMaterial({
		side: THREE.DoubleSide,
		map: Abdomen_D,
		specularMap: Abdomen_S,
		normalMap: Abdomen_N,
	});

const  Tentacle_D = loader.load(rootUrl+'static/model/ShuFu/Tentacle_Diffuse.png');
const  Tentacle_S = loader.load(rootUrl+'static/model/ShuFu/Tentacle_Glossiness.png');
const  Tentacle_N = loader.load(rootUrl+'static/model/ShuFu/Tentacle_Normal.png');
const mat_Tentacle = new THREE.MeshPhongMaterial({
	side: THREE.DoubleSide,
	map: Tentacle_D,
	specularMap: Tentacle_S,
	normalMap: Tentacle_N,
});
const  Foot_D = loader.load(rootUrl+'static/model/ShuFu/Foot_Diffuse.png');
const  Foot_S = loader.load(rootUrl+'static/model/ShuFu/Foot_Glossiness.png');
const  Foot_N = loader.load(rootUrl+'static/model/ShuFu/Foot_Normal.png');
var mat_Foot = new THREE.MeshPhongMaterial({
	side: THREE.DoubleSide,
	map: Foot_D,
	specularMap: Foot_S,
	normalMap: Foot_N,
});

// 托盘
const IronPlate_D = loader.load(rootUrl+'static/model/IronPlate/PlateMaterial_Specular.png');
const IronPlate_S = loader.load(rootUrl+'static/model/IronPlate/PlateMaterial_Glossiness.png');
const IronPlate_N = loader.load(rootUrl+'static/model/IronPlate/PlateMaterial_Normal.png');
const mat_IronPlate = new THREE.MeshPhongMaterial({
	side: THREE.DoubleSide,
	map: IronPlate_D,
	specularMap :IronPlate_S,
	normalMap: IronPlate_N,
});

// 玻璃板上面的挡板
var Cardboard_D = loader.load(rootUrl+'static/model/Cardboard/Cardboard_Diffuse1.png');
var Cardboard_S = loader.load(rootUrl+'static/model/Cardboard/Cardboard_Glossiness.png');
var Cardboard_N = loader.load(rootUrl+'static/model/Cardboard/Cardboard_Normal.png');
var mat_Cardboard = new THREE.MeshPhongMaterial({
	side: THREE.DoubleSide,
	map: Cardboard_D,
	specularMap: Cardboard_S,
	normalMap: Cardboard_N,
	transparent: true,
	opacity: 1
});
// 加载时钟材质
const ClarmClock_D = loader.load(rootUrl+'static/model/ClarmClock/ClarmClock_ClarmClockBody_Diffuse.png');
const ClarmClock_N = loader.load(rootUrl+'static/model/ClarmClock/ClarmClock_ClarmClockBody_Normal.png');
const ClarmClock_S = loader.load(rootUrl+'static/model/ClarmClock/ClarmClock_ClarmClockBody_Specular.png');
const mat_ClarmClock = new THREE.MeshPhongMaterial({
	side: THREE.DoubleSide,
	map: ClarmClock_D,
	specularMap: ClarmClock_S,
	normalMap: ClarmClock_N,
});
// 桌子的各种材质
const Desk_D = loader.load(rootUrl+'static/model/Desk/Desk_DeskBody_Diffuse.png')
const  Desk_N = loader.load(rootUrl+'static/model/Desk/Desk_DeskBody_Normal.png')
const Desk_S = loader.load(rootUrl+'static/model/Desk/Desk_DeskBody_Glossiness.png')
const mat_Desk = new THREE.MeshPhongMaterial({
	side: THREE.DoubleSide,
	map: Desk_D,
	specularMap: Desk_S,
	normalMap: Desk_N,
});
// 时钟挡板的材质
const getCanvasMap = (hour,min,sec)=>{
	const canvas = document.createElement("canvas");
	canvas.width = 128;
	canvas.height = 64;
	const cns = canvas.getContext('2d');

	cns.clearRect(0, 0, 128, 64);//清除画布元素
	cns.beginPath();//开始路径
	cns.fillStyle ="#000000";//填充颜色
	cns.rect(0, 0, 128, 64);//创建子路径
	cns.fill();//调用填充
	cns.closePath();
	cns.fillStyle="#ffffff";//字体颜色
	cns.font = " 30px Arial";//字体属性
	cns.textAlign = "center";//水平定位
	cns.textBaseline = "middle";//垂直定位
	cns.fillText(hour + ":" + min + ":" + sec, 60, 30);//绘制文本
	var canvasMap = new THREE.Texture(canvas);
	canvasMap.needsUpdate = true;
	return canvasMap;
}

// 玻璃板的材质
const mat_GlassPlate = new THREE.MeshPhongMaterial({
		side: THREE.DoubleSide,
		transparent : true,
		opacity: 0.15,
	});

export {
	getCanvasMap,
	mat_Carapace,
	mat_Abdomen,
	mat_Foot,
	mat_Tentacle,
	mat_IronPlate,
	mat_Cardboard,
	mat_ClarmClock,
	mat_Desk,
	mat_GlassPlate
}
