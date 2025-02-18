let todos=[
    {id:1,title:"lernen",isDone:false},
    {id:2,title:"kochen",isDone:false},
    {id:3,title:"essen",isDone:false},
    {id:4,title:"gym",isDone:false},
]
let index=4;
printTask()
document.getElementById("input").addEventListener("change",function(event){
    console.log(event.target.value)
    index++
    todos.push({id:index,title:event.target.value,isDone:false})
    event.target.value=""
    printTask()
})


function printTask(){
    let html=""
    todos.forEach(element =>{
        let style = element.isDone?"lightgreen":"none";
        html+="<div class='task' style='background-color:"+ style + "'>"
            + element.title + 
            "<div class='done'onClick='setDone("+element.id+")'>Done</div>" + 
            "<div class='delete'onClick='setDelete("+element.id+")'>Delete</div>"+
        "</div>"
    })
    
    document.getElementById("todos").innerHTML = html
}


function setDone(id){
    let todo = todos.find(element=>{
        if (element.id==id){
            return true;
        }
    })
    todo.isDone = !todo.isDone
    printTask()
}

function setDelete(id){
    let index = todos.findIndex(element=>{
        if(element.id==id){
            return true;
        }
        
    })
    todos.splice(index,1)
    printTask()
}