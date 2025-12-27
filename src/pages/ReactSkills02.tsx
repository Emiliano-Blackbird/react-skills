import { useState } from "react";
import { Link } from "react-router-dom";

const Ejercicio2: React.FC = () => {
  // Estado tipado explícitamente
  const [count, setCount] = useState<number>(0);

  // Función tipada (no retorna nada)
  const handleClick = (): void => {
    setCount((prevCount: number) => prevCount + 1);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="flex flex-col gap-y-6 bg-white p-8 rounded-xl shadow-2xl text-center max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">Contador de clics</h2>

        <p className="text-gray-600">
          El siguiente botón cuenta la cantidad de veces que ha sido clickeado.
        </p>

        <button
          onClick={handleClick}
          className="bg-blue-600 mx-auto hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform active:scale-95 transition-all"
        >
          Clicks aquí
        </button>

        <p className="w-fit py-1 px-4 text-center text-blue-600 mx-auto border font-bold text-lg bg-gray-100 rounded">
          Clics: {count}
        </p>

        <div className="pt-4 border-t border-gray-200">
          <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ejercicio2;