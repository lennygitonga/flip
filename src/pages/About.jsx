function About() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-bold text-slate-100 mb-2">
        About Character Explorer
      </h2>
      <p className="text-slate-400 mb-8">
        A React app built with React Router and the Rick and Morty API.
      </p>

      <div className="grid grid-cols-1 gap-4 mb-8">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-emerald-400 font-semibold mb-2">What it does</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Browse all characters from the Rick and Morty universe. 
            Click any character to view their details, status, origin 
            and every episode they appeared in.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-emerald-400 font-semibold mb-2">Tech Stack</h3>
          <div className="flex flex-wrap gap-2 mt-3">
            {['React 18', 'React Router DOM', 'Vite', 'Tailwind CSS', 'Rick and Morty API'].map(tech => (
              <span
                key={tech}
                className="bg-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-full border border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-emerald-400 font-semibold mb-2">What I learned</h3>
          <ul className="text-slate-400 text-sm space-y-2">
            <li>— React Router for page navigation</li>
            <li>— Nested and dynamic routing</li>
            <li>— useParams to read URL parameters</li>
            <li>— useOutletContext to share data between routes</li>
            <li>— Fetching from a real API with useEffect</li>
          </ul>
        </div>

      </div>

      <div className="bg-slate-900 border border-emerald-500/30 rounded-xl p-6">
        <p className="text-slate-400 text-sm">
          Built by <span className="text-emerald-400 font-medium">Lenny Gitonga</span> — 2026
        </p>
      </div>

    </div>
  )
}

export default About