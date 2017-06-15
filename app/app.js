import {app} from './components/create3D.js';
import {sphere} from './components/sphere.js';
import {plane} from './components/plane.js';
import {box} from './components/box.js';
import {
    ambientLight,
    pointLight
} from './components/light.js';
sphere.addTo(app);
plane.addTo(app);
ambientLight.addTo(app);
pointLight.addTo(app);
box.addTo(app)
app.start();

