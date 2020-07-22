// console.log(axios)
function showData(arr){
    var ol = document.getElementsByTagName("ol")[0]
    for (let i = 0 ; i < arr.length ; i ++){
    var li = document.createElement("li")
    ol.appendChild(li)
        const h1 = document.createElement("h1")
    h1.textContent = arr[i].title.toUpperCase()||arr[i].name.toUpperCase()
    li.appendChild(h1)
    
    const p = document.createElement("p")
    p.textContent = arr[i].description||arr[i].hair_color
    li.appendChild(p)
    
    const price = document.createElement("price") 
    price.textContent = arr[i].price||arr[i].height
    li.appendChild(price)
    if (arr[i].completed){
        h1.className = "complete"
         p.className = "complete"
          price.className = "complete"
    }

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    li.appendChild(checkbox)

    checkbox.addEventListener("change", function(event){
        console.log(event.target.checked)
    // if (event.target.checked){
        axios.put("https://api.vschool.io/benjamin/todo/"+(arr[i]._id), {completed: event.target.checked})
        .then(response => {console.log(response.data)
          location.reload() 
        })
        .catch(error => console.log(error))
    // }  
    })

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    li.appendChild(deleteButton)

    deleteButton.addEventListener("click", function(event){
        console.log(event.target.checked)
    // if (event.target.checked){
        axios.delete("https://api.vschool.io/benjamin/todo/"+(arr[i]._id) )
        .then(response => {console.log(response.data)
         location.reload() 
        })
        .catch(error => console.log(error))
    // }  
    })

}
}
axios.get("https://api.vschool.io/benjamin/todo/")
    .then(response => {
        console.log(response.data)
        var cost = response.data
        axios.get("https://swapi.dev/api/people/1/")
            .then(response => {
                console.log(response.data)
                cost.push(response.data)
                console.log(cost)
                showData(cost)
            })
            .catch(error => console.log(error))
                })
    .catch(error => console.log(error))

var duty = document.getElementById("name")
duty.addEventListener("submit", function (event){
    event.preventDefault()
    console.log(event.target.children)

var inputs = event.target.children

var input1 = inputs[0].value

var input2 = inputs[1].value

var input3 = inputs[2].value



var newObject = {
    title: input1, description: input2, price: input3
}
    console.log(newObject)

    axios.post("https://api.vschool.io/benjamin/todo/", newObject)
    .then(response => {console.log(response.data)
        location.reload()
    })
    .catch(error => console.log(error))

})

// p.h1 = arr[i]._price