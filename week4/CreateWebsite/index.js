var page1 = getElementById("page1")

function page(){
    

const button = document.createElement('button')
button.textContent = arr[i].description
document.body.appendChild(button)
button.addEventListener("click",function(){axios.get("https://api.vschool.io/pokemon")
.then(response => {console.log(response)
    showData(response.data)
})
.catch(error => console.log(error))
})

function showData(arr){

    for (let i = 0 ; i < arr.length ; i ++){
    const h1 = document.createElement('h1')
    h1.textContent = arr[i].name
    document.body.appendChild(h1)
    
    const p = document.createElement('p')
    p.textContent = arr[i].resource_uri
    document.body.appendChild(p)
    
    const pokemonArr = data.objects[0].pokemon
        showData(pokemonArr)

}}