
// Signup work is here *********************

var userdata = JSON.parse(window.localStorage.getItem('userdata') || '[]');

function signup() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var password = document.getElementById('password').value;
  
  if ( email === "admin@gmail.com")  {
    alert("This Email Already Singup");
    
  }
  else{
  if (firstName === "" || lastName === "" || email === "" || phone === "" || password === "") {
    alert("Please insert the value in all fields");
  } else {
    var emailExist = false;
    for (var j = 0; j < userdata.length; j++) {
      console.log("hello")
      if ( email === userdata[j].email)  {
        alert("This Email Already Singup");
        emailExist = true;
        break;
      }
    }
    if (!emailExist) {
      var user = {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        password: password
      };
      userdata.push(user);
      window.localStorage.setItem("userdata", JSON.stringify(userdata));
      alert("Signup successful!");
      window.location.href = "login.html";
    }
  }
}
}

function logIn() {
    var lEmail = document.getElementById('lemail').value;
    var lPassword = document.getElementById('lpassword').value;
    var getData = window.localStorage.getItem("userdata");
    var getParseData = JSON.parse(getData);
    var login = false;
  
    if(lEmail === "admin@gmail.com" && lPassword === "789456"){
      window.location.href="deshBord.html"
    } else{
      for (var k = 0;k < getParseData.length; k++) {
        console.log(k)
        if (lEmail === getParseData[k].email && getParseData[k].password === lPassword) {
          login = true;
          window.localStorage.setItem("currentUser", JSON.stringify(getParseData[k]));
          window.location.href = "home.html"
          break;
        }
      }
      if (login === true) {
        console.log("Login successful");
      } else {
        alert("Your email or password doesn't match");
      }
    }
  }
  