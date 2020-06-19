console.log("testing")
const xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        console.log(data.objects[0].pokemon)
        const pokemonArr = data.objects[0].pokemon
        showData(pokemonArr)
    }
}

function showData(arr){
    for (let i = 0 ; i < arr.length ; i ++){
    const h1 = document.createElement('h1')
    h1.textContent = arr[i].name
    document.body.appendChild(h1)
    const p = document.createElement('p')
    p.textContent = arr[i].resource_uri
    document.body.appendChild(p)
    
}
}