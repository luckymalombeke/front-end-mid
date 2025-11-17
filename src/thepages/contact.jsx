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

        <li><strong>Instagram</strong>
          <a 
            href={contacts.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {contacts.instagram}
          </a>
        </li>

        <li>
          <strong>GitHub:</strong>{" "}
          <a 
            href={contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {contacts.github}
          </a>
        </li>
      </ul>
    </section>
  );
}
