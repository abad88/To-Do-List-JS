
 const inputVal = document.getElementsByClassName('inputVal')[0];

 const addTaskBtn = document.getElementsByClassName('btn')[0];
 

addTaskBtn.addEventListener('click', function (){
  
if(inputVal.value.trim()!=0){
    let localItems = JSON.parse( localStorage.getItem('localItem'))
    if(localItems === null){
         taskList = [];

    }else{
        taskList = localItems;
    }
    taskList.push(inputVal.value);
    localStorage.setItem('localItem', JSON.stringify(taskList)); 
    showItem();
}
})

function showItem(){
    let outPut = "";
    let TaskListShow = document.querySelector(".todoListItem")
    let localItems = JSON.parse( localStorage.getItem('localItem'))
    if(localItems === null){
         taskList = [];

    }else{
        taskList = localItems;
    }
    taskList.forEach((data, index )=> {
    

        outPut += `
        <div class="todoList">
            <p class="pText">${data}</p>
            <button class="deleteTask" onClick="deleteItem(${index})">x</button>
        </div>
        `
    });
    TaskListShow.innerHTML = outPut;
}
showItem();
function deleteItem(index) {
    let localItems = JSON.parse( localStorage.getItem('localItem'))
    taskList.splice(index,1);
    localStorage.setItem('localItem', JSON.stringify(taskList)); 
    showItem();
}





