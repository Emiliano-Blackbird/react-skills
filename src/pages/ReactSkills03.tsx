import { useEffect, useState, ChangeEvent, KeyboardEvent } from "react";
import { Link } from "react-router-dom";

export default function Ejercicio3(): JSX.Element {
    // Estado del input
    const [item, setItem] = useState<string>("");

    // Estado de la lista (array de strings)
    const [listItems, setListItems] = useState<string[]>(() => {
        const savedList = localStorage.getItem("mi_primer_lista");
        return savedList ? (JSON.parse(savedList) as string[]) : [];
    });

    // Guardar en localStorage cuando cambia la lista
    useEffect(() => {
        localStorage.setItem("mi_primer_lista", JSON.stringify(listItems));
    }, [listItems]);

    // Evento change del input
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setItem(e.target.value);
    };

    // Agregar elemento
    const handleClickAgregar = (): void => {
        if (item.trim() === "") return;

        setListItems(prev => [...prev, item]);
        setItem("");
    };

    // Eliminar elemento por índice
    const handleClickEliminar = (indexToDelete: number): void => {
        setListItems(prev =>
            prev.filter((_, index) => index !== indexToDelete)
        );
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
            <div className="flex flex-col items-center gap-4 bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800">Lista de tareas con localStorage</h2>

                <label
                    htmlFor="task"
                    className="flex flex-col text-gray-600 font-bold text-md w-full"
                >
                    Inserta una tarea
                    <input
                        id="task"
                        type="text"
                        value={item}
                        onChange={handleChange}
                        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                            e.key === "Enter" && handleClickAgregar()
                        }
                        placeholder="Escribe aquí..."
                        className="w-full mt-2 border rounded-md px-3 py-2"
                    />
                </label>

                <button
                    onClick={handleClickAgregar}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg"
                >
                    Agregar
                </button>

                <ul className="w-full flex flex-col gap-2">
                    {listItems.map((tarea, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center p-3 bg-gray-100 rounded"
                        >
                            <span className="break-all">{tarea}</span>

                            <button
                                onClick={() => handleClickEliminar(index)}
                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                            >
                                Eliminar
                            </button>
                        </li>
                    ))}

                    {listItems.length === 0 && (
                        <p className="text-center text-gray-400 italic">
                            No hay tareas pendientes
                        </p>
                    )}
                </ul>

                <div className="pt-4 border-t w-full text-center">
                    <Link to="/" className="text-blue-500 underline">
                        ← Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
