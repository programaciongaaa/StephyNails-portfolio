export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 StephyNails. Todos los derechos reservados.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-gray-400">
            Instagram
          </a>
          <a href="#" className="hover:text-gray-400">
            Facebook
          </a>
          <a href="#" className="hover:text-gray-400">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}