const todoItem = document.querySelector('.list-item')
const newTaskFieldElement = document.querySelector('.input-form')
const todoItemTemplateSelector = '#todo-item'
const taskTextSelector = '.list-item__text'
const tasksListSection = document.querySelector('.tasks-list')
const todoItemAddBtn = document.querySelector('.btn-add')
const todoItemDelButton = document.querySelector('.btn-delete')
const taskTemplate = document.querySelector('#todo-item').content.querySelector('.list-item')

const checkboxElement = document.querySelector('.list-checkbox')

//       .content.querySelector('.list-item')
//       .cloneNode(true)




let tasks = [];

function addTask() {
  const task = newTaskFieldElement.value
  const isChecked = false
  // if (task === '') {
  //   showError('')
  // }
  const taskObject = {
    task,
    isChecked,
    id: Date.now()
  }
  tasks = [...tasks, taskObject]

  renderTask(taskObject)

}


function renderTask(task) {
  const taskTemplateElement = taskTemplate.cloneNode(true)
  taskTemplateElement.querySelector('.list-item__text').textContent = task.task

  taskTemplateElement.querySelector('.btn-delete').addEventListener('click', deleteTask)
  taskTemplateElement.setAttribute('id', task.id)
  // taskId.textContent = task.id
  const taskCheckboxElement = taskTemplateElement.querySelector('.list-checkbox')

  taskCheckboxElement.addEventListener('click', () => toggleCheckbox(task, taskCheckboxElement))

  tasksListSection.append(taskTemplateElement)

function checkboxStatusUpload() {
    if (task.isChecked !== false) {
      taskCheckboxElement.classList.add('list-checkbox_active')
    } else {
      taskCheckboxElement.classList.remove('list-checkbox_active')
    }
  }
  checkboxStatusUpload()

  storageUpdate()





}


function toggleCheckbox(task, checkboxElement) {
  if (!task.isChecked) {
    task.isChecked = true
    storageUpdate()
    checkboxElement.classList.add('list-checkbox_active')
  } else {
    task.isChecked = false
    storageUpdate()
    checkboxElement.classList.remove('list-checkbox_active')
  }
  console.log(task.isChecked)

}


  // taskCheckboxElement.classList.remove('list-checkbox_active')
  //
  //   tasks = JSON.parse(localStorage.getItem('tasks'))
  //   tasks.forEach(task => {
  //     if (task.isChecked === false) {
  //       task.isChecked = true
  //       taskCheckboxElement.classList.remove('list-checkbox_active')
  //     } else {
  //       taskCheckboxElement.classList.add('list-checkbox_active')
  //     }
  //   })







  // taskTemplateElement.querySelector('.list-checkbox').addEventListener('click', () => {
  //   saveStatus(task.id)
  // })






function renderSavedTasks() {

  if (tasks.length > 0) {
    tasks.forEach(task => {
      renderTask(task)

      // const taskId = document.querySelectorAll('.list-item__id')
      //
      // taskId.textContent = task.id

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


function storageUpdate() {
  localStorage.setItem('tasks', JSON.stringify(tasks))

}


function setEventListeners() {
  document.addEventListener('DOMContentLoaded', () => {
    tasks = JSON.parse(localStorage.getItem('tasks'))

    renderSavedTasks(tasks)
    console.log(tasks)
    // console.log(tasks)
  })
}

setEventListeners()

function deleteTask(evt) {
  // const delTodoId = parseInt(evt.target.closest('.list-item')
  //   .querySelector('.list-item__id').textContent)

  const delTodoId = parseInt(evt.target.closest('.list-item').id)

  evt.target.closest('.list-item').remove()
  tasks = tasks.filter(task => task.id !== delTodoId)
  storageUpdate()
}




// function toggleCheckbox(task) {
//   if (task.isChecked === false) {
//     task.isChecked = true
//   }
  // console.log(task.isChecked)
// }



// function checkStatus() {
// tasks = JSON.parse(localStorage.getItem('tasks'))
//   tasks.forEach(task => {
//     if (task.isChecked === false) {
//
//       document.querySelector('.list-checkbox').classList.add('list-checkbox_active')
//     }
//   })
// }

// checkStatus()
// console.log(checkboxElement)

// function saveStatus(id) {
//   // const checkbox = document.getElementById(id).('.list-checkbox')
//   // localStorage.setItem(id, )
//   console.log(checkbox)
// }



