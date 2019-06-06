let THREE; let Ammo;
let scene; let camera; let renderer
let dynamicsWorld
let rigidBodies = []
let clock;
let transform;
let racket;
let p2p;

function initPhysics () {
  let config = new Ammo.btDefaultCollisionConfiguration()
  let dispather = new Ammo.btCollisionDispatcher(config)
  let broadphase = new Ammo.btDbvtBroadphase()
  let solver = new Ammo.btSequentialImpulseConstraintSolver()
  dynamicsWorld = new Ammo.btDiscreteDynamicsWorld(dispather, broadphase, solver, config)
  dynamicsWorld.setGravity(new Ammo.btVector3(0, -10, 0))
}

function updatePhysics(deltaTime) {
  if(p2p) {
    p2p.enableFeedback(true)
  }
  dynamicsWorld.stepSimulation(deltaTime, 10)
  // updateAction();
  // Update rigid bodies
  for ( let i = 0, il = rigidBodies.length; i < il; i ++ ) {

    let objThree = rigidBodies[ i ];
    let objPhys = objThree.userData.physicsBody;
    let ms = objPhys.getMotionState();
    if ( ms ) {
      ms.getWorldTransform( transform );
      let p = transform.getOrigin();
      let q = transform.getRotation();
      objThree.position.set( p.x(), p.y(), p.z() );
      objThree.quaternion.set( q.x(), q.y(), q.z(), q.w() );
    }
  }
}

function addRigidBody ({shape, mass = 0, localInertia = new Ammo.btVector3(0, 0, 0), bodyInfo, pos, quat}) {
  pos = pos || this.position
  quat = quat || this.quaternion
  shape.setMargin(0.01)
  let t = new Ammo.btTransform()
  t.setIdentity()
  t.setOrigin(new Ammo.btVector3(pos.x, pos.y, pos.z))
  t.setRotation(new Ammo.btQuaternion(quat.x, quat.y, quat.z, quat.w))
  let ms = new Ammo.btDefaultMotionState(t)
  shape.calculateLocalInertia(mass, localInertia)
  let rbInfo = new Ammo.btRigidBodyConstructionInfo(mass, ms, shape, localInertia);
  let body = new Ammo.btRigidBody(rbInfo);
  if(!this.userData.physicsBodys) {
    this.userData.physicsBodys = []
  }
  this.userData.physicsBody = body
  this.userData.physicsBodys.push(body)
  for(let i in bodyInfo) {
    body['set' + i.charAt(0).toUpperCase() + i.substr(1)](bodyInfo[i])
  }
  dynamicsWorld.addRigidBody(body)
  if(mass !== 0) // 重量为0不用动
  rigidBodies.push(this)
}

function createHouse(length, width, height) {
  let h = 0.1
  let ground = new THREE.Mesh(new THREE.BoxGeometry(length, height, width ), new THREE.MeshPhongMaterial({ color: 0x646568, side: THREE.DoubleSide }))
  ground.position.set(0, height / 2 - h, 0)
  ground.castShadow = false
  ground.receiveShadow = true
  let bodyInfo= {
    friction: 0.8,
    restitution: 0.77
  }
  let mass = 0
  let infos = [
    {
      shape: new Ammo.btBoxShape(new Ammo.btVector3(length / 2, h / 2, width / 2)),
      pos: new THREE.Vector3(0, 0, 0)
    },
    {
      shape: new Ammo.btBoxShape(new Ammo.btVector3(length / 2, h / 2, width / 2)),
      pos: new THREE.Vector3(0,height,0)
    },
    {
      shape: new Ammo.btBoxShape(new Ammo.btVector3(length / 2, height / 2, h / 2)),
      pos: new THREE.Vector3(0,height / 2,-width / 2)
    },
    {
      shape: new Ammo.btBoxShape(new Ammo.btVector3(length / 2, height / 2, h / 2)),
      pos: new THREE.Vector3(0,height / 2,width / 2)
    },
    {
      shape: new Ammo.btBoxShape(new Ammo.btVector3(h / 2, length / 2, width / 2)),
      pos: new THREE.Vector3(length / 2,height / 2,0)
    },
    {
      shape: new Ammo.btBoxShape(new Ammo.btVector3(h / 2, length / 2, width / 2)),
      pos: new THREE.Vector3(-length / 2,height / 2,0)

    }
  ]
  for( let i in infos) {
    ground.addRigidBody({
      pos:infos[i].pos,
      shape: infos[i].shape,
      mass,
      bodyInfo,
    })
  }
  scene.add(ground)
}

