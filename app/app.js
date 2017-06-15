import {app} from './components/create3D.js';
import {sphere} from './components/sphere.js';
import {plane} from './components/plane.js';
import {box} from './components/box.js';
import {teapot} from './components/model.js';
import {
    ambientLight,
    directionLight
} from './components/light.js';
// sphere.addTo(app);
// plane.addTo(app);
ambientLight.addTo(app);
directionLight.addTo(app);
// box.addTo(app)
teapot.addTo(app)
app.start();

