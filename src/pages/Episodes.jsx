import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

function Episodes() {
  const character = useOutletContext()
  const [episodes, setEpisodes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const episodeIds = character.episode.map(url => url.split('/').pop())
    
    fetch(`https://rickandmortyapi.com/api/episode/${episodeIds.join(',')}`)
      .then(res => res.json())
      .then(data => {
        const results = Array.isArray(data) ? data : [data]
        setEpisodes(results)
        setLoading(false)
      })
  }, [character])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-32">
        <p className="text-emerald-400 animate-pulse">Loading episodes...</p>
      </div>
    )
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <h3 className="text-slate-100 font-semibold mb-4">
        Episodes — {episodes.length} appearances
      </h3>

      <div className="grid grid-cols-1 gap-3">
        {episodes.map(episode => (
          <div
            key={episode.id}
            className="bg-slate-800 rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <p className="text-slate-100 text-sm font-medium">{episode.name}</p>
              <p className="text-slate-500 text-xs mt-1">{episode.air_date}</p>
            </div>
            <span className="text-emerald-400 text-xs font-mono bg-slate-900 px-2 py-1 rounded">
              {episode.episode}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Episodes