export default function GetStarted() {
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-6">
          <span>🚀</span>
          Getting Started Guide
        </div>

        <h1 className="text-4xl font-bold text-slate-900 mb-6">Let's Get Started</h1>
        <p className="text-lg text-slate-600 mb-10">Follow these simple steps to start building amazing React applications</p>

        <div className="space-y-6">
          {[
            { step: 1, title: "Setup your project", desc: "Create a new React project with Vite for lightning fast development experience." },
            { step: 2, title: "Install dependencies", desc: "Add React Router and Tailwind CSS for modern routing and styling." },
            { step: 3, title: "Configure routes", desc: "Setup your navigation structure and define your application routes." },
            { step: 4, title: "Build your pages", desc: "Create page components and start building out your user interface." },
          ].map((item, i) => (
            <div 
              key={item.step}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex gap-5 items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
                {item.step}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-slate-900">{item.title}</h3>
                <p className="text-slate-600 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}