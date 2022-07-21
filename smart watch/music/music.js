





// function dd() {

//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             console.log(this.responseText)
//             let a = JSON.parse(this.responseText)
//             // console.log(a)
//             let b = a.music
//             // console.log(b)
//             let c = b[0]
//             // console.log(c)

//             document.getElementById('songName').innerHTML = c.name;
//             document.getElementById('songImage').src = b[0].img;
//             var x = document.getElementById("playSong")
//             x.src = b[0].song
//             // console.log(x)

//             var m = document.getElementById('cl');
//             console.log(m.className)
//             if (m.className == "fa fa-play") {

               

//                 x.pause()



//             }
//             else {
//                 x.play()


               

//             }
           



//         }
//     }
//     xhttp.open("GET", "music.json", true);
//     xhttp.send();
// }
// const play = 'fa-solid fa-play'
// const pause = 'fa-solid fa-pause'
// const btn = document.querySelectorAll('.btn')
// function onChange(event) {
//     const buttonElement = event.currentTarget
//     const isPlayButton = buttonElement.classList.contains(play)
//     if (isPlayButton) {
//         buttonElement.classList.remove(play)
//         buttonElement.classList.add(pause)

//     } else {
//         buttonElement.classList.remove(pause)
//         buttonElement.classList.add(play)
//     }

// }
// btn.forEach(btn => {
//     btn.addEventListener('click', onChange)
// })
function myfunction(z) {
    z.classList.toggle("fa-pause");
}
function forward() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            let a = JSON.parse(this.responseText)
            let b = a.music

            c = 0
            if (c < b.length) {
                c++
            }
            else {
                c = 0
            }
            var d = b[c]
            document.getElementById('songName').innerHTML = d.name;
            document.getElementById('songImage').src = b[c].img;
            var x = document.getElementById("playSong")
            x.src = b[c].song
            x.play()
        }
    }
    xhttp.open("GET", "music.json", true);
    xhttp.send();
}
function backward() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            let a = JSON.parse(this.responseText)
            let b = a.music

            c = 0
            if (c > b.length) {
                c--
            }
            else {
                c = 0
            }
            var d = b[c]
            document.getElementById('songName').innerHTML = d.name;
            document.getElementById('songImage').src = b[c].img;
            var x = document.getElementById("playSong")
            x.src = b[c].song
            x.play()
        }
    }
    xhttp.open("GET", "music.json", true);
    xhttp.send();
}
function dd() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            let a = JSON.parse(this.responseText)
            // console.log(a)
            let b = a.music
            // console.log(b)
            // let c = b[0]
            // console.log(c)

            c = 0
            if (c == b.length) {
                c++
            }
            else {
                
            }
            var d = b[c]
            document.getElementById('songName').innerHTML = d.name;
            document.getElementById('songImage').src = b[c].img;
            var x = document.getElementById("playSong")
            x.src = b[0].song
            // console.log(x)

            var m = document.getElementById('cl');
            console.log(m.className)
            if (m.className == "fa fa-play") {

               

                x.pause()



            }
            else {
                x.play()


               

            }
           



        }
    }
    xhttp.open("GET", "music.json", true);
    xhttp.send();
}