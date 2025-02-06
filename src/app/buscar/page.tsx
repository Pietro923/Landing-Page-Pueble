"use client"

import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

const Navbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const router = useRouter()

  const handleSearch = useCallback(() => {
    if (searchTerm.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(searchTerm)}`)
    }
  }, [searchTerm, router])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <nav className="bg-gray-900 p-4 w-full flex justify-between items-center">
      <div className="text-white text-xl font-bold">Mi Aplicación</div>
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar..."
          className="p-2 pr-10 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          aria-label="Buscar"
        >
          <Search size={20} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
