var x1 = 270;
var y1 = 290;
var x2 = 280;
var y2 = 310;
var x3 = 290;
var y3 = 290;

var xrect = 170;
var yrect = 160;
var yrect2 = 161;

var x = 20
var y = 70

var xJup = 25
var yJup = 150

var xast = 10
var yast = 10

var title = 18

var movement;
var movement2;
var movement3;
var movementplanet;
var movementJupiter;
var movementastx
var movementasty

function setup()
{
    createCanvas(500, 500);
    movement = floor(random()*10+1);
    movement2 = floor(random()*10+1);
    movement3 = .5
    movementplanet = floor(random(1,5));
  movementJupiter = floor(random(4,10));
  movementastx = floor(random()*10+1);
  movementasty = floor(random()*10+1);
}

function draw()
{
   
  //planet 2 (jupiter)
  strokeWeight(4)
  fill(255,166,63)
  circle (xJup,yJup,100)
  if(xJup >=500|| xJup <= 0)
    {
      movementJupiter *=-1
    }
  xJup += movementJupiter
  
  
  //asteroid
  strokeWeight(2)
  fill(120,120,120)
  circle(xast,yast, 20)
  if(xast >=500|| xast <= 0)
  {
    movementastx *=-1
  }
  xast += movementastx
  if(yast >= 500|| yast <= 0)
    {
      movementasty *=-1    
    }
  yast += movementasty
  //hair
  strokeWeight(5)
  fill(255,171,0)
  rect(150,150,100,200)
  
  // noggin
  strokeWeight(5)
  fill(243,212,149);
  circle(200,200,100);
  
  //eyes
  strokeWeight(10)
  point(180,200);
  point(220,200)
  
  //mouth
  strokeWeight(5)
  line(185,225,205,225)
  line(205,225,215,220)
  
  
  //body
  strokeWeight(5)
  fill(255,154,229);
  rect(150,270,100,200);
  
  //planet 1 (uranus)
  strokeWeight(3)
  fill(131,252,255)
  circle(x,y,50)
  if(x >= 500|| x<= 0)
    {
      movementplanet *=-1
    }
    x += movementplanet
  
  
          
  //sidehair
  fill(255,171,0)
  rect(140,yrect2,25,150)
  if(yrect2 >= 250 || yrect2 <= 80)
   {
     movement2*=-1;
   }
  yrect2 += movement2;
  rect(235,yrect,25,150)
  if(yrect >=250 || yrect <= 80)
   {
     movement*=-1;
   }
  yrect += movement;
  rect(170,140,60,30)
 
  
  //leftarm
  strokeWeight(5)
  fill(243,212,149);
  rect(100,280,40,120);
  //leftarmshirt
  fill(255,154,229);
  square(100,280,40);
  
  //rightarm
  fill(243,212,149);
  rect(260,280,40,120);
  //rightarmshirt
  fill(255,154,229);
  square(260,280,40);
  

  //patch
  fill(255,103,204)
  strokeWeight(2)
  triangle(x1,y1,x2,y2,x3,y3)
  
  
  
  //leftleg
  fill(59,37,121);
  rect(150,480,50,50);
  
  //rightleg
  fill(59,37,121);
  rect(200,480,50,50);
  
  
  //flower
  strokeWeight(1)
    fill(255,171,0);
  circle(200,335,30)
  
  //flowerpetals
  fill(0, 126, 167)
  circle(180,335,30)
  circle(220,335,30)
  circle(200,355,30)
  circle(200,315,30)
  
  
  
  
  textSize(title);
  fill(255,171,0);
  text("Jaden Swan, 2023",270,450);
  if(title >=40|| title <=8)
    {
      movement3 *=-1
    }
  title += movement3
}