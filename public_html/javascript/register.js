var registerHasNoErrors = true;

/* Each input element that needs to be validated needs its own validation function */
function isNameValid()
{
    var pattern = new RegExp("[^a-zA-Z]");
    if(pattern.test(document.getElementById("username").value))
    {
        document.getElementById("usernameErrorMessage").innerHTML = "Name only can contain character";
        return false;
    }   

    if (document.getElementById("username").value.length === 0)
    {
        document.getElementById("usernameErrorMessage").innerHTML = "<br>Please enter a name";
        return false;
    }

    else if(pattern.test(document.getElementById("username").value .length < 5))
    {
        document.getElementById("usernameErrorMessage").innerHTML = "<br>Must enter atleast 5 characters";
        return false;
    }
    else
    {
        document.getElementById("usernameErrorMessage").innerHTML = "";
        return true;
    }
}

function isEmailValid()
{
    
    if (document.getElementById("email").value.length === 0)
    {
        document.getElementById("emailErrorMessage").innerHTML = "<br>Please enter an email";
        return false;
    }
  
   var patternEmail = new RegExp("[^@]+@[^@]+\\.[a-zA-Z]{2,6}");
   if (!patternEmail.test(document.getElementById("email").value))
    {
        document.getElementById("emailErrorMessage").innerHTML = "<br>Your email is not valid, must contain'@... /.com / ...'";
        return false;
    }
    
    if (document.getElementById("email").value.length === 0)
    {
        document.getElementById("emailErrorMessage").innerHTML = "<br>Please enter an email";
        return false;
    }
   
    
    else
    {
        document.getElementById("emailErrorMessage").innerHTML = "";
        return true;
    }
}

function isPasswordValid()
{
    

    if (document.getElementById("password").value.length === 0)
    {
        document.getElementById("passwordErrorMessage").innerHTML = "<br>Please enter password";
        return false;
    }   
    
   var patternPassword = new RegExp ("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{10}");
   
    if(!patternPassword.test(document.getElementById("password").value))
    {
        document.getElementById("passwordErrorMessage").innerHTML = "<br>Password must contain at least 10 digits [Include an uppercase letter, a lowecase letter and number]";
        return false;
    }
   
    else
    {
        document.getElementById("passwordErrorMessage").innerHTML = "";
        return true;
    }
}

function isConfirm_PasswordRight()
{
    
   
    if (document.getElementById("confirm_password").value.length === 0)
    {
        document.getElementById("confirm_passwordErrorMessage").innerHTML = "<br>Please enter the space in Confirm Password";
      
        return false;
    }
    
    else  if((document.getElementById("confirm_password").value) !== document.getElementById("password").value )
    {
        document.getElementById("confirm_passwordErrorMessage").innerHTML = "<br>Confirm Password is not same with the Password";
   
      return false;
    }
    else
    {
        document.getElementById("confirm_passwordErrorMessage").innerHTML = "";
 
       return true;
    }
}
/************************************************************************************/

function isRegisterValid()
{
 
    /* Validate all of the input elements */
    var nameIsValid = isNameValid();
    var emailIsValid = isEmailValid();
    var passwordIsValid = isPasswordValid();
    var confirm_passwordIsRight = isConfirm_PasswordRight();
    var register = false;

    
    if (nameIsValid && emailIsValid && passwordIsValid && confirm_passwordIsRight )
    {
      
       
       localStorage.setItem("username", document.getElementById("username").value);
       localStorage.setItem("email", document.getElementById("email").value);
       localStorage.setItem("password", document.getElementById("password").value);
       
       var name = document.getElementById("username").value;
       
       alert("Welcome "+ name);
       
       
       return true;
    }
    else 
    {
        
        return false;
    }
}





