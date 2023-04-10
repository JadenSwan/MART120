var x = 0;
var y = 0;
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
  
  //player
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
    
  fill(0,51,102);
  rect(0,580,300,50);
  rect(400,580,400,50);
  
  //exit
  fill(255,128,0);
  rect(300,580,100,50);
  
  //obstacle1
  fill(51,153,255);
  rect(xobst1,yobst1,200,50);
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
  //obstacle2
  fill(76,0,153);
  rect(xobst2,yobst2,40,90);
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
  //obstacle3
  if (mouseClicked)
    fill(102,204,0)
    rect(0,350,200,20)
}
function mouseClicked() 
    {  
      mousex = mouseX;
      mousey = mouseY;
    }
