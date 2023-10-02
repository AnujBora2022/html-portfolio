const TodoList =[{
  name:'Example 1',
  dueDate:'2023-09-02'
},{
  name:'Example 2',
  dueDate:'2023-09-03'
}];

renderTodoList();

function renderTodoList(){
  let todoListHtml = '';

  for(let i = 0;i<TodoList.length;i++){
    const todoObject = TodoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name,dueDate }= todoObject;
    
    const html =`
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick ="
          TodoList.splice(${i},1);
          renderTodoList();
        " class ="delete-todo-button">Delete</button>
        `;
    todoListHtml += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHtml;
}


function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  TodoList.push({
    // name:name,
    // dueDate:dueDate
    name,
    dueDate
  });
  

  inputElement.value = '';//it will make input todo name box empty after adding

  renderTodoList();  
}