const todoItem = document.querySelector('.list-item')
const newTaskFieldElement = document.querySelector('.input-form')
const todoItemTemplateSelector = '#todo-item'
const taskTextSelector = '.list-item__text'
const tasksListSection = document.querySelector('.tasks-list')
const todoItemAddBtn = document.querySelector('.btn-add')
const todoItemDelBtn = document.querySelector('.btn-delete')
const taskTemplate = document.querySelector('#todo-item').content.querySelector('.list-item')
//       .content.querySelector('.list-item')
//       .cloneNode(true)




let tasks = [];

function addTask() {
  const task = newTaskFieldElement.value
  // if (task === '') {
  //   showError('')
  // }
  const taskObject = {
    task: task,
    id: Date.now()
  }
  tasks = [...tasks, taskObject]

  renderTask(task)
}

console.log(tasks)

function renderTask(task) {
  const taskTemplateElement = taskTemplate.cloneNode(true)
  taskTemplateElement.querySelector('.list-item__text').textContent = task
  tasksListSection.append(taskTemplateElement)
  storageCheck()

}


function renderSavedTasks(tasksList) {
  if (tasksList.length > 0) {
    tasksList.forEach(task => {
      renderTask(task.task)
    })
  }
}




todoItemAddBtn.addEventListener('click', () => {
  addTask()
  newTaskFieldElement.value = ''
})


// todoItemDelBtn.addEventListener('click', () => {
//   console.log('delete')
// })

// function showError(error) {
//   const messageError = document.createElement('p')
//   messageError.textContent = error
// }



function storageCheck() {
  localStorage.setItem('tasks', JSON.stringify(tasks))

}

eventListeners()
function eventListeners() {
  document.addEventListener('DOMContentLoaded', () => {
    tasks = JSON.parse(localStorage.getItem('tasks'))
    console.log(tasks)
    renderSavedTasks(tasks)
  })

  tasksListSection.addEventListener('click', deleteTask)

}

function deleteTask(evt) {
  // evt.target.closest('.list-item').remove()
  const delTodoId = evt.target.closest('.list-item')
  console.log(delTodoId)
}



//
// function showTasks() {
//   let storageSize = localStorage.length
//   console.log(storageSize)
//   if (storageSize > 0) {
//
//   }
// }
//
//
//
//
//
//
// showTasks()
//
// todoItemAddBtn.addEventListener('submit', (evt)



//
// class TodoItem {
//   constructor(todoText, templateSelector) {
//     this._todoText = todoText
//     this._templateSelector = templateSelector
//   }
//   _getTemplate() {
//     return document.querySelector(this._templateSelector)
//       .content.querySelector('.list-item')
//       .cloneNode(true)
//   }
//
//   generateItem() {
//     this._element = this._getTemplate()
//     this._element.querySelector('.list-item__text').textContent = 'hbjnkn'
//     return this._element
//
//   }
//
//   handleRemoveItem = () => {
//     this._element.remove()
//     this._element = null
//   }
//
//
//
//
// }
//
//
//
// const newItem = new TodoItem('jbjknbjnk', todoItemTemplateSelector)
//
//
// newItem.generateItem()


// console.log(document.querySelector('.list-item__text').textContent)
