document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const select = document.getElementById("priority-select");
    const list = document.getElementById("todo-list");
    
    let todos = [];
  
    todos.push({ text: "Pendiente 1", priority: "Urgente" });
    todos.push({ text: "Pendiente 2", priority: "No urgente" });
    todos.push({ text: "Pendiente 3", priority: "Puede esperar" });
    
    renderTodos();//a
    
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const todoText = input.value.trim();
      const priority = select.value;
      if (todoText !== "") {
        const todo = {
          text: todoText,
          priority: priority
        };
        todos.push(todo);
        renderTodos();
        input.value = "";
      }
    });
    
    function renderTodos() {
      list.innerHTML = "";
      const priorityOrder = ["Urgente", "No urgente", "Puede esperar"];
      todos.sort((a, b) => priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)); // Ordenar por prioridad
      todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.textContent = `${todo.text} - Prioridad: ${todo.priority}`;
        
        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.addEventListener("click", function() {
          const newText = prompt("Editar pendiente", todo.text);
          if (newText !== null) {
            todo.text = newText.trim();
            renderTodos();
          }
        });
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", function() {
          todos.splice(index, 1);
          renderTodos();
        });
        
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        list.appendChild(li);
      });
    }
  });
  