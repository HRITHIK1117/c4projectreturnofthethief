var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var jewelthief = createSprite(200, 376,13,13);
var laser = createSprite(51, 51,100,6);
var laser1 = createSprite(200, 248,100,6);
var  laser2= createSprite(299, 200,200,6);
var laser3 = createSprite(100, 200,200,6);
var laser4 = createSprite(200, 148,100,6);
var laser5 = createSprite(200, 350,100,6);



laser.shapeColor="red"
laser1.shapeColor="red"
laser2.shapeColor="red"
laser3.shapeColor="red"
laser4.shapeColor="red"
laser5.shapeColor="red"

laser.velocityX=3
laser.velocityY=0

laser1.velocityX=4
laser1.velocityY=0

laser2.velocityX=0
laser2.velocityY=5

laser3.velocityX=0
laser3.velocityY=4

laser4.velocityX=5
laser4.velocityY=0

laser5.velocityX=3
laser5.velocityY=0



function draw() {
 background("blue")
  createEdgeSprites();
   laser.bounceOff(edges);
   laser1.bounceOff(edges)
   laser2.bounceOff(edges)
   laser3.bounceOff(edges)
   laser4.bounceOff(edges)
   laser5.bounceOff(edges)
   jewelthief.bounceOff(edges)
  
  shape(390,0,380,10,390,20,400,10);
 if (keyIsDown(RIGHT_ARROW)) {
    jewelthief.velocityX=6;
    jewelthief.velocityY=0;
    }
   if (keyIsDown(LEFT_ARROW)) {
     jewelthief.velocityX=-6;
     jewelthief.velocityY=0;
     }
   if (keyIsDown(UP_ARROW)) {
     jewelthief.velocityX=0;
     jewelthief.velocityY=-6;
     }
   if (keyIsDown(DOWN_ARROW)) {
     jewelthief.velocityX=0;
     jewelthief.velocityY=6;
     }
     

     if (laser1.isTouching(jewelthief)||laser2.isTouching(jewelthief)||laser.isTouching(jewelthief)||laser3.isTouching(jewelthief)||laser4.isTouching(jewelthief)||laser5.isTouching(jewelthief)) {
       
       stroke(0);
       fill(0);
       textSize(25);
       text("The thief is caught",120,200);
       laser1.setVelocity(0,0);
       laser2.setVelocity(0,0);
       jewelthief.setVelocity(0,0);
       jewelthief.setVelocity(0,0);
       laser.setVelocity(0,0);
       laser3.setVelocity(0,0);
       laser4.setVelocity(0,0);
       laser5.setVelocity(0,0);
       
       }
      
        

              
  
drawSprites();
}























// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
