export default function LearnMore() {
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-6">
          <span>💡</span>
          Learn More
        </div>

        <h1 className="text-4xl font-bold text-slate-900 mb-6">Learn More About This Project</h1>
        <p className="text-lg text-slate-600 mb-10">Everything you need to know about the technologies used in this demo</p>

        <div className="grid gap-6">
          {[
            {
              title: "React 19",
              desc: "The latest version of React with built-in performance improvements, new hooks and the React Compiler.",
              color: "from-cyan-500 to-blue-600"
            },
            {
              title: "React Router v7",
              desc: "The official routing library for React with modern data fetching, nested layouts and first class suspense support.",
              color: "from-purple-500 to-indigo-600"
            },
            {
              title: "Tailwind CSS v4",
              desc: "Utility first CSS framework that makes building beautiful custom interfaces incredibly fast.",
              color: "from-sky-500 to-teal-600"
            },
            {
              title: "Vite",
              desc: "Next generation frontend tooling with instant hot module replacement and lightning fast builds.",
              color: "from-yellow-500 to-orange-600"
            }
          ].map((item, i) => (
            <div 
              key={i}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-sm font-bold`}>
                  {item.title.charAt(0)}
                </div>
                <h3 className="font-semibold text-lg text-slate-900">{item.title}</h3>
              </div>
              <p className="text-slate-600 ml-13">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}