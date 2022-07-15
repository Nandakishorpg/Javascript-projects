
const r = Math.floor(Math.random() * (101 - 1)) + 1
c = 0
function play() {
    if(c<=10){
    c++

    n = document.getElementById("guess").value
    console.log(r)
    chk(r, n)}
    else{
        document.getElementById("message2").innerHTML="Your Limit EXCEED"
    }
    }
function chk(r, n) {
    if (r == n) {
        document.getElementById("message2").innerHTML = "CORRECT ANSWER IN YOUR "+" "+c+" TRY"

    }
    else if (r > n) {
        document.getElementById("message2").innerHTML = "SORRY.....!!  THE NUMBER IS GREATER THAN YOUR NUMBER"
        
    }
    else if (r < n) {
        document.getElementById("message2").innerHTML = "SORRY.....!!  THE NUMBER IS LESSER THAN YOUR NUMBER"
    }
}

