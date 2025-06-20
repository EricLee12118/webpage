export default function Introduction() {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 space-y-2">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Introduction</h2>
      <p className="text-gray-700">
        Our project is aimed to develop a web-based high-performance multiplayer online werewolf game.
      </p>
      <p className="text-gray-700">Backend: Node.js, Socket.io</p>
      <p className="text-gray-700">Frontend: Next.js, Tailwind CSS, React</p>
      <p className="text-gray-700">Database: Postgresql</p>
      <p className="text-gray-700">
        Frontend Repository:{' '}
        <a 
          href="https://github.com/EricLee12118/frontend" 
          className="text-blue-500 hover:underline"
        >
          https://github.com/EricLee12118/frontend
        </a>
      </p>
      <p className="text-gray-700">
        Backend Repository:{' '}
        <a 
          href="https://github.com/EricLee12118/backend" 
          className="text-blue-500 hover:underline"
        >
          https://github.com/EricLee12118/backend
        </a>
      </p>
    </section>
  );
}