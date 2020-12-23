var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var score=0;
var gameState="play";
var divisionHeight=300;
var score =0;
var count = 0;
var particle;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);




   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  if(gameState=="end"){
    text("GAME OVER",150,250);
  }
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
    
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //    score++;
  //  }
 
  if(particle!=null){
    //for (var j = 0; j < particles.length; j++) {
     
      particle.display();
  
      if(particle.body.position.y>760)
{
  
        if(particle.body.position.x<300){
          score=score+500;
          particle=null;
          if(count>=5){
            gameState="end";
          }
        }
        
        else if(particle.body.position.x>301 &&particle.body.position.x<600){
          score=score+100;
          particle=null;
          if(count>=5){
            gameState="end";
          }
        }
       else if(particle.body.position.x>601 && particle.body.position.x<900){
          score=score+200;
          particle=null;
          if(count>=5){
            gameState="end";
          }
        }
      }
    }
      
    
    }
   


function mousePressed(){
  if(gameState!=="end"){
    
    count++;
    //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  particle=new Particle(mouseX,10,10,10);
  }
}