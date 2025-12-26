import { useState } from "react";
import { Link } from "react-router-dom";

export default function Ejercicio1() {
    const [bgColor, setBgColor] = useState<string>('#ffffff');

    const generarColorAleatorio = (): void => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setBgColor(randomColor);
    }

    return (
        <div 
            style={{ backgroundColor: bgColor }} 
            className="min-h-screen flex flex-col justify-center items-center transition-colors duration-500 ease-in-out"
        >
            <div className="bg-white p-8 rounded-xl shadow-2xl text-center max-w-md">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Ejercicio 1</h2>
                <p className="mb-6 text-gray-600">
                    Haz clic en el botón para cambiar el fondo de la página aleatoriamente.
                </p>

                <div className="mb-6 font-mono text-lg bg-gray-100 p-2 rounded">
                    Color actual: <span className="font-bold">{bgColor}</span>
                </div>

                <button 
                    onClick={generarColorAleatorio}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-blue-500/50 transform active:scale-95 transition-all"
                >
                    Cambiar Color
                </button>

                <div className="mt-8 pt-4 border-t border-gray-200">
                    <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
                        ← Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
