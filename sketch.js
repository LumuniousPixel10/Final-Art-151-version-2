let angle = 0;
let diceRoll = 0;
let nums = [-440,0,440];
//let fr = 200;
//You can change the frame rate for this above, I'm unable to get higher frame rates due to my computer.
function setup() {
  //Reminder that this was originally 600, 600
  createCanvas(600, 600);
  angleMode(DEGREES);
  colorMode(HSB);
  noLoop();
}

function draw() {
  background(150);
  //Background Squares
  for(let columns = 0; columns < 100;columns++){
    for(let rows = 0; rows < 100; rows++){
      diceRoll=int(random(20));
      let mappedHue = map(diceRoll,0,25,0,360);
      let squareColor;
      for(let i = 4;i >= 0; i--){
        squareColor = color(mappedHue,10*(random(30)),20*random(30));
        fill(squareColor);
        rect(columns*6,rows*6,5,5);
      }
    }
  }
  //Corner Squares
  for(let columns = 0; columns < 8;columns++){
    for(let rows = 0; rows < 8; rows++){
      diceRoll=int(random(20));
      let mappedHue = map(diceRoll,0,25,0,360);
      let squareColor;
      for(let i = 4;i >= 0; i--){
        squareColor = color(mappedHue,10*(random(30)),20*random(30));
        fill(squareColor);
        rect(columns*20,rows*20, i*5, i*5)
      }
    }
  }
  
  translate(nums[2],nums[1]);
  for(let columns = 0; columns < 8;columns++){
    for(let rows = 0; rows < 8; rows++){
      diceRoll=int(random(20));
      let mappedHue = map(diceRoll,0,25,0,360);
      let squareColor;
      
      for(let i = 4;i >= 0; i--){
        squareColor = color(mappedHue,10*(random(30)),20*random(30));
        fill(squareColor);
        rect(columns*20,rows*20, i*5, i*5)
      }
    }
  }
  
  translate(nums[1],nums[2]);
  for(let columns = 0; columns < 8;columns++){
    for(let rows = 0; rows < 8; rows++){
      diceRoll=int(random(20));
      let mappedHue = map(diceRoll,0,25,0,360);
      let squareColor;
      
      for(let i = 4;i >= 0; i--){
        squareColor = color(mappedHue,10*(random(30)),20*random(30));
        fill(squareColor);
        rect(columns*20,rows*20, i*5, i*5)
      }
    }
  }
  translate(nums[0],nums[1]);
  for(let columns = 0; columns < 8;columns++){
    for(let rows = 0; rows < 8; rows++){
      diceRoll=int(random(20));
      let mappedHue = map(diceRoll,0,25,0,360);
      let squareColor;
      for(let i = 4;i >= 0; i--){
        squareColor = color(mappedHue,10*(random(30)),20*random(30));
        fill(squareColor);
        rect(columns*20,rows*20, i*5, i*5)
      }
    }
  }
  translate(nums[1],nums[0]);
  //Spinning Square
  translate(300,300);
  rotate(angle-1);
  line(0,0,300,-125);
  rotate(angle);
  rect(0,-125,150,150);
  angle = angle -1;
  //translate(mouseX - width/2, mouseY-height/2)
}