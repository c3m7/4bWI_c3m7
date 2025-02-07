let data = [
    {firstName: "Umut", lastName: "Kos", age: 18},
    {firstName: "Cem", lastName: "Cetinkaya", age: 20},
    {firstName: "Ömer", lastName: "Akin", age: 11},
]

function loadPeople(){
    let html = ""
    data.forEach(person => {
        const randomId = Math.floor(Math.random() * 1000);
        html += 
        `<div class='person'>
            <div class="name">${person.firstName} ${person.lastName}, Age: ${person.age}</div>
        </div>`
    })
    document.getElementById("content").innerHTML = html
}

loadPeople()