export default function Navbar() {
  return (
    <nav className="w-full bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">
          StephyNails
        </div>
        <ul className="flex gap-4">
          <li>Servicios</li>
          <li>Nosotros</li>
          <li>Contacto</li>
        </ul>
      </div>
    </nav>
  );
}