// hide fitur

const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password");

      pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwFields =>{
                if(pwFields.type === "password"){
                    pwFields.type = "text"

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                } else {
                    pwFields.type = "password"

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            })
        })
      })

//   ikon
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);


let form = id("form"),
    errorMsg = classes("error"),
    succesIcon = classes("succes-icon"),
    failureIcon = classes("failure-icon"),
    submit = id("submit")
    admin1 = id("admin1")
    admin2 = id("admin2")
    admin3 = id("admin3")
    eyeIcon = classes("showHidePw")

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        engine(username, 0, "Username Cannot Be Blank")
        engine(email, 1, "Email Cannot Be Blank")
        engine(password, 2, "Password Cannot Be Blank")
        engine(password1, 3, "Password Cannot Be Blank")
    });

    let engine = (id, serial, message) => {
        if(id.value.trim() === ''){
            errorMsg[serial].innerHTML = message;
            failureIcon[serial].style.opacity = "1"
            succesIcon[serial].style.opacity = "0"
            eyeIcon[0].style.opacity = "0"
        } else {
            errorMsg[serial].innerHTML = ""
            succesIcon[serial].style.opacity = "1"
            failureIcon[serial].style.opacity = "0"
            eyeIcon[0].style.opacity = "0"
        }
    }

const signUp = e => {
    let id = (id) => document.getElementById(id);

    let username = id('username').value,
        email = id('email').value,
        password = id('password').value;
        

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => 
        data.username.toLowerCase() == username.toLowerCase() && 
        data.email.toLowerCase() == email.toLowerCase()
    );
    
    if(!exist){
        formData.push({ username, email, password, password1 });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form');
        id('username').focus();
        alert("Account Created.\n\nPlease Sign In");
        location.href = "asset/index.html"
    }
    else{
        
    }
    dispData();
    e.preventDefault();
}

function signIn(e) {
    let username = document.getElementById('username').value, password = document.getElementById('password').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.username.toLowerCase() == username && data.password.toLowerCase() == password);
    if(!exist){
        document.querySelector('form').reset()
        alert("username or password wrong.\n\nplease login again");
    }
    else{
        location.href = "/welcome page/index.html";
    }
    e.preventDefault();
    
}

function home(){
    location.href = "https://tourwebsaya.000webhostapp.com/";
}


