export default function About() {
  return (
    <section className="py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-900 mb-6">About this Demo</h1>
      
      <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
          This is a modern React 19 + React Router v7 demonstration project. 
          It showcases clean navigation patterns, modern UI design, and best practices for React applications.
        </p>
        
        <div className="space-y-4">
          <h3 className="font-semibold text-xl text-slate-900">Tech Stack</h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "React 19",
              "React Router v7",
              "Vite",
              "Tailwind CSS v4",
              "Oxlint",
              "React Compiler"
            ].map((tech, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-slate-700 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
