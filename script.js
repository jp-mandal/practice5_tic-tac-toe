let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")

let turno=true;

const win_pattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turno){
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

let checkWinner=()=>{
    for(let pattern of win_pattern){
        /*
       console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        */
       let pos1=boxes[pattern[0]].innerText;
       let pos2=boxes[pattern[1]].innerText;
       let pos3=boxes[pattern[2]].innerText;

       if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            console.log("winner!");
            showWinner(pos1);
        }
       }
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congralutions, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    for(let box of boxes){
        box.disabled=true;
    }
}

const resetGame=()=>{
    turno=true;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        msgContainer.classList.add("hide");
    }
}

newGameBtn.addEventListener("click",()=>{
    resetGame();
})

resetBtn.addEventListener("click",resetGame);

