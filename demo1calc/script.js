let compute="";

const buttons =document.querySelectorAll(".button");
const display=document.getElementById("display");
display.textContent="0"
//  document.getElementById("test7").onclick = function() {myFunction()};

buttons.forEach(button => {
    button.addEventListener("click", function() {
        myFunction(this);
    });
});


function myFunction(button){
    console.log('hello, i have executed');
    if(display.textContent==="0"){
        display.textContent=button.textContent;
        compute=button.textContent ;
    }
    else{
    compute+=button.textContent;
    display.textContent=compute;
}
}


const buttons2=document.querySelectorAll(".button2");

const buttondel=document.getElementById("del")

buttons2.forEach(button2 => {
    button2.addEventListener("click", function() {
        addminFunction(this);
    });
});
function addminFunction(button){
    console.log('executed addmin');
   
    compute+=button.textContent;
    display.textContent=compute;
}


buttondel.addEventListener("click", function() {
        delFunction();
    });
function delFunction(){
    console.log('executed del');
   
    compute=compute.slice(0,-1);
if (compute===""){
    display.textContent="0";
}
else{
    display.textContent=compute;
}

}











const clear=document.getElementById("clear")
  clear.addEventListener("click", function(){
    clearFunction();


 })

 function clearFunction(){
    compute="";
    display.textContent="0";
 }


 



 //equal sign

 
 const eql=document.getElementById("eql")
   eql.addEventListener("click",function(){
    eqlFunction();
   });

function eqlFunction() {
    try {
        compute = eval(compute).toString();
        
        if (compute === "Infinity" || compute === "-Infinity") {
            display.textContent = "you cant do that dumbass";
            compute = "";
        } else {
            display.textContent = compute;
        }
    } catch (error) {
        display.textContent = "you stupid lmao";
        compute = "";
    }   
}



const pooh=getElementById("buttons")
pooh.addEventListener("click", function() {
        soundFunction();
    });

soundFunction



