export default function Project({ projects }) {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-semibold">My Projects</h2>

      <ul className="mt-4 space-y-2">
        <h6 className="font-semibold">About this Project</h6>

        {/* Loop dari JSON Server */}
        {projects && projects.map((item) => (
          <li key={item.id}>• {item.title}</li>
        ))}
      </ul>
    </section>
  );
}
