import { useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom";

export default function Ejercicio8() {
    // Estado tipado explícitamente
    const [text, setText] = useState<string>("");

    // Estado derivado (NO es estado de React)
    const whiteSpaceRegExp = /\s+/g;

    // Caracteres (sin espacios ni saltos de línea)
    const amountChars: number = text.replace(whiteSpaceRegExp, "").length;

    // Palabras (normalizando texto)
    const amountWords: number =
        text.trim() === ""
            ? 0
            : text
                  .replace(/[^a-zA-Z0-9\s]/g, "")
                  .trim()
                  .split(/\s+/).length;

    // 3. Handler tipado correctamente
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setText(e.target.value);
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
            <div className="flex flex-col items-center gap-6 bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800">
                    Contador de palabras y caracteres en tiempo real
                </h2>

                <p className="text-gray-500">
                    Escribe o pega tu texto en el área de abajo:
                </p>

                <div className="flex flex-col gap-2 w-full">
                    <textarea
                        value={text}
                        onChange={handleChange}
                        id="texto"
                        name="texto"
                        placeholder="Ingrese un texto..."
                        className="w-full h-32 resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                <div className="w-full flex justify-between bg-gray-100 p-4 rounded-lg">
                    <div className="text-center">
                        <p className="text-sm text-gray-600">Caracteres</p>
                        <p className="text-2xl font-bold text-blue-600">
                            {amountChars}
                        </p>
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-gray-600">Palabras</p>
                        <p className="text-2xl font-bold text-green-600">
                            {amountWords}
                        </p>
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-200 w-full text-center">
                    <Link
                        to="/"
                        className="text-blue-500 hover:text-blue-700 underline"
                    >
                        ← Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
