// Rover Object Goes Here
// ======================
const rover = {
  
    direction : "N",
    x : 0,
    y : 0,
    travelLog : [{x:0,y:0}]
  };
  
  //console.log("Updated rover:", rover);
   //Updated rover: 
  // { 
  //    direction : "W",
  //}
  
  
  // ======================
  function turnLeft(rover){
    
    switch(rover.direction) {
           
           case "N":    
           rover.direction = "W";
           break;
           case "W":    
           rover.direction = "S";
           break;
           case "S":    
           rover.direction = "E";
           break;
           case "E":    
           rover.direction = "N";
           break;
           
           }
    
    console.log(rover.direction);
    
    console.log("turnLeft was called!");
  }
  
  function turnRight(rover){
    
    switch(rover.direction) {
           
           case "N":    
           rover.direction = "E";
           break;
           case "E":    
           rover.direction = "S";
           break;
           case "S":    
           rover.direction = "W";
           break;
           case "W":    
           rover.direction = "N";
           break;
           
           }
    
    console.log(rover.direction);
    
    console.log("turnRight was called!");
  }
  
  function moveForward(rover){
  
   switch(rover.direction){
          
     case "N": 
       if(rover.x > 0) {
         rover.x--;
      } else {
        console.log('sai meu anjo')
      }
       
       break;
     case "S":
       rover.x++;
       break;
     case "W":
       rover.y--;
       break;
     case "E":
       rover.y++;
       break;
          
          
          }
   // if(rover.y >= 0 && rover.y <= 10 || rover.x >= 0 && rover.x <= 10) { 
     // console.log(`Rover has position: x=${rover.x}, y=${rover.y}`);
        
       // let newPosition = {x: rover.x, y: rover.y};
        //rover.travelLog.push(newPosition);
    //} else {
      //console.log("You can't place rover outside of the board!");
    
    console.log("moveForward was called");
  }
  //turnLeft();
  //moveForward(rover);
  ////AINDA NÃO///////
  function command(rover, orders){
  
    for (let i = 0; i < orders.length; i++){
      let order = orders[i];
      switch(order){
        case "l": // left
          turnLeft(rover);
          break;
        case "r": // right
          turnRight(rover);
          break;  
        case "f": // up
          moveForward(rover);
          break; 
     //   case "S": // down
    //      moveXAxis(moveRover, order);
       //   break;
      }
    }
    //console.log(thePlayer.path);
  }
  command(rover, "ff");
  
  console.log(rover.x,rover.y,rover.direction);
  console.log(rover.travelLog)