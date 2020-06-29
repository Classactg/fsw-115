// console.log(axios)
function showData(arr){
    
    for (let i = 0 ; i < arr.length ; i ++){
    
        const h1 = document.createElement('h1')
    h1.textContent = arr[i].title
    document.body.appendChild(h1)
    
    const p = document.createElement('p')
    p.textContent = arr[i].description
    document.body.appendChild(p)
    
    const price = document.createElement('price') 
    price.textContent = arr[i].price
    document.body.appendChild(price)
    if (arr[i].completed){
        h1.className = "complete"
         p.className = "complete"
          price.className = "complete"
    }
}
}
axios.get("https://api.vschool.io/benjamin/todo/")
    .then(response => {console.log(response.data)
        showData(response.data)})
    .catch(error => console.log(error))
