
ps = 0
cs = 0
function game(n) {
    a = Math.floor(Math.random() * (4 - 1)) + 1
    score(a, n)
    console.log(a)

    var img1 = document.getElementById("im")
    var img2 = document.getElementById("im2")
    console.log(img1)


    if (n == 1) {
        img1.src = "/images/r1.png"
    }
    else if (n == 2) {
        img1.src = "/images/p2.png"
    }
    else {
        img1.src = "/images/sc1.png"
    }
    if (a == 1) {
        img2.src = "/images/r1.png"
    }
    else if (a == 2) {
        img2.src = "/images/p2.png"
    }
    else {
        img2.src = "/images/sc1.png"
    }
}

function score(a, n) {
    if (a == n) {
        document.getElementById("demo2").innerHTML = "TIE"
    }
    else if (a == 1 && n == 2) {
        document.getElementById("demo2").innerHTML = "YOU WIN"
        document.getElementById("pscore").innerHTML = ps += 1
        // document.getElementById("pd").innerHTML =

    }
    else if (a == 1 && n == 3) {
        document.getElementById("demo2").innerHTML = "YOU LOOSE"
        document.getElementById("cscore").innerHTML = cs += 1
    }
    else if (a == 2 && n == 1) {
        document.getElementById("demo2").innerHTML = "YOU LOOSE"
        document.getElementById("cscore").innerHTML = cs += 1
    }
    else if (a == 2 && n == 3) {
        document.getElementById("demo2").innerHTML = "YOU WIN"
        document.getElementById("pscore").innerHTML = ps += 1
    }
    else if (a == 3 && n == 1) {
        document.getElementById("demo2").innerHTML = "YOU WIN"
        document.getElementById("pscore").innerHTML = ps += 1
    }
    else if (a == 3 && n == 2) {
        document.getElementById("demo2").innerHTML = "YOU LOOSE"
        document.getElementById("cscore").innerHTML = cs += 1
    }
}