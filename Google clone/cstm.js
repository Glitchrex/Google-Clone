function lcky(){
  location.href="https://www.google.com/doodles"; 
}


function search() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("srch");
    filter = input.value;
    ul = document.getElementById("slst");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.indexOf(filter) > -1) {
        a.href="www.google.com";
      } else {
        li[i].style.display = "none";
      }
    }
  }