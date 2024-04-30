
const drop=document.getElementById("dropleft");

function myfunction1(){
    if(drop.style.display==="none"){
    drop.style.display="block";}
    else{
     drop.style.display="none"; 
    }
}
const pass=document.getElementById('pass');

function checkPasswordLength(pass) {
    if (pass.length < 8) {
        console.log("Error: Password must be at least 8 characters long.");
    } else {
        console.log("Password is valid.");
    }
}


