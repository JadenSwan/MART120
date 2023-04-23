var x = 20;
var y = 20;

var myXs = [];
var myYs = [];
var obstLength = [];
var obstWidth = [];
var shapeXSpeeds = [];
var shapeYSpeeds = [];

var mouseShapeX;
var mouseShapeY;

function setup() {
  createCanvas(600, 600);
  
   for(var i = 0; i < 5; i++)
    {
        myXs[i] = random(50,500);
        myYs[i] = random(50,500);
        obstLength[i] = random(40,90);
        obstWidth[i] = random(40,90);
        shapeXSpeeds[i] = Math.floor(Math.random() *             (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);  
    }
  
    fill(102,204,0);
    rect(mouseShapeX,mouseShapeY,200,20);
}
function draw() {
  background(0,0,0);
  
  generateBorders();
  
  //player
  playerandwin();
    
  //exit
  exit();
  
  //obstacles
  for (var i = 0; i < myXs.length; i++) {
    rect(myXs[i], myYs[i], obstLength[i], obstWidth[i]);
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);

  //obstacle movement
  myXs[i] += shapeXSpeeds[i];
  myYs[i] += shapeYSpeeds[i];
  if (myXs[i] > 600) {
      myXs[i] = 40;
        }
  if (myXs[i] < 0) {
      myXs[i] = 600;
        }
  if (myYs[i] > 600) {
      myYs[i] = 40;
        }
  if (myYs[i] < 0) {
     myYs[i] = 600;
    
    //onclick obstacle
    fill(102,204,0);
    rect(mouseShapeX,mouseShapeY,200,20);
}
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
  
function mouseClicked() 
    {  
      mouseShapeX = mouseX;
      mouseShapeY = mouseY;
    }
  
function exit()
{
  fill(255,128,0);
  rect(300,580,100,50);
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

function generateBorders()
{
  fill(255,20,0);
  rect(0,0,10,600);
  rect(0,0,600,10);
  rect(0,600,600,10);
  rect(590,0,10,600)
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
}