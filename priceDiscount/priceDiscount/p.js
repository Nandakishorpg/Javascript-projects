

x="summer"
y="onam"
z="winter"
var t=1
var b=1
function pri(){
    a = document.getElementById("pr").value
    var ch = document.getElementById("ch").value

    if(ch == x){
        var d=20
        t= (d / 100) * a;  
        var at=a-t 
        document.getElementById("m1").innerHTML="You get "+d+ "%  discount  ";
  
    }
    else if(ch == y){
        var d=10
        t= (d / 100) * a;  
        var at=a-t 
        document.getElementById("m1").innerHTML="You get "+d+ "% discount  ";
   
  
    }
    else if(ch == z){
        var d=15
        t= (d / 100) * a;  
        var at=a-t 
        document.getElementById("m1").innerHTML="You get "+d+ "% discount  ";
   
    }
     document.getElementById("m").innerHTML="Your discount amount is : "+at+ "Rs";
}