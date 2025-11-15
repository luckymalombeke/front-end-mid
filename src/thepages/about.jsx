export default function About({ profile }) {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-semibold">About Me</h2>

      <p className="mt-3 text-gray-600">
        {profile.bio}
      </p>

      <div className="mt-4 text-gray-600">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
      </div>
    </section>
  );
}
