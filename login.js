

function Email() {
    let email = document.getElementById("email").value;
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email == "" || email === "undefined") {
        document.getElementById("email").style.border = "2px solid red";
        document.getElementById("para3").style.display = "block";
        return false;
    }

    if (re.test(String(email).toLowerCase())) {
        document.getElementById("email").style.border = "2px solid green";
        document.getElementById("para3").style.display = "none";
        return true;
    }
    else {
        document.getElementById("email").style.border = "2px solid red";
        document.getElementById("para3").style.display = "block";
        return false;
    }


}

function Password() {
    let password = document.getElementById("password").value;

    const re = /^(?=.*\d)(?=.*[A-Z]).{8,14}$/
    if (password == '' || password === 'undefined') {
        document.getElementById("password").style.border = "2px solid red";
        document.getElementById("para5").style.display = "block";

        return false
    }
    if (re.test(password)) {
        document.getElementById("password").style.border = "2px solid  green";
        document.getElementById("para5").style.display = "none";
        return true;
    }
    else {
        document.getElementById("password").style.border = "2px solid red";
        document.getElementById("para5").style.display = "block";
        return false;
    }
}

// function saveData()
// {
// let email,password;
// email=document.getElementById("email").value;

// password=document.getElementById("password").value;

// let user_records=new Array();
// user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
// if(user_records.some((v)=>{return v.email==email && v.password==password}))
// {
//   alert("Login Pass");
//   let current_user=user_records.filter((v)=>{return v.email==email && v.password==password})[0]
//  localStorage.setItem('name',current_user.name);
//  localStorage.setItem('email',current_user.email);
//   window.location.href="blog1.html"
// }
// else
// {
//   alert('Login Fail');
// }

// }


