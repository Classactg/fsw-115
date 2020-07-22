async function getData(){
    
    try {
        const response = await axios.get("https://rickandmortyapi.com/api/location/4") 
        
        listLocationsToDOM(response)
    
    for (let i = 0 ; i < 2; i++){ 
         
        console.log(response.data.residents[i])
        console.log(response.data.residents)
         const locations = await axios.get(response.data.residents[i])
         console.log(locations)
         listLocationsToDOM(locations)
    }

        
    }
    catch(error){
        console.log(error)
    }
    
    
}

getData()

function listLocationsToDOM(locations){
    const h1 = document.createElement("h1")
    h1.textContent = `${locations.data.name}`
    document.body.appendChild(h1)

}

// axios.get("https://rickandmortyapi.com/api/location/4").then(res=>{
//     console.log(res)
// }
