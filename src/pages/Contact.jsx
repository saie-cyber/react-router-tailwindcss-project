export default function Contact() {
  return (
    <section className="py-12 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-900 mb-6">Get in Touch</h1>
      
      <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
            <input 
              type="text"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
            <input 
              type="email"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
            <textarea 
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
              placeholder="Write your message here..."
            />
          </div>
          
          <button 
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
