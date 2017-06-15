/**
 * Created by Administrator on 2017/4/17 0017.
 */
// 初始化场景
function App(btn){
  this.renderer =  null
  this.scene = null
  this.camera = null
  this.light = null
  this.trackballControls = null
  this.clock = new THREE.Clock()
  this.delta = this.clock.getDelta()
  this.isLoaded = false
  this.manager = new THREE.LoadingManager()
  this.container = document.querySelector("#app")
  this.isLoaded = true
  this.$rightTool = btn
  this.init()
}
App.prototype.init = function (){
  this.initRender()
  this.initScene()
  this.initCamera()
  this.iniTrackCon(this.camera)
  this.initLight()
  this.loopRender()
  this.iniTrackCon(this.camera)
  this.controlsByToggle()
  this.manageLoder()
}
// 初始化一个renderer
App.prototype.initRender = function (){
  this.renderer = new THREE.WebGLRenderer({
    antialias:true,
    alpha: true,
  });
  this.renderer.setClearColor(0x162129);
  this.renderer.setSize(window.innerWidth,window.innerHeight);
  this.container.appendChild(this.renderer.domElement)
}
// 初始化scene
App.prototype.initScene=  function (){
  this.scene = new THREE.Scene()
}
// 初始化camera
App.prototype.initCamera =function (){
  this.camera =new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000)
  this.camera.position.set(0, 150, 140);
  this.camera.lookAt(new THREE.Vector3( 0, 0, 0 ))
  this.scene.add(this.camera)
}

// 初始化light
App.prototype.initLight = function (){
  this.light = new THREE.DirectionalLight( 0xffffff);
  this.light.position.set(0, 100, 150);
  this.light.intensity = 1.5
  this.scene.add(this.light)
}
// 循环渲染
App.prototype.loopRender = function (){
  var self = this;
  (function loopRender(){
    TWEEN.update()
    self.trackballControls.update()
    self.renderer.render(self.scene,self.camera)
    requestAnimationFrame(loopRender)
  })()
}
// 窗口响应式
App.prototype.windowResize = function (){
  this.camera.aspect = window.innerWidth/window.innerHeight
  this.camera.updateProjectionMatrix();
  this.renderer.setSize(window.innerWidth,window.innerHeight)
}
// 初始化控制器
App.prototype.iniTrackCon =function (camera){
  this.trackballControls = new THREE.TrackballControls(camera)
  this.trackballControls.staticMoving = true
  this.trackballControls.rotateSpeed = 0.5
  this.trackballControls.zoomSpeed = 0.5
  this.trackballControls.panSpeed = 0.5
}
// 右侧导航控制控制器的使用与停止
App.prototype.controlsByToggle = function(){
  var self = this
  if(this.$rightTool){
    this.$rightTool.find(".toggle-btn").click(function (){
      if(self.$rightTool.hasClass("open")) {
        self.$rightTool.removeClass("open");
        self.$rightTool.css("right", - self.$rightTool.width());
        self.trackballControls.enabled = true;
      } else {
        self.trackballControls.enabled = false;
        self.$rightTool.addClass("open");
        self.$rightTool.css("right","0");
      }
    });
  }
}
// 初始化所有Loder的加载器
App.prototype.manageLoder = function (){
  var self = this
  this.manager.loaded = setInterval(function(){
    if(self.isLoaded) {
      $(".loading-div").addClass("loaded");
      setTimeout(()=>{
        $(".loading-div").remove();
      }, 1000);
      clearInterval(self.manager.loaded);
    }
  }, 500);

}
const app = new App($(".right-tool"))
window.addEventListener('resize',function (){
  // 注意不能直接将app.windowResize直接作为事件监听器的回调(this隐式丢失)
  app.windowResize()
},false)
var scene = app.scene
var camera = app.camera
var renderer = app.renderer
var light = app.light
var trackballControls = app.trackballControls
var clock = app.clock
var delta = app.delta
var manager = app.manager
var container = app.container
