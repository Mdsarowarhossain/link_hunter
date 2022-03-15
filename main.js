var short = document.querySelector(".short");

  var url = document.querySelector("#url");

  var num = 0;

//start butbton click

short.addEventListener("click",function(){

    

    var condition = url.value;

    if(condition.match("https://drive.google.com/file/d/"))

{

var nexturl = condition.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=view&id=");

 var print = nexturl.replace("/view?usp=drivesdk","");

url.value = print;

var copytoken = short.innerHTML ="copy";

          document.querySelector(".p").innerHTML="";

num++;

} 

else if(condition.match("https://mega.nz/file/") || condition.match("https://mega.rz/file/")){

  

  

    var megaprint = condition.replace("file","embed")

 url.value =megaprint;

 

  var copytoken = short.innerHTML = "copy";

  document.querySelector(".p").innerHTML = "";

  

  num=1;

}

else if(num>0) 

  {

          document.querySelector(".p").innerHTML="";

 document.execCommand("copy");

    

    

  }

 else if(condition.match("https://www.dropbox.com/" ) && condition.match("dl=0")){

    

    var dropadd = condition.replace("dl=0","raw=1");

    url.value = dropadd;

     

  var copytoken = short.innerHTML = "copy";

  document.querySelector(".p").innerHTML = "";

  

  num=1;

  }

  else {

    

      document.querySelector(".p").innerHTML="please enter a valid url";

  }}); //end button click

url.addEventListener("cut",function(){

  short.innerHTML="short";

  document.querySelector("#copid").innerHTML="copid"

  num =0 ;

}) ;

function clear() {

  // body...

        document.querySelector(".p").innerHTML="";

}

setInterval(clear,3000);

url.addEventListener("mouseover",clear);

setInterval(function(){

  document.querySelector("#copid").innerHTML=""

},3000)

