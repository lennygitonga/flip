import { useState, useEffect } from 'react'
import { useParams, NavLink, Outlet, useNavigate } from 'react-router-dom'

function CharacterDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(data => {
        setCharacter(data)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-emerald-400 animate-pulse">Loading character...</p>
      </div>
    )
  }

  return (
    <div>
     
      <button
        onClick={() => navigate('/dashboard/characters')}
        className="text-slate-400 hover:text-emerald-400 text-sm mb-6 flex items-center gap-2 transition-colors"
      >
        ← Back to Characters
      </button>

      
      <div className="flex gap-6 mb-8 bg-slate-900 border border-slate-800 rounded-xl p-6">
        <img
          src={character.image}
          alt={character.name}
          className="w-32 h-32 rounded-xl object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold text-slate-100 mb-1">
            {character.name}
          </h2>
          <div className="flex items-center gap-2 mb-3">
            <span className={`w-2.5 h-2.5 rounded-full ${
              character.status === 'Alive' ? 'bg-emerald-400' :
              character.status === 'Dead' ? 'bg-red-400' :
              'bg-slate-400'
            }`}></span>
            <p className="text-slate-400 text-sm">
              {character.status} · {character.species}
            </p>
          </div>
          <p className="text-slate-500 text-sm">
            From: {character.origin.name}
          </p>
        </div>
      </div>

     
      <div className="flex gap-2 mb-6">
        <NavLink
          to="info"
          className={({ isActive }) =>
            isActive
              ? "bg-emerald-500 text-slate-950 px-4 py-2 rounded-lg text-sm font-medium transition-all"
              : "text-slate-400 hover:text-emerald-400 hover:bg-slate-800 px-4 py-2 rounded-lg text-sm transition-all"
          }
        >
          Info
        </NavLink>
        <NavLink
          to="episodes"
          className={({ isActive }) =>
            isActive
              ? "bg-emerald-500 text-slate-950 px-4 py-2 rounded-lg text-sm font-medium transition-all"
              : "text-slate-400 hover:text-emerald-400 hover:bg-slate-800 px-4 py-2 rounded-lg text-sm transition-all"
          }
        >
          Episodes
        </NavLink>
      </div>

     
      <Outlet context={character} />
    </div>
  )
}

export default CharacterDetail