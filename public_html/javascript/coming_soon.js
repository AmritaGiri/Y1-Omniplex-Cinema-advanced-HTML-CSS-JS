
function getUsername()
{
        if(typeof(Storage) !== "undefined")
      {
          var greet = "Welcome!";
          var changeGreetFont = greet.fontcolor("white");
          
          var name = localStorage.getItem("username");
          var changeFontSize =  name.fontcolor("white");
          
          document.getElementById("register").innerHTML = changeGreetFont;
          document.getElementById("register").style.textAlign="right";
          document.getElementById("register").style.fontSize="230%";
          document.getElementById("register").style.borderRight="none";
          
          document.getElementById("login").innerHTML =changeFontSize;
          document.getElementById("login").style.textAlign="left";
          document.getElementById("login").style.fontSize="230%";
          
         
      }
}

