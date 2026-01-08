import { useEffect, useState } from "react";

/**
 * ❌ MODELO MAL DEFINIDO
 */
interface Task {
  text: string;
  completed: boolean; // ❌ debería ser boolean (se cambió string a boolean para que devuelva true o false)
}

export default function BrokenTodo() {
  /**
   * ❌ Estado sin tipo explícito y valor inicial incorrecto (se cambió any[] a Task[] array vacío correcto de tareas)
   */
  const [tasks, setTasks] = useState<Task[]>([]);

  /**
   * ❌ Estado que puede ser string o number sin control (se cambió null a string vacío para evitar problemas al usar el valor)
   */
  const [input, setInput] = useState("");

  /**
   * ❌ useEffect sin dependencias correctas
   */
  useEffect(() => {
    localStorage.setItem("tasks", tasks);
  });

  /**
   * ❌ Evento mal tipado
   */
  function handleChange(e: Event) {
    setInput(e.target.value);
  }

  /**
   * ❌ Mutación directa del estado
   * ❌ Objeto no cumple la interfaz Task
   */
  function addTask() {
    const newTask = {
      text: input,
      completed: "false",
    };

    tasks.push(newTask);
    setTasks(tasks);
  }

  /**
   * ❌ Index sin tipar
   */
  function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    setTasks(tasks);
  }

  return (
    <div>
      <h2>Broken Todo</h2>

      <input
        value={input}
        onChange={handleChange}
        placeholder="Nueva tarea"
      />

      <button onClick={addTask}>Agregar</button>

      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(i)}
            />
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
