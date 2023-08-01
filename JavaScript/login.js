
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
  