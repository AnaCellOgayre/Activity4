function zodiac(){
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;

     if (month == 1 && day >= 20 && day <=31 || month == 2 && day <= 18 && day >=1){
          document.getElementById("photo").innerHTML="<img src='aquarius.png' width='200px' height='200px'>";
          document.getElementById("zodiacname").innerHTML="AQUARIUS";
        
      }
      
    else if (month == 2 && day >= 19 && day <= 29|| month == 3&& day <= 20 && day >=1 ){
          document.getElementById("photo").innerHTML="<img src='pisces.png' width='200px' height='200px'>";
          document.getElementById("zodiacname").innerHTML="PISCES";
      }
    else if (month == 3&& day >= 21 && day <=31 || month == 4 && day <= 19 && day >=1){
          document.getElementById("photo").innerHTML="<img src='aries.png' width='200px' height='200px'>";
          document.getElementById("zodiacname").innerHTML="ARIES";
       }
    else if (month == 4&& day >= 20 && day <=30 || month == 5 && day <= 20 && day >=1 ){
          document.getElementById("photo").innerHTML="<img src='taurus.png' width='200px' height='200px'>";
          document.getElementById("zodiacname").innerHTML="TAURUS";
        }
      
    else if (month == 5&& day >= 21 && day <=31 || month == 6 && day <= 20 && day >=1){
          document.getElementById("photo").innerHTML="<img src='gemini.png' width='200px' height='200px'>";
          document.getElementById("zodiacname").innerHTML="GEMINI";
    
        }
    else if (month == 6 && day >= 21 && day <=30 || month == 7 && day <= 22 && day >=1){
          document.getElementById("photo").innerHTML="<img src='cancer.png' width='200px' height='200px'>";
          document.getElementById("zodiacname").innerHTML="CANCER";
     
         }
    else if (month == 7&& day >= 23 && day <=31 || month == 8 && day <= 22 && day >=1){
          document.getElementById("photo").innerHTML="<img src='leo.png' width='200px' height='200px'>";
          document.getElementById("zodiacname").innerHTML="LEO";
  
      }

    else if (month == 8&& day >= 23 && day <=31 || month == 9 && day <= 22 && day >=1){
          document.getElementById("photo").innerHTML="<img src='virgo.png' width='200px' height='200px'>";
          document.getElementById("zodiacname").innerHTML="VIRGO";

    }

    else if (month == 9&& day >= 23 && day <=30 || month == 10 && day <= 22 && day >=1){
          document.getElementById("photo").innerHTML="<img src='libra.png' width='200px' height='200px'>";
          document.getElementById("zodiacname").innerHTML="LIBRA";

    }
    else if (month == 10&& day >= 23 && day <=31 || month == 11 && day <= 21 && day >=1){
          document.getElementById("photo").innerHTML="<img src='scorpio.png' width='200px' height='200px'>";
          document.getElementById("zodiacname").innerHTML="SCORPIO";

    }
    else if (month == 11 && day >= 22 && day <=30 || month == 12 && day <= 21 && day >=1){
          document.getElementById("photo").innerHTML="<img src='sagittarius.png' width='200px' height='200px'>";
          document.getElementById("zodiacname").innerHTML="SAGITTARIUS";

    }
    else if (month == 12 && day >= 22 && day <=31 || month == 1 && day <= 19 && day >=1){
          document.getElementById("photo").innerHTML="<img src='capricorn.png' width='200px' height='200px'>";
          document.getElementById("zodiacname").innerHTML="CAPRICORN";

    }

    else{
          alert("Invalid input");
        }


}