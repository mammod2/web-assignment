

// function generateToken() {

//     const tokenLength = 16;
//     const tokenChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let token = '';
//     for (let i = 0; i < tokenLength; i++) {
//       token += tokenChars.charAt(Math.floor(Math.random() * tokenChars.length));
//     }
//     localStorage.setItem("token", token);
//     console.log("this is the token : " + token);
//     LoginAlert();
//     validationToken();
    
//     return token;
//     }
    
    
    
//     function LoginAlert() {
//            const email = localStorage.getItem('email');
//             console.log(email);
//             alert("Welcome to MerodiRamen " + email);
//         }
    
//     function logout_login(){
    
//     if(localStorage.getItem('token') !==null){
//         console.log('logging out');
//         logOut();
//         window.location.href = "./login.html";
    
//     } else{
//         console.log('logging in');
//         window.location.href = "./login.html";
        
//     }
    
//     }
//     function validationToken() {
            
//             if (localStorage.getItem('token') !==null) {
//                 console.log('token found');
//                 window.location.href = "./index.html";
            
            
    
//         }else {
            
    
//             console.log('token not found')
//             window.location.href = "./login.html";
//         }
//         }
//         function logOut(){
//             localStorage.clear();
//             validationToken();
//         }
//     </script>