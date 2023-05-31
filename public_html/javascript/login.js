var loginHasNoErrors = true;

/* Each input element that needs to be validated needs its own validation function */
function isLoginNameValid()
{
    /*var pattern = new RegExp("[^a-zA-Z]");
    if(pattern.test(document.getElementById("username").value))
    {
        document.getElementById("usernameErrorMessage").innerHTML = "<br>Name only can contain character";
        return false;
    } */   // test to see if the name is not empty

    if (document.getElementById("username").value.length === 0)
    {
        document.getElementById("usernameErrorMessage").innerHTML = "<br>Please enter a name";
        return false;
    }

    if((localStorage.getItem("username") !== document.getElementById("username").value))
    {
        document.getElementById("usernameErrorMessage").innerHTML = "<br>Your username is not correct";
        return false;
    }
    
    else
    {
        document.getElementById("usernameErrorMessage").innerHTML = "";
        return true;
    }
}

function isLoginEmailValid()
{
    
   /*var patternEmail = new RegExp("[^@]+@[^@]+\.[a-zA-Z]{2,6}");
   if (!patternEmail.test(document.getElementById("email").value))
    {
        document.getElementById("emailErrorMessage").innerHTML = "<br>Your email is not valid, must contain'@... /.com / ...'";
        return false;
    }*/
   
    if (document.getElementById("email").value.length === 0)
    {
        document.getElementById("emailErrorMessage").innerHTML = "<br>Please enter an email";
        return false;
    }
    
    if((localStorage.getItem("email") !== document.getElementById("email").value))
    {
        document.getElementById("emailErrorMessage").innerHTML = "<br>Your email is not correct";
        return false;
    }
    
    
    // test to see if the address is not empty
   else
    {
        document.getElementById("emailErrorMessage").innerHTML = "";
        return true;
    }
}

function isLoginPasswordValid()
{
   

   /*var patternPassword = new RegExp ("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{10}");
   
    if(!patternPassword.test(document.getElementById("password").value))
    {
        document.getElementById("passwordErrorMessage").innerHTML = "<br>Password must contain at least 10 digits which also include an uppercase letter, a lowecase letter and number";
        return false;
    }*/
    if (document.getElementById("password").value.length === 0)
    {
        document.getElementById("passwordErrorMessage").innerHTML = "<br>Please enter password";
        return false;
    }
    if((localStorage.getItem("password") !== document.getElementById("password").value))
    {
        document.getElementById("passwordErrorMessage").innerHTML = "<br>Your password is not correct";
        return false;
    }
   
    else
    {
        document.getElementById("passwordErrorMessage").innerHTML = "";
        return true;
    }
}


/************************************************************************************/



function isLoginValid()
{
 
    /* Validate all of the input elements */
    var nameIsValid = isLoginNameValid();
    var emailIsValid = isLoginEmailValid();
    var passwordIsValid = isLoginPasswordValid();
    

    /* If ALL of the element validation functions pass, then the form is valid */
    if (nameIsValid && emailIsValid && passwordIsValid)
    {
        if
        ((localStorage.getItem("username") === document.getElementById("username").value) &&
        (localStorage.getItem("email") === document.getElementById("email").value) &&
        (localStorage.getItem("password") === document.getElementById("password").value))
        {
            var name = localStorage.getItem("username");
     
             
            alert("Welcome back!! "+ name);
            return true;
        }
        
   }
   

   
   return false;
  
   
    
}