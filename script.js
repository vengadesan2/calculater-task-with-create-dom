//getting element 
const  display = document.querySelector(".display");
const  buttons = document.querySelectorAll("button");
const specialcar = ["=","+","-","*","clrone"];
let output = "";

const calculate = (btnvalue)=>{
    if(btnvalue==="="&&output!==""){
        output=eval(output.replace("%","/100"))
    }
    else if(btnvalue==="CLR"){
        output=""
    }
    else if(btnvalue==="clrone"){
     output = output.toString().slice(0,1)
    }
    else{
        if(output===""&&specialcar.includes(btnvalue)){
        
        return
        }
        output += btnvalue
    }
display.value = output
}

buttons.forEach((button)=>{
button.addEventListener(("click"),(e)=> calculate(e.target.dataset.value))
})

//add event listerner keybord event 
document.addEventListener("keydown",(e)=>{
    const key = e.key;
      // Check if the pressed key corresponds to a button's data-value
    const button =Array.from(button).find((btn)=>btn.dataset.value===key) 
    if(button){
        button.click()
    }
})