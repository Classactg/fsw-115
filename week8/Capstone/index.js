var id = document.FullName
console.log(id)
id.addEventListener("submit", function(event){event.preventDefault()
    console.log(event.currentTarget.children)
    var page = document.createElement("li")
    document.getElementById("list").append(page)
    for (i = 0; i < event.currentTarget.children.length - 1; i++){
        var text = event.currentTarget.children[i].value + " "
        page.append(text)
    }
var deletebtn = document.createElement("button")
    page.append(deletebtn)
    deletebtn.textContent = "Delete"
    deletebtn.addEventListener("click", function(event)
{page.remove()
    console.log("remove")})
    
    var random = Math.floor(Math.random() * colors.length)
    console.log(random)
    page.style.color = colors[random]
    
    axios.put("https://api.vschool.io/benjamin/todo/"+(arr[i]._id), {completed: event.target.checked})
    .then(response => {console.log(response.data)
       
    })
    .catch(error => console.log(error))
// }  
})

const deleteButton = document.createElement("button")
deleteButton.textContent = "Delete"
document.body.appendChild(deleteButton)

deleteButton.addEventListener("click", function(event){
    console.log(event.target.checked)
// if (event.target.checked){
    axios.delete("https://api.vschool.io/benjamin/todo/"+(arr[i]._id) )
    .then(response => {console.log(response.data)
       
    })
    .catch(error => console.log(error))
// }  
})


axios.get("https://api.vschool.io/benjamin/todo/")
.then(response => {console.log(response.data)
    showData(response.data)})
.catch(error => console.log(error))
