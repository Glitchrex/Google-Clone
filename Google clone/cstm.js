function lcky(){
  location.href="https://www.google.com/doodles"; 
}


function scrch(){
  var str=document.getElementById("srch").value;
  var m=str.localeCompare("Nelson Mandela");
  var n=str.localeCompare("Grassroots");
  var o=str.localeCompare("Volunteering");
  var p=str.localeCompare("Mohandas Karamchand Gandhi");
  var q=str.localeCompare("Julian Assange");
  if(m===0)
  location.href="https://en.wikipedia.org/wiki/Nelson_Mandela";
  else if(n===0)
  location.href="https://en.wikipedia.org/wiki/Grassroots";
  else if(o===0)
  location.href="https://en.wikipedia.org/wiki/Volunteering";
  else if(p===0)
  location.href="https://en.wikipedia.org/wiki/Mahatma_Gandhi";
  else if(q===0)
  location.href="https://en.wikipedia.org/wiki/Julian_Assange";
  else
  location.href="https://www.google.com/Search Again With Different Keywords?type&";
  
}
    
