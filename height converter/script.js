// ans = 0
function conv() {
     a = parseFloat(document.getElementById("feet").value)
     b =parseFloat( document.getElementById("inches").value)
     
     console.log(typeof(a))
    rst(a, b)



}
function rst(f, i) {
    s = f * 12
    console.log(s)
    
    i += s
    console.log(i)
    ans = i * 2.54
    document.getElementById("results").innerHTML = ans

}