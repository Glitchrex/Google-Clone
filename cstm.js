function loc(){
  if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(showpos);
  } else{
  alert('Browser not supported')
  }
  function showpos(position){
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  var api=( "http://maps.googleapis.com/maps/api/geocode/json?"+ position.coords.latitude + "," + position.coords.longitude);
  console.log(api);
  document.getElementById("a").innerhtml=location.href="https://maps.google.com?q="+ position.coords.latitude + "," + position.coords.longitude;
  }
  };
  
  function scrch(){
  var str=document.getElementById("srch").value;
  str=str.trim();
  if(str=="")
  location.href="https://github.com/Glitchrex";
  else if(str=='Google'||str=='google'||str=='GOOGLE'||str=='ggl')
  location.href="https://www.google.com";
  else if(str=='Youtube'||str=='youtube'||str=='YOUTUBE')
  location.href="https://www.youtube.com";
  else if(str=='fb'||str=='Facebook'||str=='facebook'||str=='FACEBOOK'||str=='Fb'||str=='FB')
  location.href="https://www.facebook.com/";
  else if(str=='ig'||str=='instagram'||str=='Instagram'||str=='INSTAGRAM'||str=="IG"||str=="Ig")
  location.href="https://www.instagram.com/";
  else if(str=='whatsapp web'||str=='WHATSAPP'||str=='whatsapp'||str=='Whatsapp')
  location.href="https://web.whatsapp.com/";
  else if(str=='Tushar'||str=='tushar'||str==='TUSHAR'||str==='tushar pratap singh'||str==='Tushar pratap singh'||str==='TUSHAR PRATAP SINGH')
  location.href="https://github.com/PinkMoon25";
  else if(str=='to do list'||str=='TO DO LIST'||str=='To do list')
  location.href="https://pinkmoon25.github.io/To-Do-list/";
  else
  location.href="https://www.google.com/search?q="+str;
  };
  
  const searchBtn = document.getElementById('search');
  const locateBtn = document.getElementById('locate');
  
  searchBtn.addEventListener('click', scrch);
  locateBtn.addEventListener('click', loc);

  document.addEventListener('keypress',(e) => {
  if(e.key === "Enter") {
  scrch();
  }
  });
  