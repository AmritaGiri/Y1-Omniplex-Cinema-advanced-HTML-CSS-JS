function getDateAndUsername()
{
  //Learn from W3 school//
 var month = new Array();
 month[0] = "January";
 month[1] = "February";
 month[2] = "March";
 month[3] = "April";
 month[4] = "May";
 month[5] = "June";
 month[6] = "July";
 month[7] = "August";
 month[8] = "September";
 month[9] = "October";
 month[10] = "November";
 month[11] = "December";

 var day = new Array();
 day[0] = "Sunday";
 day[1] = "Monday";
 day[2] = "Tuesday";
 day[3] = "Wednesday";
 day[4] = "Thursday";
 day[5] = "Friday";
 day[6] = "Saturady";
  
 var d = new Date();
 var date = d.getDate();
 var m = month[d.getMonth()];
 var wd = day[d.getDay()];
 

 
  document.getElementById("frozen_info_date").innerHTML = date+ " " + m + " " + d.getFullYear()+" "+"("+wd+")"; 
  document.getElementById("knives_out_info_date").innerHTML = date+ " " + m + " " + d.getFullYear()+" "+"("+wd+")";
  document.getElementById("last_christmas_info_date").innerHTML = date+ " " + m + " " + d.getFullYear()+" "+"("+wd+")";
  document.getElementById("right_the_info_date").innerHTML = date+ " " + m + " " + d.getFullYear()+" "+"("+wd+")";
  document.getElementById("ordinary_love_info_date").innerHTML = date+ " " + m + " " + d.getFullYear()+" "+"("+wd+")";
  document.getElementById("motherless_brooklyn_info_date").innerHTML = date+ " " + m + " " + d.getFullYear()+" "+"("+wd+")";
  document.getElementById("elf_info_date").innerHTML = date+ " " + m + " " + d.getFullYear()+" "+"("+wd+")";
  document.getElementById("jumanji_info_date").innerHTML = date+ " " + m + " " + d.getFullYear()+" "+"("+wd+")";
  document.getElementById("bridges_info_date").innerHTML = date+ " " + m + " " + d.getFullYear()+" "+"("+wd+")";
  document.getElementById("black_christmas_info_date").innerHTML = date+ " " + m + " " + d.getFullYear()+" "+"("+wd+")";
  document.getElementById("charlie_angles_info_date").innerHTML = date+ " " + m + " " + d.getFullYear()+" "+"("+wd+")";
  document.getElementById("le_man_info_date").innerHTML = date+ " " + m + " " + d.getFullYear()+" "+"("+wd+")";
  document.getElementById("maleficent_info_date").innerHTML = date+ " " + m + " " + d.getFullYear()+" "+"("+wd+")";

  
  

   
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


 

