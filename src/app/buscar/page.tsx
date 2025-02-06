"use client"

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

const SearchResults = () => {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [results, setResults] = useState([])

  useEffect(() => {
    if (query) {
      // Simulación de búsqueda (aquí podrías hacer una llamada a una API)
      const fakeData = [
        { id: 1, name: "Servicio A", href: "/servicios/a" },
        { id: 2, name: "Servicio B", href: "/servicios/b" },
      ]
      setResults(fakeData.filter(item => item.name.toLowerCase().includes(query.toLowerCase())))
    }
  }, [query])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-white">Resultados para: "{query}"</h1>
      {results.length > 0 ? (
        <ul className="mt-4">
          {results.map(result => (
            <li key={result.id} className="py-2">
              <a href={result.href} className="text-red-400 hover:underline">{result.name}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 mt-4">No se encontraron resultados.</p>
      )}
    </div>
  )
}

export default SearchResults