function createObjects() {
  createHouse(800, 600, 300)

  let pLight = new THREE.PointLight(0x808080, 1, 3000, 0.9)
  pLight.position.set(10, 200, 10)
  pLight.castShadow = true
  let p2 = pLight.clone()
  p2.position.set(-20, 180, -20)
  scene.add(pLight)
  scene.add(p2)

  let loader = new THREE.GLTFLoader()
  let tableHeight = 76.25
  loader.load(require('./assets/pingpong.gltf'), function (obj) {
    let table = obj.scene.children[0]
    table.position.y = tableHeight / 2
    table.addRigidBody({
      shape: new Ammo.btBoxShape(new Ammo.btVector3(274 / 2, tableHeight / 2, 152.5 / 2)),
      mass: 0,
      bodyInfo: {
        friction: 0.5,
        restitution: 0.77
      }
    })
    table.castShadow = true
    table.receiveShadow = true
    scene.add(table)
  }, function (xhr) {
    console.log(xhr)
  }, function (err) {
    console.error(err)
  })

  loader.load(require('./assets/racket.gltf'), function (obj) {
    racket = obj.scene.children[0]
    racket.position.y = (tableHeight + 200) / 2
    racket.addRigidBody({
      shape: new Ammo.btBoxShape(new Ammo.btVector3(1.6 / 2, 24.7 / 2, 15 / 2)),
      mass: 10,
      bodyInfo: {
        friction: 0.5,
        restitution: 0.9
      }
    })
    racket.castShadow = true
    racket.receiveShadow = true
    scene.add(racket)
  }, function (xhr) {
    console.log(xhr)
  }, function (err) {
    console.error(err)
  })

  const radius = 2;
  let ball = new THREE.Mesh(
    new THREE.SphereGeometry(radius,10,10),
    new THREE.MeshLambertMaterial({color: 0xffaa00})
  )
  ball.castShadow = true
  ball.receiveShadow = true
  ball.position.set(30, tableHeight + 50, 30)
  scene.add(ball)
  let ballShape = new Ammo.btSphereShape(radius)
  ball.addRigidBody({
    shape: ballShape,
    mass: 0.26,
    localInertia: new Ammo.btVector3(0, 0, 0),
    bodyInfo: {
      friction: 0.5,
      restitution: 1,
      rollingFriction: 1
    }
  })
}

function initWorld () {
  window.scene = scene = new THREE.Scene({ antialias: true })
  scene.background = new THREE.Color(0xbfd1e5)
  let light = new THREE.AmbientLight(0x303030)
  scene.add(light)

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 20000)
  camera.position.set(150, 100, 80)
  camera.lookAt(0, 76, 0)

  renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = true
  renderer.render(scene, camera)

  let controls = new THREE.OrbitControls(camera)
  controls.target.set(0, 2, 0)
  controls.update()

  document.getElementById('container').appendChild(renderer.domElement)
  window.addEventListener('keydown', function (e) {
    // 这里bullet示例源码里头移动物体是通过修改点对点约束做到移动的
    let bd = racket.userData.physicsBody
    let origin = bd.getWorldTransform().getOrigin();
    let pt = new THREE.Object3D()
    pt.position.set(origin.x(),origin.y() + 0.01,origin.z())
    pt.addRigidBody({shape: new Ammo.btBoxShape(new Ammo.btVector3(1,1,1))})
    switch (e.keyCode) {
      case 65: // a
        console.log(bd,dynamicsWorld, p2p)
        dynamicsWorld.removeConstraint(p2p)
        p2p = new Ammo.btPoint2PointConstraint( pt.userData.physicsBody, bd,  new Ammo.btVector3(origin.x(),origin.y() + 0.01,origin.z()), new Ammo.btVector3(origin.x(),origin.y(),origin.z()) );
        dynamicsWorld.addConstraint( p2p, true );

        break;
      case 83: // s

        break;
      case 68: // d

        break;
      case 87: // w

        break;
    }
  })
}

let stopFlag = false
function animate () {
  if(!stopFlag) {
    updatePhysics(clock.getDelta() * 1000)
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }
}

let flagArr = [false, false]

function index () {
  let delay = 100
  function init() {
    if(flagArr.every(value => value)) {
      initPhysics()
      initWorld()
      createObjects()
      animate()
    } else {
      setTimeout(init, delay)
    }
  }
  if(!scene) {
    setTimeout(init, delay)
  } else {
    document.getElementById('container').appendChild(renderer.domElement)
  }
}

let loaded = false
index.beforeEnter = function() {
  if(!loaded) {
    import('ammo.js').then(value => {
      Ammo = value
      flagArr[0] = true
      transform = new Ammo.btTransform() // 暂存物体位置数据
    })
    import('three').then(value => {
      window.THREE = THREE = value
      flagArr[1] = true
      require('three/examples/js/controls/OrbitControls')
      require('three/examples/js/loaders/GLTFLoader')
      THREE.Object3D.prototype.addRigidBody = addRigidBody;
      clock = new THREE.Clock()
    })
  }
  loaded = true
  if(stopFlag) {
    stopFlag = false
    animate()
  }
}

index.beforeLeave = function() {
  stopFlag = true
}

module.exports = index
