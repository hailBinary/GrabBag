//1. Which of these cities is a national capital?
//2. Which of these movies is directed by Christopher Nolan?
//3. Which of these people are famous atheletes?
//4. Which of these are a japanese car manufacturing company?
//5. Which of these are works of Laxmi Prasad Devkota?
let question_select = 5;

//game variables
var w;
var h;
var rows = 4;
var cols = 4;

var grid = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = windowWidth / rows;
  h = windowHeight / cols;
  for (var y = 0; y < rows; y++) {
    for (var x = 0; x < cols; x++) {
      var cell = new Cell(x, y, question[question_select - 1]);
      grid.push(cell);
    }
  }
}

function draw() {
  for (var i = 0; i < grid.length; i++) {
    grid[i].show();
  }
}

