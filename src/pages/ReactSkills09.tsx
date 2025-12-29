import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Modelo de una tarea
 * 👉 Fuente única de verdad para el tipado
 */
interface Task {
  text: string;
  completed: boolean;
}

export default function Ejercicio9() {
  // Estado del input
  const [task, setTask] = useState<string>("");

  // Estado de la lista (con carga inicial desde localStorage)
  const [list, setList] = useState<Task[]>(() => {
    const savedList = localStorage.getItem("mis_tareas_v1");
    return savedList ? (JSON.parse(savedList) as Task[]) : [];
  });

  // Persistencia automática en localStorage
  useEffect(() => {
    localStorage.setItem("mis_tareas_v1", JSON.stringify(list));
  }, [list]);

  // Manejo del input
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setTask(e.target.value);
  }

  // Agregar tarea
  function handleClickAddTask(): void {
    if (task.trim() === "") return;

    const nuevaTarea: Task = {
      text: task,
      completed: false,
    };

    setList((prev) => [...prev, nuevaTarea]);
    setTask("");
  }

  // Toggle de tarea
  function handleToggleTask(index: number): void {
    const nuevaLista = list.map((tarea, i) =>
      i === index ? { ...tarea, completed: !tarea.completed } : tarea
    );

    setList(nuevaLista);
  }

  // Eliminar tareas completadas
  function handleClickRemoveTask(): void {
    setList((prev) => prev.filter((tarea) => !tarea.completed));
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="flex flex-col items-center gap-6 bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800">Ejercicio 9</h2>
        <p className="text-gray-500">Lista de Tareas (LocalStorage)</p>

        {/* Input + botón */}
        <div className="flex flex-col gap-2 w-full">
          <input
            value={task}
            onChange={handleChange}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
              e.key === "Enter" && handleClickAddTask()
            }
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            placeholder="Nueva tarea..."
          />

          <button
            onClick={handleClickAddTask}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg active:scale-95 transition-all"
          >
            Agregar tarea
          </button>
        </div>

        {/* Lista */}
        <ul className="w-full flex flex-col gap-2">
          {list.map((tarea, index) => (
            <li
              key={index}
              className={`flex items-center gap-3 p-3 rounded border transition-colors ${
                tarea.completed
                  ? "bg-green-50 border-green-200"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <input
                type="checkbox"
                checked={tarea.completed}
                onChange={() => handleToggleTask(index)}
                className="w-5 h-5 cursor-pointer"
                id={`task-${index}`}
              />

              <label
                htmlFor={`task-${index}`}
                className={`w-full cursor-pointer break-all ${
                  tarea.completed
                    ? "line-through text-gray-400"
                    : "text-gray-700 font-medium"
                }`}
              >
                {tarea.text}
              </label>
            </li>
          ))}

          {list.length === 0 && (
            <p className="text-center text-gray-400 text-sm italic py-4">
              No hay tareas pendientes
            </p>
          )}

          {list.some((t) => t.completed) && (
            <button
              onClick={handleClickRemoveTask}
              className="w-full mt-4 bg-red-100 hover:bg-red-200 text-red-600 border border-red-200 font-bold py-2 rounded-lg text-sm"
            >
              Limpiar tareas completadas 🗑️
            </button>
          )}
        </ul>

        <div className="pt-4 border-t border-gray-200 w-full text-center">
          <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
