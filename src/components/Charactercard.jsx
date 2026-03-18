import { useNavigate } from 'react-router-dom'

function CharacterCard({ character }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/dashboard/characters/${character.id}`)}
      className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden cursor-pointer hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-200"
    >
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-3">
        <h3 className="text-slate-100 font-medium text-sm truncate">
          {character.name}
        </h3>
        <div className="flex items-center gap-1.5 mt-1">
          <span className={`w-2 h-2 rounded-full ${
            character.status === 'Alive' ? 'bg-emerald-400' :
            character.status === 'Dead' ? 'bg-red-400' :
            'bg-slate-400'
          }`}></span>
          <p className="text-slate-400 text-xs">{character.status} · {character.species}</p>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard