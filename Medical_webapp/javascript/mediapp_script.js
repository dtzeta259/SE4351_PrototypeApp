function validate(){
    var username=document.getElementById("username").validate;
    var password=document.getElementById("password").nodeValue;
    if(username=="admin" && password=="user"){

        window.location.href="/mainpage_medapp.html";
        return false;
    }
    else{
        alert("Login Failure!");
    }
}