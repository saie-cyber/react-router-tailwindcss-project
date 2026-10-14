import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="py-12">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6 animate-slideUp">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          React Router v7 Demo
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight animate-slideUp animate-delay-100">
          Beautiful modern routing
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            with React 19
          </span>
        </h1>
        
        <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto animate-slideUp animate-delay-200">
          Clean, animated navigation with glassmorphism design, smooth transitions and modern UI patterns.
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-slideUp animate-delay-300">
          <button 
            onClick={() => navigate('/get-started')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Started
          </button>
          <button 
            onClick={() => navigate('/learn-more')}
            className="px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium shadow-sm hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            Learn More
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mt-20">
          {[
            { title: "Fast Navigation", desc: "Instant page transitions with client side routing", icon: "⚡" },
            { title: "Modern Design", desc: "Glassmorphism, gradients and beautiful animations", icon: "✨" },
            { title: "Fully Responsive", desc: "Works perfectly on every device size", icon: "📱" },
          ].map((feature, i) => (
            <div 
              key={i}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400 group"
              style={{ animationDelay: `${(i + 4) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
