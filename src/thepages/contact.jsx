export default function Contact({ contacts }) {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-semibold">Contact</h2>

      <p className="mt-3 text-gray-600">
        You can reach me at:
      </p>

      <ul className="mt-3 space-y-2 text-gray-700">
        <li><strong>Email:</strong> {contacts.email}</li>
        <li><strong>Phone:</strong> {contacts.phone}</li>
        <li><strong>Instagram:</strong> {contacts.instagram}</li>
        <li><strong>GitHub:</strong> {contacts.github}</li>
      </ul>
    </section>
  );
}
