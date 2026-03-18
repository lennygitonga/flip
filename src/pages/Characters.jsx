import { useState, useEffect } from 'react'
import CharacterCard from '../components/CharacterCard'

function Characters() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-emerald-400 text-lg animate-pulse">Loading characters...</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-100 mb-6">All Characters</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  )
}

export default Characters