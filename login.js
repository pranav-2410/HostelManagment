function signIN(){
    window.location.href= "Signin.html";
}

function showP(){
    var x = document.getElementById("exampleInputPassword1");
    if(x.type=="password"){
        x.type="text";
    }
    else{
        x.type="password";
    }
}

function checkPass(){
    var pass1 = document.getElementById("inputPassword4").value;
    var pass2 = document.getElementById("confirmPassInput").value;
    if(pass1!=pass2){
        alert("Password not matched!");
    }
    
}