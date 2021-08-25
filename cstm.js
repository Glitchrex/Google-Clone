
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
}



function scrch(){
    
  var str=document.getElementById("srch").value;
  if(str=="")
  location.href="https://github.com/Glitchrex";
    else if(str=='Google'||str=='google'||str=='GOOGLE'||str=='ggl')
         location.href="https://www.google.com";
    else  if(str=='Youtube'||str=='youtube'||str=='YOUTUBE')
         location.href="https://www.youtube.com";
   else if(str=='fb'||str=='Facebook'||str=='facebook'||str=='FACEBOOK'||str=='Fb'||str=='FB')
         location.href="https://www.facebook.com/";
           else if(str=='ig'||str=='instagram'||str=='Instagram'||str=='INSTAGRAM'||str=="IG"||str=="Ig")
         location.href="https://www.instagram.com/";
    else if(str=='whatsapp web'||str=='WHATSAPP'||str=='whatsapp'||str=='Whatsapp')
         location.href="https://web.whatsapp.com/";
   else if(str=="assignment" || str=='Assignment'|| str=='ASSIGNMENT'|| str=='8th sem Assignment')
  location.href="https://mega.nz/folder/2VQUFBJI#SOrwJ70dumLqVQpr6n9ejw";
   else if(str=="uid" || str=='Uid'|| str=='UID'|| str=='uid ')
  location.href="https://mega.nz/fm/TYAFkIzL"; 
    else if(str=="iot" || str=='IOT'|| str=='Iot'|| str=='Aruna mam'|| str=='ARUNA MAM'||str=='iot class')
  location.href="https://meet.google.com/hgu-drse-dgm";
    else if(str=="Class"||str=='class' ||str=='CLASS')
  location.href="https://classroom.google.com/";
  else if(str=="Msec"||str=='msec' ||str=='MSEC')
  location.href="http://www.prasanthkpv.in/msec/Login.php";
  else if(str=="print"||str=='Print' ||str=='PRINT')
  location.href="https://mega.nz/folder/7Rh1TC7L#BUCoIYdnRrO77-SReIlHhw";
   else if(str=='p' ||str=='P')
  location.href="https://mega.nz/folder/aMwHjY5S#HH6OASbBGRtK_bI12vPF6A";
  else
 location.href="https://www.google.com/search?q="+str;
}
