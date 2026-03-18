import { useOutletContext } from 'react-router-dom'

function Info() {
  const character = useOutletContext()

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <h3 className="text-slate-100 font-semibold mb-4">Character Info</h3>
      
      <div className="grid grid-cols-2 gap-4">
        
        <div className="bg-slate-800 rounded-lg p-4">
          <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Status</p>
          <p className="text-slate-100 text-sm">{character.status}</p>
        </div>

        <div className="bg-slate-800 rounded-lg p-4">
          <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Species</p>
          <p className="text-slate-100 text-sm">{character.species}</p>
        </div>

        <div className="bg-slate-800 rounded-lg p-4">
          <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Gender</p>
          <p className="text-slate-100 text-sm">{character.gender}</p>
        </div>

        <div className="bg-slate-800 rounded-lg p-4">
          <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Type</p>
          <p className="text-slate-100 text-sm">{character.type || 'Unknown'}</p>
        </div>

        <div className="bg-slate-800 rounded-lg p-4">
          <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Origin</p>
          <p className="text-slate-100 text-sm">{character.origin.name}</p>
        </div>

        <div className="bg-slate-800 rounded-lg p-4">
          <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Location</p>
          <p className="text-slate-100 text-sm">{character.location.name}</p>
        </div>

      </div>
    </div>
  )
}

export default Info