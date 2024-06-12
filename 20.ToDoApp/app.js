let api = [];
const addToDo = document.querySelector(".addToDo"); 
const addToDoInput = document.querySelector(".addToDoInput");
const ToDobox = document.querySelector(".ToDobox"); 
const allDelBtn = document.querySelector(".allDelBtn"); 
const modalText = document.querySelector(".modalText");
const saveEdit = document.querySelector(".saveEdit"); 
const errorMessage = document.querySelector(".errorMessage")
allDelBtn.addEventListener("click", function(){
    if(api.length === 0){
        alert("hec bir item yoxdur!");
    }
    else{
        api = []; 
        createToDo();
    }
});

addToDo.addEventListener("submit",function(e){
    e.preventDefault();
    if( addToDoInput.value ==="" ){
        errorMessage.style.display = "block";
    }
    else{
        let obj = {
            id: api.length + 1,
            todo : addToDoInput.value,
        };
        api.push(obj); 
        addToDoInput.value = ""; 
        createToDo(); 
    }
})

saveEdit.addEventListener("click", function(){
    api = api.map((elem)=>{
        if(elem.id == modalText.getAttribute("data")){
            elem.todo = modalText.value; 
        }
        return elem;
    })
    createToDo(); 
})

function createToDo(){
    ToDobox.innerHTML ="";
    api.forEach((element, index)=>{
        const ToDoItem = document.createElement('div'); 
        const ToDoText = document.createElement('p'); 
        const deleteBtn = document.createElement('button'); 
        const editBtn = document.createElement('button'); 
        ToDoItem.className = "ToDoItem card "; 
        ToDoText.className = "ToDoText card-body mb-0"; 
        deleteBtn.className = "deleteBtn btn btn-danger me-1"; 
        editBtn.className = "editBtn btn btn-warning";
    
        ToDoText.innerHTML = (index+1) + "-" + element.todo;
        deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`; 
        editBtn.innerHTML = "Edit";
        editBtn.setAttribute("data-bs-toggle", "modal"); 
        editBtn.setAttribute("data-bs-target", "#exampleModal");
        editBtn.setAttribute("data",element.id); 
        deleteBtn.setAttribute("id", element.id);
    
        ToDoItem.append(ToDoText,deleteBtn,editBtn); 
        ToDobox.appendChild(ToDoItem); 
    
        deleteBtn.addEventListener("click",function(e){
            if (confirm("Are you sure to delete?")) {
            api = api.filter((elem)=> elem.id !=e.currentTarget.getAttribute("id"));
            createToDo();
        }
        })
        editBtn.addEventListener("click",function(e){
            e.target.getAttribute("data")
            modalText.value = api.find((elem)=>elem.id==e.target.getAttribute("data")).todo; 
            modalText.setAttribute("data",e.target.getAttribute("data"))
        })
    })

}



