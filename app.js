let boxes = document.querySelectorAll(".box")
let turnO=true;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        box.innerText="O"
        console.log("box is clicked");
        if(turnO===true){
         box.innerText="O"
         turnO=false;
         }
         else {
         box.innerText="X"
         turnO=true;
        }

    })
})

