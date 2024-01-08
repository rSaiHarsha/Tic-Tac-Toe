
let player = "X";
let winner_O  =(["O","O","O"].toString()) ;
let winner_x = (["X","X","X"].toString())

var arr  = [document.querySelectorAll(".top"), document.querySelectorAll(".center"),document.querySelectorAll(".bottom")]; 
var currentState = [["0","0","0"],["0","0","0"],["0","0","0"]];

// storing value based on the click 
for(var i = 0; i < 3; i++) {
    for(var j = 0;j < 3; j++) {
        
        let square = arr[i][j];
    
        const row = i;
        const col = j;
        
        square.addEventListener("click",function (){
            
            square.classList.add("square-pressed");         
                     
            playerClickResponse(square,row,col); 
           
            // switchig between player 1 and 2 after one player makes a move 
            
            
            let winner = checkWinner();   
            
            setTimeout(function () {    
            $(".square").removeClass("square-pressed");
             if(winner !== undefined){
                clearBoard();
                alert(winner);
                winner = undefined;
            }
            },100);
          
           
        });

    }
}



function switchPlayer(value) {
    if(value == "X") {
        player = "O";  
    }
    else {
        player = "X"; 
    }
}

function playerClickResponse(box,i,j) {   
    // only adds the value if the value in the square is not set 
    if(currentState[i][j] === "0"){
        currentState[i][j] = player;
        box.innerText = player;
        // Switch player
        switchPlayer(player);
    }
}


function clearBoard(){
    for(var i = 0; i < 3; i++) {
        for(var j = 0;j < 3; j++) {
            let square = arr[i][j];
            square.innerText = " "; 
            currentState[i][j] ="0";
        }
    }
}

function checkWinner(){
    // check ing for similar rows 
    for(let i = 0 ; i < 3 ;i ++){
        if(currentState[i].toString() === winner_O){
            return "player 2 ";
        } else if(currentState[i].toString() === winner_x){
            return "player 1" ;
        }
    }



    // checking for diagnol 
    let diagnol_arr = new Array(3);
    let reverse_diagnol_arr = new Array(3);
    for(var i = 0 ; i < 3;i++) {
        diagnol_arr[i] = currentState[i][i];
        reverse_diagnol_arr[i] = currentState[2-i][i];
    }
    if(diagnol_arr.toString() === winner_x || reverse_diagnol_arr.toString()=== winner_x) {
        return "player 1";
    }
    else if(diagnol_arr.toString()=== winner_O || reverse_diagnol_arr.toString() === winner_O){
        return "player 2 "
    }

    // checking columns 

    let cols_of_board = new Array(3);
   for(var i = 0 ; i < 3; i++) {
       for(var j = 0 ; j<3 ; j++) {
         cols_of_board[j] = currentState[j][i];
       } 
       if(cols_of_board.toString() === winner_x){
        return "player 1";
       }
       else if(cols_of_board.toString()=== winner_O){
        return "player 2 ";
       }
   }

       // checks for Ties
       var boxesFilled = 0; 
       for(var i = 0;i<3;i++){
           for(var j = 0 ; j< 3;j++) {
               if(currentState[i][j] !== "0"){
                   boxesFilled++;
               }
           }
       } 
   
       if(boxesFilled=== 9){
           alert("Tie, No one wins"); 
       }
       boxesFilled = 0;
   
   cols_of_board = []; 
   diagnol_arr = [];
   reverse_diagnol_arr = [];


}



