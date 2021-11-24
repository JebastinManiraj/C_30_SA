const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;

var bg_img;
var food;
var rabbit,bunny;
var button;

function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbit = loadImage('Rabbit-01.png');
}

function setup() 
{
  createCanvas(500,600);
  frameRate(80);
  engine = Engine.create()
  world = engine.world;
  ground = new Ground(200,600,600,20);

  bunny = createSprite(200,550,20,20);
  bunny.addImage(rabbit);
  bunny.scale = 0.2

  button = createImg('cut_button.png');
  button.size(50,50);
  button.position(220,40);
  button.mouseClicked(drop);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);

  image(bg_img,width/2,height/2,490,600);

  image(food,fruit.position.x,fruit.position.y,70,70);
  rope.show();
  Engine.update(engine);
  ground.show();

 
   drawSprites();
}

function drop(){
  rope.break();
  fruit_con.detach();
  fruit_con = null;
  
}