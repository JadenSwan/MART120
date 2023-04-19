var x = 20;
var y = 20;
var yobst1 = 150;
var xobst1 = 150;
var xobst2 = 200;
var yobst2 = 350;
var movementObsx;
var movementObsy;


function setup() {
  createCanvas(600, 600);
  movementObsx = floor(random(4,10));
  movementObsy = floor(random(2,6));
}

function draw() {
  background(0,0,0);
  
  generateBorders();
  
  //player
  playerandwin();
    
  //exit
  exit();
  
  //obstacle1
  obstacle1();
  obstacle1Move();
  
  //obstacle2
  obstacle2();
  obstacle2Move();
  
  //obstacle3
  newobstacle();
}
function mouseClicked() 
    {  
      mousex = mouseX;
      mousey = mouseY;
    }
function playerandwin()
{
    fill(0,204,0);
  circle(x,y,20);
  if(keyIsDown(68))
     {
       x+=5
     }
  if(keyIsDown(65))
    {
      x-=5
    }

  if (keyIsDown(87))
    {
      y-=5
    }
  if (keyIsDown(83))
    {
      y+=5
    }
   if(x>=300 && y>=580)
    {
      textSize(48)
      text('You Win!',300,300)
      console.log("winthing");
    }
    
  }
function exit()
{
  fill(255,128,0);
  rect(300,580,100,50);
}
function newobstacle()
{
  if (mouseClicked)
    fill(102,204,0);
    rect(0,350,200,20);
}
function obstacle1()
{
  fill(51,153,255);
  rect(xobst1,yobst1,200,50);
}
function obstacle1Move()
{
   if (xobst1 >=400 )
    {
     xobst1 = 10
    }
  else if (xobst1 <= 400 || xobst1 >=0)
    {
      xobst1+=3
    }
  if (yobst1 >= 550)
    {
      yobst1 = 0;
    }
  else if (yobst1 <=550 || yobst1 >=0)
    {
      yobst1+=4
    }
}
function obstacle2()
{
  fill(76,0,153);
  rect(xobst2,yobst2,40,90); 
}
function obstacle2Move()
{
  if(xobst2 <= 550)
    {
      xobst2+=floor(random(-1,5));
    }
  else if(xobst2 > 550)
    {
      xobst2 = 20;
    }
  
  if(yobst2 >= 0 && yobst2 <= 200)
    {
      yobst2+=floor(random(-1,3));
    }
  else if (yobst2 >=200 && yobst2 <= 510)
    {
      yobst2+=3
    }
  else if (yobst2 >= 510)
    {
      yobst2 = 20;
    }
}
function generateBorders()
{
  fill(255,20,0)
  rect(0,0,10,600)
  rect(0,0,600,10)
  rect(0,600,600,10)
  rect(590,0,10,600)
}
