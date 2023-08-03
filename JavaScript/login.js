
function generateToken() {
    const tokenLength = 16;
    const tokenChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < tokenLength; i++) {
      token += tokenChars.charAt(Math.floor(Math.random() * tokenChars.length));
    }
    localStorage.setItem("token", JSON.stringify(token));
    console.log(token);
    return token;
    
    
    
  }
  
  var toggle_login = document.getElementById("toggle_login")
var toggle_logout = document.getElementById("toggle_logout")
    function LoginAlert() {
       const email = localStorage.getItem('email');
        console.log(email);
        alert("Welcome to MerodiRamen " + email);
    }

    //function will start when the page is loaded
    window.onload = function () {
        validationToken()
  };

  window.onload = function () {
  const hasShownLoginPopup = localStorage.getItem('hasShownLoginPopup');

  if (!hasShownLoginPopup) {
      openLoginPopup();
    } 
 
};

function logout_login(){

    if(localStorage.getItem('token') !==null){
        console.log('logging out');
        logOut();
        

    } else{
        console.log('logging in');
        window.location.href = "./login.html";
    }

}

//function will check if the token is present or not present in the localStorage

setInterval(function() {

    if (localStorage.getItem('token') !==null) {
            console.log('token found');
    }else {
        console.log('token not found')
        window.location.href = "./login.html";
    }

},10000);

function validationToken() {
        
        if (localStorage.getItem('token') !==null) {
            console.log('token found');
        
    }else {
        

        console.log('token not found')
        window.location.href = "./login.html";
    }
    }

//fucntion clears the local storage when logging out
function logOut(){
        localStorage.clear();
        validationToken();
        toggle_login.style.display = 'block';
    }
    
    function openLoginPopup() {
        const backdrop = document.getElementById('backdrop');
        const loginPopup = document.getElementById('loginPopup');
        backdrop.style.display = 'block';
        loginPopup.style.display = 'block';
        toggle_logout.style.display = 'block';
}

function closeLoginPopup() {
    const backdrop = document.getElementById('backdrop');
    const loginPopup = document.getElementById('loginPopup');
    backdrop.style.display = 'none';
    loginPopup.style.display = 'none';
    localStorage.setItem('hasShownLoginPopup', 'true');
  }

//fucntion is used to create a 16 character token
function generateToken() {

    const tokenLength = 16;
    const tokenChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < tokenLength; i++) {
      token += tokenChars.charAt(Math.floor(Math.random() * tokenChars.length));
    }
    localStorage.setItem("token", token);
    console.log("this is the token : " + token);
    LoginAlert();
    validationToken();
    
    return token;
  }
