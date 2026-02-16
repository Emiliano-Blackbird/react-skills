import { useState } from "react";

import { Pagination } from "../components/Pagination";

export function PaginationPage() {

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 5;

  return (
    <div className="flex flex-col items-center mt-10 gap-6">

      <h1 className="text-2xl font-bold">
        Ejemplo de Paginación
      </h1>

      <p>
        Contenido de la página {currentPage}
      </p>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

    </div>
  );
}
