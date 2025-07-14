export default function Hero() {
  return (
    // <section> es una etiqueta de HTML semántica, ideal para una sección de página.
    <section className="w-full text-center py-20 sm:py-32 bg-white">
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900">
        Belleza a Domicilio,
        <br />
        Cuando la Necesites.
      </h1>
      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        Peluquería, maquillaje y uñas por profesionales expertos, sin salir de casa.
      </p>
      <div className="mt-8">
        <a
          href="#"
          className="bg-black text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-gray-800 transition-colors"
        >
          Agendar una Cita
        </a>
      </div>
    </section>
  );
}