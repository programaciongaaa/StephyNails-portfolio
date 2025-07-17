export default function Navbar() {
  return (
    <nav className="w-full bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">
          StephyNails
        </div>
        <ul className="flex gap-4">
  <li><a href="#servicios" className="hover:text-gray-400">Servicios</a></li>
  <li><a href="#galeria" className="hover:text-gray-400">Galería</a></li>
  <li><a href="#testimonios" className="hover:text-gray-400">Testimonios</a></li>
  <li><a href="#contacto" className="hover:text-gray-400">Contacto</a></li>
</ul>
      </div>
    </nav>
  );
}