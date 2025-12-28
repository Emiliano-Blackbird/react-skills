import { useState } from "react";
import type { ChangeEvent } from "react";
import { Link } from "react-router-dom";

export default function Ejercicio4() {
    // Lista original (constante, no estado)
    const listaOriginal: string[] = [
        "Ferrari",
        "Audi",
        "BMW",
        "Fiat",
        "Renault",
        "Lexus",
        "Toyota",
        "Chevrolet",
        "Honda",
        "Mazda",
        "Nissan",
        "Subaru",
        "Volkswagen",
        "Volvo",
        "Mitsubishi",
        "Jaguar",
        "Lamborghini",
        "Porsche",
        "Aston Martin",
        "McLaren",
        "Dodge",
        "Jeep",
        "SEAT",
    ];

    // Estado del input
    const [char, setChar] = useState<string>("");

    // Estado derivado (no useState, se calcula en cada render)
    const listaFiltrada: string[] = listaOriginal.filter((palabra) =>
        palabra.toLowerCase().includes(char.trim().toLowerCase())
    );

    // Evento change del input
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setChar(e.target.value);
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
            <div className="flex flex-col items-center gap-4 bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800">
                    Lista dinámica
                </h2>

                <label
                    htmlFor="texto"
                    className="flex flex-col text-gray-600 font-bold text-md w-full"
                >
                    🔍 Buscar
                    <input
                        id="texto"
                        type="text"
                        value={char}
                        onChange={handleChange}
                        placeholder="Escribe aquí..."
                        className="w-full mt-2 border rounded-md px-3 py-2"
                    />
                </label>

                <h3 className="text-xl font-bold text-gray-800 mt-4">
                    Lista Filtrada
                </h3>

                <ul className="w-full space-y-2">
                    {listaFiltrada.length > 0 ? (
                        listaFiltrada.map((palabra, index) => (
                            <li
                                key={index}
                                className="font-semibold px-3 py-2 rounded bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
                            >
                                {palabra}
                            </li>
                        ))
                    ) : (
                        <li className="text-gray-400 italic text-center">
                            No se encontraron resultados
                        </li>
                    )}
                </ul>

                <div className="pt-4 border-t w-full text-center mt-4">
                    <Link to="/" className="text-blue-500 underline">
                        ← Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
