 var page1 =document.getElementById("page1")

    function page() {
         
        axios.get("https://api.vschool.io/pokemon")
    .then(response => { console.log()
        for(let i = 0; i < Object.keys(response.data).length; i++)}
        
            const div = document.createElement("div")
            div.textContent = response.data.name
            document.body.appendChild(div)   
            
            const h1 = document.createElement("h1")
            h1.textContent = Object.keys(response.data)[i]
            div.appendChild(h1) 
                  
     
        
    axios.catch(error => console.log(error))
    console.log(page1)
    }
    
    page1.addEventListener("click", page)
