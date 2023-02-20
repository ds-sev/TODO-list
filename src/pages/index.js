const newTaskFieldElement = document.querySelector('.input-form')
  tasksListSection = document.querySelector('.tasks-list')
  todoItemAddBtn = document.querySelector('.btn-add')
  taskTemplate = document.querySelector('#todo-item').content.querySelector('.list-item')

let tasks = [];

function addTask() {
  const task = newTaskFieldElement.value
  if (task === '') {
    return
  }
  const isChecked = false
  const taskObject = {
    task,
    isChecked,
    id: Date.now(),
  }
  tasks = [...tasks, taskObject]
  renderTask(taskObject)
}

function renderTask(task) {
  const taskTemplateElement = taskTemplate.cloneNode(true)
  taskTemplateElement.querySelector('.list-item__text').textContent = task.task
  taskTemplateElement.querySelector('.btn-delete').addEventListener('click', deleteTask)
  taskTemplateElement.setAttribute('id', task.id)
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
}

function renderSavedTasks() {
  if (tasks.length > 0) {
    tasks.forEach(task => {
      renderTask(task)
    })
  }
}

function storageUpdate() {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function deleteTask(evt) {
  const delTodoId = parseInt(evt.target.closest('.list-item').id)
  evt.target.closest('.list-item').remove()
  tasks = tasks.filter(task => task.id !== delTodoId)
  storageUpdate()
}

function setEventListeners() {
  document.addEventListener('DOMContentLoaded', () => {
    tasks = JSON.parse(localStorage.getItem('tasks'))
    renderSavedTasks(tasks)
  })
}

setEventListeners()

todoItemAddBtn.addEventListener('click', (evt) => {
  evt.preventDefault()
  addTask()
  newTaskFieldElement.value = ''
})
