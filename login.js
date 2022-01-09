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