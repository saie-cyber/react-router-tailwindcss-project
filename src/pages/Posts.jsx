const posts = [
  {
    id: 1,
    title: "Introduction to React",
    desc: "Learn the fundamentals of React components, hooks and state management.",
    date: "Oct 10, 2026"
  },
  {
    id: 2,
    title: "Understanding React Router",
    desc: "Deep dive into client side routing, nested routes and navigation patterns.",
    date: "Oct 12, 2026"
  },
  {
    id: 3,
    title: "Building a React Application",
    desc: "Complete guide to structuring and building production ready React apps.",
    date: "Oct 14, 2026"
  },
];

export default function Posts() {
  return (
    <section className="py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Latest Posts</h1>
      
      <div className="space-y-4">
        {posts.map((post) => (
          <div 
            key={post.id}
            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-xl text-slate-900 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                <p className="text-slate-600 mt-1">{post.desc}</p>
              </div>
              <span className="text-sm text-slate-500 whitespace-nowrap ml-4">{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
