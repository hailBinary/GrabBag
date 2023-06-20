//mouse clicks
var click_count = 0;

function mousePressed() {
    var grid_no = floor(mouseX / w) + floor(mouseY / h) * cols;
    grid[grid_no].check();
    click_count++;
  }
  
function windowResized(){
    createCanvas(windowWidth, windowHeight);
    w = windowWidth / rows;
    h = windowHeight / cols;
  }
  
function keyPressed(){
  if (keyCode === ENTER && click_count >=7){
    for (i=0; i<grid.length; i++){
      grid[i].check()
    }
  }
}
  